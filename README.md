# Lernlabor (NTG für Industriemeister)

Rekonstruktion vom 06.11.2026, Stand **v254** (Main nach PR #216).
Live: https://bam01872.github.io/Lernlabor/

Das ursprüngliche Repository 84g64ds8jm-cmyk/LernLabor war wegen Kontosperrung nicht erreichbar.

- `index.html` wurde verlustfrei aus der Dozentenversion v254 zurückgewonnen (Titel und `DOZENT=false` zurückgesetzt, Schriften wieder als Dateien).
- `fonts/`, Icons aus dem Branding-Ordner.
- `manifest.webmanifest` und `sw.js` sind **neu geschrieben** (Originale fehlen), nach dem Muster der bekannten Regeln.
- `tests/check.js` und `.github/workflows/check.yml` neu aufgebaut (07.11.2026): Version APPV = sw.js, Dozenten-Build möglich, alle Themen und Üben-Seiten auf Handy- und Laptopbreite ohne JS-Fehler. Lokal: `npm i --no-save playwright && node tests/check.js`.
- Nicht enthalten: Git-Historie, offene Branches, die Prüfungen des alten `check.js` (z. B. Zahlenformat, Aufträge), NEWS. Diese bitte aus dem alten Repo nachziehen, falls es wieder zugänglich wird.
- Dozentenversion bauen: `python3 tools/build-dozent.py index.html lernlabor_dozent.html`
