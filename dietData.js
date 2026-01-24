const dietPlan = {
  // LUNEDÌ
  1: {
    dayName: "Lunedì",
    meals: [
      {
        id: "colaz",
        name: "Colazione",
        start: 6,
        end: 10,
        img: "./colazione.jpeg",
        options: [
          {
            description: "Caffè, Latte e Biscotti",
            components: [
              { name: "Caffè", qty: null, unit: "qb" },
              { name: "Latte", qty: 150, unit: "ml" },
              { name: "Biscotti", qty: 4, unit: "pz" },
            ],
          },
        ],
      },
      {
        id: "spunt1",
        name: "Spuntino",
        start: 10,
        end: 12,
        img: "./mela.jpg",
        options: [
          {
            description: "Frutta",
            components: [
              {
                name: "Frutta",
                qty: 150,
                unit: "g",
                note: "No banana/uva/fichi",
              },
            ],
          },
        ],
      },
      {
        id: "pranzo",
        name: "Pranzo",
        start: 12,
        end: 15,
        img: "./lenticchia.webp",
        options: [
          {
            description: "Legumi e Pollo",
            components: [
              {
                name: "Legumi (Lenticchie/Ceci)",
                qty: 200,
                unit: "g",
                category: "Primo",
              },
              {
                name: "Petto di Pollo",
                qty: 150,
                unit: "g",
                category: "Secondo",
              },
              {
                name: "Pane integrale",
                qty: 30,
                unit: "g",
                category: "Primo",
              },
              {
                name: "Verdure",
                qty: null,
                unit: "a volontà",
                category: "Contorno",
              },
            ],
          },
        ],
      },
      {
        id: "merenda",
        name: "Merenda",
        start: 15,
        end: 19,
        img: "./yogurt.jpg",
        options: [
          {
            description: "Yogurt",
            components: [{ name: "Yogurt", qty: 125, unit: "g" }],
          },
        ],
      },
      {
        id: "cena",
        name: "Cena",
        start: 19,
        end: 22,
        img: "./carnemagra.jpg",
        options: [
          {
            description: "Carne Magra",
            components: [
              { name: "Carne Magra", qty: 180, unit: "g" },
              { name: "Pane integrale", qty: 80, unit: "g" },
              { name: "Verdure", qty: null, unit: "a volontà" },
            ],
          },
        ],
      },
      {
        id: "spunt2",
        name: "Dopocena",
        start: 22,
        end: 24,
        img: "./cioccolato-fondente.jpg",
        options: [
          {
            description: "Cioccolato e Tisana",
            components: [
              { name: "Cioccolato Fondente", qty: 10, unit: "g" },
              { name: "Tisana", qty: 1, unit: "tazza" },
            ],
          },
        ],
      },
    ],
  },
  // MARTEDÌ
  2: {
    dayName: "Martedì",
    meals: [
      {
        id: "colaz",
        name: "Colazione",
        start: 6,
        end: 10,
        img: "./colazione.jpeg",
        options: [
          {
            description: "Caffè e Biscotti",
            components: [
              { name: "Latte", qty: 150, unit: "ml" },
              { name: "Biscotti", qty: 4, unit: "pz" },
            ],
          },
        ],
      },
      {
        id: "spunt1",
        name: "Spuntino",
        start: 10,
        end: 12,
        img: "./mela.jpg",
        options: [
          {
            description: "Frutta",
            components: [{ name: "Frutta", qty: 150, unit: "g" }],
          },
        ],
      },
      {
        id: "pranzo",
        name: "Pranzo",
        start: 12,
        end: 15,
        img: "./pastalasugo.webp",
        options: [
          {
            description: "Pasta e Merluzzo",
            components: [
              {
                name: "Pasta integrale al pomodoro",
                qty: 80,
                unit: "g",
                category: "Primo",
              },
              {
                name: "Cuore di Merluzzo",
                qty: 150,
                unit: "g",
                category: "Secondo",
              },
              {
                name: "Verdure",
                qty: null,
                unit: "a volontà",
                category: "Contorno",
              },
            ],
          },
        ],
      },
      {
        id: "merenda",
        name: "Merenda",
        start: 15,
        end: 19,
        img: "./yogurt.jpg",
        options: [
          {
            description: "Yogurt",
            components: [{ name: "Yogurt", qty: 125, unit: "g" }],
          },
        ],
      },
      {
        id: "cena",
        name: "Cena",
        start: 19,
        end: 22,
        img: "./Frittata.webp",
        options: [
          {
            description: "Frittata",
            components: [
              { name: "Uova", qty: 2, unit: "pz" },
              { name: "Pane integrale", qty: 80, unit: "g" },
              { name: "Verdure", qty: null, unit: "a volontà" },
            ],
          },
        ],
      },
      {
        id: "spunt2",
        name: "Dopocena",
        start: 22,
        end: 24,
        img: "./cioccolato-fondente.jpg",
        options: [
          {
            description: "Cioccolato",
            components: [{ name: "Cioccolato Fondente", qty: 10, unit: "g" }],
          },
        ],
      },
    ],
  },
  // MERCOLEDÌ
  3: {
    dayName: "Mercoledì",
    meals: [
      {
        id: "colaz",
        name: "Colazione",
        start: 6,
        end: 10,
        img: "./colazione.jpeg",
        options: [
          {
            description: "Standard",
            components: [
              { name: "Latte", qty: 150, unit: "ml" },
              { name: "Biscotti", qty: 4, unit: "pz" },
            ],
          },
        ],
      },
      {
        id: "spunt1",
        name: "Spuntino",
        start: 10,
        end: 12,
        img: "./mela.jpg",
        options: [
          {
            description: "Frutta",
            components: [{ name: "Frutta", qty: 150, unit: "g" }],
          },
        ],
      },
      {
        id: "pranzo",
        name: "Pranzo",
        start: 12,
        end: 15,
        img: "./poke_salmone_avo1.jpg",
        options: [
          {
            description: "Riso e Salmone",
            components: [
              { name: "Riso Basmati", qty: 70, unit: "g", category: "Primo" },
              {
                name: "Salmone fresco/affumicato",
                qty: 120,
                unit: "g",
                category: "Secondo",
              },
              { name: "Avocado", qty: 30, unit: "g", category: "Condimento" },
              {
                name: "Verdure miste",
                qty: null,
                unit: "a volontà",
                category: "Contorno",
              },
            ],
          },
        ],
      },
      {
        id: "merenda",
        name: "Merenda",
        start: 15,
        end: 19,
        img: "./yogurt.jpg",
        options: [
          {
            description: "Yogurt",
            components: [{ name: "Yogurt", qty: 125, unit: "g" }],
          },
        ],
      },
      {
        id: "cena",
        name: "Cena",
        start: 19,
        end: 22,
        img: "./pesceascelta.jpg",
        options: [
          {
            description: "Pesce",
            components: [
              { name: "Pesce magro", qty: 180, unit: "g" },
              { name: "Pane integrale", qty: 80, unit: "g" },
              { name: "Verdure", qty: null, unit: "a volontà" },
            ],
          },
        ],
      },
      {
        id: "spunt2",
        name: "Dopocena",
        start: 22,
        end: 24,
        img: "./cioccolato-fondente.jpg",
        options: [
          {
            description: "Cioccolato",
            components: [{ name: "Cioccolato Fondente", qty: 10, unit: "g" }],
          },
        ],
      },
    ],
  },
  // GIOVEDÌ
  4: {
    dayName: "Giovedì",
    meals: [
      {
        id: "colaz",
        name: "Colazione",
        start: 6,
        end: 10,
        img: "./colazione.jpeg",
        options: [
          {
            description: "Caffè, Latte e Biscotti",
            components: [
              { name: "Latte", qty: 150, unit: "ml" },
              { name: "Biscotti", qty: 4, unit: "pz" },
            ],
          },
        ],
      },
      {
        id: "spunt1",
        name: "Spuntino",
        start: 10,
        end: 12,
        img: "./mela.jpg",
        options: [
          {
            description: "Frutta",
            components: [{ name: "Frutta", qty: 150, unit: "g" }],
          },
        ],
      },
      {
        id: "pranzo",
        name: "Pranzo",
        start: 12,
        end: 15,
        img: "./zucchine.jpeg",
        options: [
          {
            description: "Pasta e Hamburger",
            components: [
              {
                name: "Pasta integrale alle zucchine",
                qty: 80,
                unit: "g",
                category: "Primo",
              },
              {
                name: "Hamburger di vitello",
                qty: 150,
                unit: "g",
                category: "Secondo",
              },
              {
                name: "Verdure",
                qty: null,
                unit: "a volontà",
                category: "Contorno",
              },
            ],
          },
        ],
      },
      {
        id: "merenda",
        name: "Merenda",
        start: 15,
        end: 19,
        img: "./yogurt.jpg",
        options: [
          {
            description: "Yogurt",
            components: [{ name: "Yogurt", qty: 125, unit: "g" }],
          },
        ],
      },
      {
        id: "cena",
        name: "Cena",
        start: 19,
        end: 22,
        img: "./polloallagriglia.webp",
        options: [
          {
            description: "Pollo",
            components: [
              { name: "Pollo alla griglia", qty: 180, unit: "g" },
              { name: "Pane integrale", qty: 80, unit: "g" },
              { name: "Verdure", qty: null, unit: "a volontà" },
            ],
          },
        ],
      },
      {
        id: "spunt2",
        name: "Dopocena",
        start: 22,
        end: 24,
        img: "./cioccolato-fondente.jpg",
        options: [
          {
            description: "Cioccolato",
            components: [{ name: "Cioccolato Fondente", qty: 10, unit: "g" }],
          },
        ],
      },
    ],
  },
  // VENERDÌ
  5: {
    dayName: "Venerdì",
    meals: [
      {
        id: "colaz",
        name: "Colazione",
        start: 6,
        end: 10,
        img: "./colazione.jpeg",
        options: [
          {
            description: "Standard",
            components: [
              { name: "Latte", qty: 150, unit: "ml" },
              { name: "Biscotti", qty: 4, unit: "pz" },
            ],
          },
        ],
      },
      {
        id: "spunt1",
        name: "Spuntino",
        start: 10,
        end: 12,
        img: "./mela.jpg",
        options: [
          {
            description: "Frutta",
            components: [{ name: "Frutta", qty: 150, unit: "g" }],
          },
        ],
      },
      {
        id: "pranzo",
        name: "Pranzo",
        start: 12,
        end: 15,
        img: "./risotto-funghi-porcini.jpg",
        options: [
          {
            description: "Risotto e Mozzarella",
            components: [
              { name: "Riso ai funghi", qty: 80, unit: "g", category: "Primo" },
              {
                name: "Mozzarella o Speck (30g)",
                qty: 120,
                unit: "g",
                category: "Secondo",
              },
              {
                name: "Verdure",
                qty: null,
                unit: "a volontà",
                category: "Contorno",
              },
            ],
          },
        ],
      },
      {
        id: "merenda",
        name: "Merenda",
        start: 15,
        end: 19,
        img: "./yogurt.jpg",
        options: [
          {
            description: "Yogurt",
            components: [{ name: "Yogurt", qty: 125, unit: "g" }],
          },
        ],
      },
      {
        id: "cena",
        name: "Cena",
        start: 19,
        end: 22,
        img: "./pesceascelta.jpg",
        options: [
          {
            description: "Pesce",
            components: [
              { name: "Pesce alla piastra", qty: 180, unit: "g" },
              { name: "Pane integrale", qty: 80, unit: "g" },
              { name: "Verdure", qty: null, unit: "a volontà" },
            ],
          },
        ],
      },
      {
        id: "spunt2",
        name: "Dopocena",
        start: 22,
        end: 24,
        img: "./cioccolato-fondente.jpg",
        options: [
          {
            description: "Cioccolato",
            components: [{ name: "Cioccolato Fondente", qty: 10, unit: "g" }],
          },
        ],
      },
    ],
  },
  // SABATO
  6: {
    dayName: "Sabato",
    meals: [
      {
        id: "colaz",
        name: "Colazione",
        start: 6,
        end: 10,
        img: "./colazione.jpeg",
        options: [
          {
            description: "Caffè e Biscotti",
            components: [
              { name: "Latte", qty: 150, unit: "ml" },
              { name: "Biscotti", qty: 4, unit: "pz" },
            ],
          },
        ],
      },
      {
        id: "spunt1",
        name: "Spuntino",
        start: 10,
        end: 12,
        img: "./mela.jpg",
        options: [
          {
            description: "Frutta",
            components: [{ name: "Frutta", qty: 150, unit: "g" }],
          },
        ],
      },
      {
        id: "pranzo",
        name: "Pranzo",
        start: 12,
        end: 15,
        img: "./tortellini-brodo.jpg",
        options: [
          {
            description: "Tortellini o Pasta e Carne",
            components: [
              {
                name: "Tortellini in brodo",
                qty: 170,
                unit: "g",
                category: "Piatto Unico",
              },
            ],
          },
          {
            description: "Pasta e Carne",
            components: [
              { name: "Pasta corta", qty: 60, unit: "g", category: "Primo" },
              {
                name: "Tagliata di manzo",
                qty: 150,
                unit: "g",
                category: "Secondo",
              },
            ],
          },
        ],
      },
      {
        id: "merenda",
        name: "Merenda",
        start: 15,
        end: 19,
        img: "./yogurt.jpg",
        options: [
          {
            description: "Yogurt",
            components: [{ name: "Yogurt", qty: 125, unit: "g" }],
          },
        ],
      },
      {
        id: "cena",
        name: "Cena",
        start: 19,
        end: 22,
        img: "./Pizza.jpg",
        options: [
          {
            description: "Pizza Libera",
            components: [
              {
                name: "Pizza a scelta",
                qty: 1,
                unit: "pz",
                note: "Margherita/Bresaola/4 Stagioni",
              },
            ],
          },
        ],
      },
      {
        id: "spunt2",
        name: "Dopocena",
        start: 22,
        end: 24,
        img: "./cioccolato-fondente.jpg",
        options: [
          {
            description: "Relax",
            components: [{ name: "Tisana", qty: 1, unit: "tazza" }],
          },
        ],
      },
    ],
  },
  // DOMENICA
  0: {
    dayName: "Domenica",
    meals: [
      {
        id: "colaz",
        name: "Colazione",
        start: 6,
        end: 10,
        img: "./colazione.jpeg",
        options: [
          {
            description: "Standard",
            components: [
              { name: "Latte", qty: 150, unit: "ml" },
              { name: "Biscotti", qty: 4, unit: "pz" },
            ],
          },
        ],
      },
      {
        id: "spunt1",
        name: "Spuntino",
        start: 10,
        end: 12,
        img: "./mela.jpg",
        options: [
          {
            description: "Frutta",
            components: [{ name: "Frutta", qty: 150, unit: "g" }],
          },
        ],
      },
      {
        id: "pranzo",
        name: "Pranzo",
        start: 12,
        end: 15,
        img: "./lasagna.webp",
        options: [
          {
            description: "Pasto Libero",
            components: [
              {
                name: "Pasto Libero",
                qty: null,
                unit: "libero",
                category: "Piatto Unico",
              },
            ],
          },
        ],
      },
      {
        id: "merenda",
        name: "Merenda",
        start: 15,
        end: 19,
        img: "./dolcetto.jpg",
        options: [
          {
            description: "Dolcetto",
            components: [{ name: "Dolce", qty: 1, unit: "pz" }],
          },
        ],
      },
      {
        id: "cena",
        name: "Cena",
        start: 19,
        end: 22,
        img: "./Piadina.webp",
        options: [
          {
            description: "Piadina",
            components: [
              { name: "Piadina al tonno", qty: 1, unit: "pz" },
              { name: "Tonno naturale", qty: 80, unit: "g" },
            ],
          },
        ],
      },
      {
        id: "spunt2",
        name: "Dopocena",
        start: 22,
        end: 24,
        img: "./tisana-benefici.jpg",
        options: [
          {
            description: "Tisana",
            components: [{ name: "Tisana", qty: 1, unit: "tazza" }],
          },
        ],
      },
    ],
  },
};

export { dietPlan };
