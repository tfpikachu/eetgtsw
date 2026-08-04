/* KONTAKT, LEISTUNGSANFRAGE UND BEWERBERPORTAL BEARBEITEN */
window.EETG_PAGE_CONTENT = {
  seitentitel: "Kontakt | EETG",
  beschreibung: "Kontakt, Leistungsanfragen und Bewerbungen bei der EETG.",
  inhalte: [
    { selector: ".page-hero h1", text: "Kontakt" },
    { selector: ".page-hero .lead", text: "Der direkte Weg zu unserem fiktiven Team." },
    { selector: ".contact-card h2", text: "Kontaktdaten" },
    { selector: ".contact-card p:nth-of-type(1)", html: "Erfurter Eisenbahn Transport Gesellschaft<br>Bahnhofsplatz 1<br>99084 Erfurt" },
    { selector: ".contact-card p:nth-of-type(2)", html: "Telefon: +49 361 000 00 000<br>E-Mail: kontakt@eetg-rail.de" },
    { selector: ".tab-btn[data-tab='contact']", text: "Kontakt" },
    { selector: ".tab-btn[data-tab='service']", text: "Leistungsanfrage" },
    { selector: ".tab-btn[data-tab='application']", text: "Bewerbung" }
  ],
  auswahllisten: {
    "#service select[name='Leistung']": ["Güterverkehr", "Personenverkehr", "Traktionsleistung", "Rangierleistung", "Sonderverkehr"],
    "#application select[name='Position']": ["Triebfahrzeugführer/in", "Rangierbegleiter/in", "Disponent/in", "Werkstattmitarbeiter/in", "Verwaltung", "Initiativbewerbung"]
  }
};
