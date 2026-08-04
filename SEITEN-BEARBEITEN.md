# Seiteninhalte einfach bearbeiten

Für jede Seite gibt es nun eine eigene, leicht bearbeitbare Datei im Ordner:

`assets/data/seiten/`

## Zuordnung

- `startseite.js` → Startseite (`index.html`)
- `fuhrpark-seite.js` → Fahrzeugfuhrpark (`fuhrpark.html`)
- `miete-seite.js` → Miete mich (`miete.html`)
- `leistungen-seite.js` → Leistungen (`leistungen.html`)
- `kontakt-seite.js` → Kontakt, Leistungsanfrage und Bewerberportal (`kontakt.html`)
- `impressum-seite.js` → Impressum (`impressum.html`)
- `datenschutz-seite.js` → Datenschutz (`datenschutz.html`)

Die Fahrzeuge selbst werden weiterhin zentral in `assets/data/fahrzeuge.js` bearbeitet.

## Text ändern

Beispiel:

```js
{ selector: ".page-hero h1", text: "Fahrzeug mieten" }
```

Nur den Inhalt nach `text:` innerhalb der Anführungszeichen ändern:

```js
{ selector: ".page-hero h1", text: "Lokomotive anfragen" }
```

## Text mit Zeilenumbrüchen ändern

Bei Einträgen mit `html:` darf `<br>` für einen Zeilenumbruch verwendet werden:

```js
{ selector: ".contact-card p:nth-of-type(1)", html: "EETG<br>Neue Straße 10<br>99084 Erfurt" }
```

## Auswahllisten ändern

In Dateien wie `miete-seite.js` oder `kontakt-seite.js` gibt es `auswahllisten`:

```js
"select[name='Einsatzland']": [
  "Deutschland",
  "Österreich",
  "Schweiz"
]
```

Einträge können geändert, gelöscht oder durch weitere Einträge ergänzt werden. Jeder Eintrag benötigt Anführungszeichen und – außer dem letzten – ein Komma.

## Wichtige Hinweise

- Dateinamen und den Teil `selector:` möglichst nicht ändern.
- Texte immer zwischen den Anführungszeichen bearbeiten.
- Enthält ein Text selbst Anführungszeichen, davor einen Backslash setzen: `\"Beispiel\"`.
- Nach Änderungen die Webseite im Browser neu laden. Bei Bedarf mit `Strg + F5` vollständig aktualisieren.
- Impressum und Datenschutz sind nur Mustertexte und sollten vor einer öffentlichen Veröffentlichung fachlich beziehungsweise rechtlich geprüft werden.
