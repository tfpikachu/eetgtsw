# Veröffentlichung mit GitHub Pages

## 1. Projekt hochladen

1. Erstelle auf GitHub ein **öffentliches Repository**, zum Beispiel `eetg-webseite`.
2. Öffne das Repository und wähle **Add file → Upload files**.
3. Lade **den Inhalt dieses Ordners** hoch. `index.html` muss direkt im Hauptverzeichnis des Repositorys liegen.
4. Bestätige mit **Commit changes**.

## 2. GitHub Pages einschalten

1. Öffne **Settings → Pages**.
2. Wähle unter **Build and deployment** bei Source: **Deploy from a branch**.
3. Wähle Branch **main** und Ordner **/(root)**.
4. Klicke **Save** und warte einige Minuten.

Die Seite ist danach üblicherweise erreichbar unter:

`https://DEIN-NUTZERNAME.github.io/DEIN-REPOSITORY/`

## 3. Sitemap und robots.txt anpassen

Ersetze in `sitemap.xml` überall:

`https://DEIN-NUTZERNAME.github.io/DEIN-REPOSITORY/`

mit deiner echten GitHub-Pages-Adresse.

Trage dieselbe Adresse in `robots.txt` hinter `Sitemap:` ein und entferne dort das `#` am Zeilenanfang.

## 4. Inhalte bearbeiten

- Seitentexte: `assets/data/seiten/`
- Fahrzeuge: `assets/data/fahrzeuge.js`
- Fahrzeugbilder: `assets/img/fahrzeuge/`
- Logo und App-Symbole: `assets/img/`

## Hinweise

- Groß- und Kleinschreibung in Dateinamen ist auf GitHub Pages relevant.
- Die Formulare sind eine lokale Demonstration und versenden keine E-Mails.
- Für echte Bewerbungen oder Anfragen ist ein Formularanbieter oder Backend erforderlich.
- Impressum und Datenschutz sind Mustertexte und sollten vor einer öffentlichen Nutzung rechtlich geprüft werden.
