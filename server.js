const express = require("express");
const cors = require("cors"); // 1. Importa
const { dietPlan } = require("./dietData.js");
require("dotenv").config();
console.log("Chiave API caricata:", process.env.GEMINI_API_KEY ? "SI" : "NO");

const PORT = process.env.PORT || 10000;
// const HOST = "0.0.0.0";

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

app.post("/api/genera-ricetta-automatica", async (req, res) => {
  // Riceviamo i dati esatti dal frontend (fondamentale per Primo/Secondo)
  const { notaUtente, pastoNome, ingredienti, focusCategoria } = req.body;
  let requestAborted = false;

  console.log("📩 Richiesta ricevuta per:", pastoNome);

  // Controllo di sicurezza
  if (!ingredienti) {
    return res
      .status(400)
      .json({ error: "Nessun ingrediente ricevuto dal client." });
  }

  try {
    // CORREZIONE: Uso del modello corretto (1.5 è più stabile e veloce)
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const prompt = `
      Agisci come un Personal Chef e Nutrizionista.
      Pasto: ${pastoNome}.
      Ingredienti forniti: ${ingredienti}.

      FORMATO RISPOSTA OBBLIGATORIO:
      1. La PRIMA riga deve essere: "TITOLO: [Nome creativo della ricetta]"
      2. Il resto deve essere in Markdown pulito.
      3. NON usare blocchi di codice <code>.

      OBIETTIVO: 
      ${
        focusCategoria
          ? `Genera la ricetta ESCLUSIVAMENTE per il ${focusCategoria.toUpperCase()}.`
          : "Crea un menù completo con tutte le portate indicate."
      }
      
      NOTA UTENTE: ${notaUtente || "Crea una ricetta bilanciata."}

      "Agisci come il mio nutrizionista personale. Da questo momento, ogni volta che ti chiedo una ricetta, devi seguire rigorosamente queste linee guida estratte dal mio piano alimentare:

      Importante fare attenzione ad avere una o più proteine ma che rispettino il peso della proteina nella dieta.

1. Regole Generali e Quantità

Pesi: Tutti i pesi degli alimenti devono riferirsi al prodotto crudo e al netto degli scarti.


Frequenza: Le ricette devono essere pensate per pasti distribuiti ogni 3 ore circa.


Ordine del pasto: Ogni ricetta di pranzo o cena deve prevedere di iniziare con il contorno di verdure.

2. Condimenti e Sapori

Grassi: Usa esclusivamente olio extravergine di oliva a crudo o durante la cottura. È vietato l'uso di burro, strutto, margarina o panna.


Sale e Spezie: Riduci al minimo il sale (usa preferibilmente sale iposodico tipo Novosal). Esalta i sapori usando erbe aromatiche (basilico, menta, rosmarino, ecc.) e spezie (pepe, curcuma, zenzero, ecc.).

Acidi: Puoi usare aceto di vino, di mele o succo di limone. Evita la glassa di aceto balsamico.

3. Scelta degli Ingredienti

Proteine: Prediligi carni magre (pollo, tacchino, vitello, cavallo) e pesce magro. Evita molluschi e crostacei.


Uova: Prevedi cotture sode, alla coque, occhio di bue o frittate con verdure (senza olio o formaggio se strapazzate).


Carboidrati: Pasta, riso, orzo, farro e grano sono intercambiabili a parità di peso. Ricorda che patate, mais e legumi sono carboidrati e non contorni.


Verdure: Il contorno non va pesato (quantità libera). Limita però carote, pomodori e olive.

Per la frutta : no banana, uva, fichi. Vietato aggiungere altra frutta al cibo oltre quella indicata

Dolcificanti: Vietati zucchero bianco, di canna e fruttosio. Ammessi con moderazione Stevia o Dietor.

4. Metodi di Cottura Consentiti
Usa solo: griglia, forno, padella antiaderente, umido, cartoccio, lesso o vapore.

Per i primi: è consigliato saltare la pasta in padella con il condimento per abbassare l'indice glicemico.

Per i secondi: puoi sfumare con vino bianco o rosso. È ammessa una panatura leggera senza uovo, ma solo occasionalmente.

Per il pane: deve essere sempre tostato in padella.


5. Bevande
Acqua liscia povera di sodio, tè, tisane o massimo 3 caffè al giorno senza zucchero. Vietati alcolici e bevande gassate."
    `;

    console.log("🤖 Interrogazione Gemini in corso...");
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    console.log("✅ Generazione riuscita. Invio risposta...");

    res.json({
      ricetta: text,
      focus: focusCategoria || "Pasto Completo",
    });
  } catch (error) {
    console.error("❌ ERRORE IA:", error.message);
    res.status(500).json({
      error: "Errore durante la generazione.",
      details: error.message,
    });
  }
});
app.listen(PORT, () => {
  console.log(`✅ Server in esecuzione sulla porta ${PORT}`);
  console.log(`🚀 Pronto per ricevere richieste dal frontend`);
});
