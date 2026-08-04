# EETG Webprojekt

Professionelle, responsive Mehrseiten-Website für die fiktive Erfurter Eisenbahn Transport Gesellschaft.

## Start
Öffne `index.html` direkt im Browser. Für die beste lokale Vorschau kann ein kleiner Webserver genutzt werden:

```bash
python -m http.server 8000
```

Danach `http://localhost:8000` öffnen.

## Enthalten
- 5 Hauptseiten plus Impressum und Datenschutz
- Responsive Navigation und Dark Mode
- Fuhrparksuche und Filter
- Fahrzeug-, Leistungs-, Kontakt- und Bewerbungsformulare
- Lokale Demo-Speicherung über Local Storage
- Cookie-Hinweis, Animationen und Zurück-nach-oben-Schaltfläche

## Wichtiger Hinweis
Das Projekt ist rein fiktiv. Die Formulare versenden keine E-Mails und laden keine Dateien hoch. Für einen echten Produktivbetrieb ist ein Backend, Spam-Schutz sowie eine rechtliche Prüfung erforderlich.

## Fahrzeuge selbst bearbeiten
Die Fahrzeugdaten liegen zentral in `assets/data/fahrzeuge.js`. Eine ausführliche Anleitung steht in `FAHRZEUGE-BEARBEITEN.md`. Änderungen erscheinen automatisch im Fuhrpark und im Mietanfrageformular.

## Inhalte der einzelnen Seiten bearbeiten

Für jede Seite liegt unter `assets/data/seiten/` eine eigene Inhaltsdatei bereit. Eine Schritt-für-Schritt-Anleitung steht in `SEITEN-BEARBEITEN.md`.


## GitHub Pages

Das Projekt enthält `.nojekyll`, eine `404.html`, Favicons, Web-App-Manifest, `robots.txt` und `sitemap.xml`. Die vollständige Anleitung steht in `GITHUB-PAGES-ANLEITUNG.md`.
