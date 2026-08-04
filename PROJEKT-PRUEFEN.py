from pathlib import Path
import re

root = Path(__file__).resolve().parent
missing = []
for html in root.glob("*.html"):
    text = html.read_text(encoding="utf-8")
    for value in re.findall(r'(?:href|src)="([^"#?]+)', text):
        if value.startswith(("http://", "https://", "mailto:", "tel:")):
            continue
        target = (html.parent / value).resolve()
        if not target.exists():
            missing.append((html.name, value))

if missing:
    print("Fehlende Dateien:")
    for page, value in missing:
        print(f"- {page}: {value}")
    raise SystemExit(1)
print("OK: Alle lokalen HTML-Verweise wurden gefunden.")
