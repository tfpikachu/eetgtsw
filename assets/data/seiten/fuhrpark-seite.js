/* FUHRPARK-SEITE BEARBEITEN. Einzelne Fahrzeuge stehen weiterhin in ../fahrzeuge.js */
window.EETG_PAGE_CONTENT = {
  seitentitel: "Fahrzeugfuhrpark | EETG",
  beschreibung: "Lokomotiven und Triebzüge der EETG.",
  inhalte: [
    { selector: ".page-hero h1", text: "Fahrzeugfuhrpark" },
    { selector: ".page-hero .lead", text: "Leistungsfähige Lokomotiven und Triebzüge für Güter-, Personen- und Rangierleistungen." },
    { selector: "#vehicleSearch", attribute: "placeholder", wert: "Fahrzeug suchen …" },
    { selector: ".filter-btn[data-filter='all']", text: "Alle" },
    { selector: ".filter-btn[data-filter='electric']", text: "Elektro" },
    { selector: ".filter-btn[data-filter='diesel']", text: "Diesel" },
    { selector: ".filter-btn[data-filter='trainset']", text: "Triebzüge" },
    { selector: "#noVehicles", text: "Keine passenden Fahrzeuge gefunden." }
  ]
};
