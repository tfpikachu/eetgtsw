/*
  EETG-Fahrzeugdaten
  ==================
  Hier kannst du Fahrzeuge ändern, entfernen oder ergänzen.

  WICHTIG:
  - Jeder Eintrag steht zwischen { und }.
  - Zwischen zwei Fahrzeugen muss ein Komma stehen.
  - Erlaubte Kategorien: "electric", "diesel", "trainset"
  - Ein Bild ist optional. Lege es z. B. unter assets/img/fahrzeuge/ ab
    und trage den Pfad bei "bild" ein. Ohne Bild erscheint die grafische Lok-Silhouette.
*/
window.EETG_VEHICLES = [
  {
    name: "Vectron MS",
    kategorie: "electric",
    typ: "Elektrolokomotive",
    status: "EETG Flotte",
    geschwindigkeit: "200 km/h",
    leistung: "6.400 kW",
    bild: ""
  },
  {
    name: "BR 185.2",
    kategorie: "electric",
    typ: "Elektrolokomotive",
    status: "EETG Flotte",
    geschwindigkeit: "160 km/h",
    leistung: "5.600 kW",
    bild: ""
  },
  {
    name: "BR 187",
    kategorie: "electric",
    typ: "Elektrolokomotive",
    status: "EETG Flotte",
    geschwindigkeit: "140 km/h",
    leistung: "5.600 kW",
    bild: ""
  },
  {
    name: "BR 101",
    kategorie: "electric",
    typ: "Elektrolokomotive",
    status: "EETG Flotte",
    geschwindigkeit: "220 km/h",
    leistung: "6.400 kW",
    bild: ""
  },
  {
    name: "BR 218",
    kategorie: "diesel",
    typ: "Diesellokomotive",
    status: "EETG Flotte",
    geschwindigkeit: "140 km/h",
    leistung: "1.840 kW",
    bild: ""
  },
  {
    name: "BR 232",
    kategorie: "diesel",
    typ: "Diesellokomotive",
    status: "EETG Flotte",
    geschwindigkeit: "120 km/h",
    leistung: "2.200 kW",
    bild: ""
  },
  {
    name: "BR 294",
    kategorie: "diesel",
    typ: "Rangierlokomotive",
    status: "EETG Flotte",
    geschwindigkeit: "80 km/h",
    leistung: "1.000 kW",
    bild: ""
  },
  {
    name: "Talent 2",
    kategorie: "trainset",
    typ: "Elektrotriebzug",
    status: "EETG Flotte",
    geschwindigkeit: "160 km/h",
    leistung: "2.020 kW",
    bild: ""
  },
  {
    name: "Desiro HC",
    kategorie: "trainset",
    typ: "Elektrotriebzug",
    status: "EETG Flotte",
    geschwindigkeit: "160 km/h",
    leistung: "4.000 kW",
    bild: ""
  }
];
