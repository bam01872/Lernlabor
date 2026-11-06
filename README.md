# Lernlabor (NTG für Industriemeister)

Rekonstruktion vom 06.11.2026, Stand **v254** (Main nach PR #216).
Das ursprüngliche Repository 84g64ds8jm-cmyk/LernLabor war wegen Kontosperrung nicht erreichbar.

- `index.html` wurde verlustfrei aus der Dozentenversion v254 zurückgewonnen (Titel und `DOZENT=false` zurückgesetzt, Schriften wieder als Dateien).
- `fonts/`, Icons aus dem Branding-Ordner.
- `manifest.webmanifest` und `sw.js` sind **neu geschrieben** (Originale fehlen), nach dem Muster der bekannten Regeln.
- Nicht enthalten: Git-Historie, offene Branches, `tests/check.js`, CI-Workflows, NEWS. Diese bitte aus dem alten Repo nachziehen, falls es wieder zugänglich wird.
- Dozentenversion bauen: `python3 tools/build-dozent.py index.html lernlabor_dozent.html`
