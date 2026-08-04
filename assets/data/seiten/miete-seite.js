/* SEITE "MIETE MICH" BEARBEITEN */
window.EETG_PAGE_CONTENT = {
  seitentitel: "Miete mich | EETG",
  beschreibung: "Fahrzeugvermietung und Mietanfrage bei der EETG.",
  inhalte: [
    { selector: ".page-hero h1", text: "Fahrzeug mieten" },
    { selector: ".page-hero .lead", text: "Von der kurzfristigen Ersatzlok bis zum langfristigen Flotteneinsatz." },
    { selector: ".form-info .eyebrow", text: "Direkte Anfrage" },
    { selector: ".form-info .section-title", text: "Passende Traktion. Klarer Prozess." },
    { selector: ".form-info > .lead", text: "Die Anfrage wird in dieser Demo lokal im Browser gespeichert und nicht versendet." },
    { selector: ".form-info .step:nth-child(1) b", text: "Fahrzeug wählen" },
    { selector: ".form-info .step:nth-child(1) p", text: "Baureihe und Einsatzprofil festlegen." },
    { selector: ".form-info .step:nth-child(2) b", text: "Einsatz beschreiben" },
    { selector: ".form-info .step:nth-child(2) p", text: "Zeitraum, Land und Leistungsart angeben." },
    { selector: ".form-info .step:nth-child(3) b", text: "Anfrage absenden" },
    { selector: ".form-info .step:nth-child(3) p", text: "Wir bestätigen den Eingang direkt im Formular." },
    { selector: ".form-card .notice", text: "Vielen Dank! Deine Fahrzeuganfrage wurde lokal gespeichert." },
    { selector: "form[data-form='Fahrzeuganfrage'] button[type='submit']", text: "Fahrzeuganfrage senden →" }
  ],
  auswahllisten: {
    "select[name='Einsatzland']": ["Deutschland", "Österreich", "Schweiz", "Polen", "Tschechien", "Niederlande", "Belgien", "Frankreich", "Italien"],
    "select[name='Leistungsart']": ["Güterverkehr", "Personenverkehr", "Rangierdienst", "Ersatzverkehr"]
  }
};
