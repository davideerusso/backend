const express = require("express");
const cors = require("cors"); // 1. Importa
const { dietPlan } = require("./dietData.js");
require("dotenv").config();
console.log("Chiave API caricata:", process.env.GEMINI_API_KEY ? "SI" : "NO");

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const app = express();

// --- MIDDLEWARE: L'ordine qui è VITALE ---
app.use(cors()); // 2. Deve essere la PRIMA istruzione dopo 'app'
app.use(express.json());

// --- ROTTE ---
app.get("/api/get-diet-plan", (req, res) => {
  console.log("Richiesta ricevuta: invio dieta al frontend...");
  res.json(dietPlan);
});
const getPastoAttuale = () => {
  const ora = new Date().getHours();
  const giornoSettimana = new Date().getDay();

  console.log("--- DEBUG DIETA ---");
  console.log("Giorno rilevato (0-6):", giornoSettimana);
  console.log("Ora rilevata:", ora);

  const oggi = dietPlan[giornoSettimana];

  if (!oggi) {
    console.log("ERRORE: Nessun dato trovato per il giorno", giornoSettimana);
    return null;
  }

  console.log(
    "Piani disponibili per oggi:",
    oggi.meals.map((m) => m.name),
  );

  const pasto = oggi.meals.find((m) => ora >= m.start && ora < m.end);

  if (!pasto) {
    console.log("ERRORE: Nessun pasto configurato per l'ora", ora);
  } else {
    console.log("Pasto trovato:", pasto.name);
  }

  return pasto;
};

app.post("/api/genera-ricetta-automatica", async (req, res) => {
  const pastoAttuale = getPastoAttuale();
  const { notaUtente } = req.body;

  if (
    !pastoAttuale ||
    !pastoAttuale.options ||
    pastoAttuale.options.length === 0
  ) {
    return res.status(404).json({ error: "Dati pasto non validi o mancanti" });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" }); // Estrazione sicura
    const opzionePredefinita = pastoAttuale.options[0];
    if (!opzionePredefinita.components) {
      throw new Error("Componenti non trovati nell'opzione selezionata");
    }

    const ingredientiArray = opzionePredefinita.components.map((c) => {
      return `${c.qty || ""} ${c.unit || ""} ${c.name}`;
    });

    const ingredientiStringa = ingredientiArray.join(", ");

    const prompt = `
      Oggi è ${new Date().toLocaleDateString("it-IT", { weekday: "long" })}.
      Pasto: ${pastoAttuale.name}.
      Ingredienti da usare: ${ingredientiStringa}.
      Nota dell'utente: ${notaUtente || "Crea una ricetta semplice."}
      
      Istruzioni: Crea una ricetta veloce rispettando le quantità. 
      Sii creativo ma rimani fedele agli ingredienti indicati.
    `;

    const result = await model.generateContent(prompt);

    res.json({
      titoloPasto: pastoAttuale.name,
      ingredientiBase: ingredientiStringa,
      ricetta: result.response.text(),
      immagine: pastoAttuale.img,
    });
  } catch (error) {
    console.error("Errore IA:", error);
    res.status(500).json({ error: "Errore durante la generazione con Gemini" });
  }
});

app.listen(3000, () => console.log("Server attivo sulla porta 3000"));
