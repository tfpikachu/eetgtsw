# EETG auf GitHub Pages veröffentlichen

## Wichtig: Repository-Struktur

Lade **den Inhalt dieses Ordners** hoch, nicht den Ordner selbst. Direkt im Repository müssen diese Einträge sichtbar sein:

```text
index.html
fuhrpark.html
miete.html
leistungen.html
kontakt.html
assets/
.nojekyll
```

Die Datei `assets/css/style.css` muss auf GitHub unter exakt diesem Pfad erreichbar sein. GitHub unterscheidet Groß- und Kleinschreibung.

## Veröffentlichung

1. Neues öffentliches Repository erstellen, z. B. `eetg`.
2. **Add file → Upload files** wählen.
3. Alle Dateien und Ordner aus diesem Projektordner hineinziehen.
4. Hochladen mit **Commit changes** bestätigen.
5. **Settings → Pages** öffnen.
6. Unter **Build and deployment** die Quelle **Deploy from a branch** auswählen.
7. Branch **main**, Ordner **/(root)** auswählen und speichern.
8. Einige Minuten warten und die angezeigte Pages-Adresse öffnen.

## Kontrolle bei fehlendem Design

Öffne im Browser direkt:

```text
https://DEIN-NAME.github.io/DEIN-REPOSITORY/assets/css/style.css
```

Erscheint dort eine 404-Seite, fehlt der Ordner `assets` oder er liegt eine Ebene zu tief. Die korrekte Struktur ist:

```text
Repository
├── index.html
└── assets
    ├── css
    │   └── style.css
    ├── js
    ├── data
    └── img
```

Nach Korrekturen die Seite mit `Strg + F5` neu laden, damit der Browser den Cache verwirft.
