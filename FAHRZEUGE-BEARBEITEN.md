# Fahrzeuge bearbeiten oder ergänzen

Die komplette Fahrzeugliste befindet sich in:

`assets/data/fahrzeuge.js`

Öffne diese Datei mit einem Texteditor, zum Beispiel Visual Studio Code, Notepad++ oder dem Windows-Editor.

## Bestehendes Fahrzeug ändern

Ändere einfach die Werte eines vorhandenen Blocks:

```javascript
{
  name: "BR 185.2",
  kategorie: "electric",
  typ: "Elektrolokomotive",
  status: "EETG Flotte",
  geschwindigkeit: "160 km/h",
  leistung: "5.600 kW",
  bild: ""
}
```

## Neues Fahrzeug ergänzen

Kopiere einen vollständigen Block und füge ihn vor der letzten schließenden eckigen Klammer `];` ein. Zwischen zwei Blöcken muss ein Komma stehen.

```javascript
{
  name: "BR 193",
  kategorie: "electric",
  typ: "Elektrolokomotive",
  status: "EETG Flotte",
  geschwindigkeit: "200 km/h",
  leistung: "6.400 kW",
  bild: "assets/img/fahrzeuge/br193.jpg"
}
```

## Kategorien

- `electric` – Elektrolokomotiven
- `diesel` – Diesel- und Rangierlokomotiven
- `trainset` – Triebzüge

Diese Kategorien steuern die Filter auf der Fuhrparkseite.

## Eigenes Fahrzeugbild

1. Lege das Bild unter `assets/img/fahrzeuge/` ab.
2. Trage den Pfad beim Fahrzeug ein, beispielsweise:

```javascript
bild: "assets/img/fahrzeuge/br193.jpg"
```

Ohne Bild bleibt die grafische Lok-Silhouette sichtbar.

## Automatische Aktualisierung

Die Daten werden automatisch sowohl auf der Seite **Fahrzeugfuhrpark** als auch im Auswahlfeld der Seite **Miete mich** verwendet. Du musst die HTML-Dateien nicht zusätzlich bearbeiten.
