# Start-Prompt für das neue Projekt „Lernlabor V3“

Stand: 22.10.2026. Live auf GitHub Pages: **Version 86** (main, Commit 19b358b, PR #52). Dozentenversion ist auf v86 gebaut.
Alles ab der Linie unten in den ersten Chat des neuen Projekts kopieren.

---

Du hilfst mir, Dr. rer. nat. Markus Baum, freiberuflicher Dozent für IHK-Industriemeister (Basisqualifikation, Fach NTG = Naturwissenschaftlich-technische Gesetzmäßigkeiten). Schreib Deutsch, Du-Form, kurze klare Sätze.

Ich habe zwei Produkte: das **Lernlabor** (NTG, Hauptprodukt, Pilot ab November 2026 an 9 Samstagen) und das **Meisterlabor Basis** (ReHa, BeHa, MIKP, ZiB, später).

## 1. Tech-Stack

**Lernlabor**
- **Eine einzige HTML-Datei** `index.html` (1,39 MB, 5.156 Zeilen) mit eingebettetem CSS und Vanilla-JavaScript. Kein Framework, kein Build, kein Server, keine Konten.
- **Repo:** `84g64ds8jm-cmyk/LernLabor`, Branch `main` = live. Dazu `sw.js` (Service Worker, cache-first, Cache-Name `lernlabor-vN`, prüft stündlich und beim Zurückkehren auf neue Version), `manifest.webmanifest` (Schnellzugriffe #ueben, #hausaufgaben, #fehler, #simulation), Icons, `fonts/` (Schibsted Grotesk lokal), `tests/check.js`, `.github/workflows/check.yml`.
- **Hosting:** GitHub Pages, https://84g64ds8jm-cmyk.github.io/LernLabor/ , installierbar als App. Neue Version → Hinweis „Jetzt laden“ (während laufender Prüfungssimulation erst danach).
- **Daten:** Lernstand nur im Browser (`localStorage`, Schlüssel `ll_…`), Export/Import als JSON. Keine Konten, kein Tracking, keine Nutzungszählung (ADR 001).
- **KI:** im Pilot ausgeblendet (ADR 003).
- **Datenstrukturen im Code:** `GEN` (89 Übungsgeneratoren, liefern `[frage, antwort, einheit, schritte]`), `STEPS` (36 Mehrschritt), `EXW` (111 Prüfungsaufgaben, optional Skizze `fig`), `MCQ` (267), `ORAL` (115), `FEH` (348 „Fehler finden“), `ERK` (Verstehen/typische Fehler), `BET` (Im Betrieb), `PRED`/`PRED2` (Vermute zuerst), `PLAUS` (Passt das?), `FX` (Formelkarten), `GL`/`GLU` (Glossar), `M` (116 Themen), `GORD` (Reihenfolge), `XL` (Thema in zweitem Fach), `HW` (8 Hausaufgaben-Einheiten), `MCG` (Mathe-Check). Fächer `FA=[FP,FC,FE,FS,FM,FSI,FU]`.
- **UX-Schicht** am Ende von index.html umhüllt `nav`, `build`, `render`, `homeView`, `renderQ`; Routen über `openRoute()` (`#thema/<slug>`, `#ueben`, `#fehler`, `#glossar`, `#kurs/<Name>/<Daten>` …).
- **Grafik:** inline-SVG per JS, 3D-Helfer `BALL`, `ROD`, `GLAS`, `TH`. Stilregeln in `docs/GRAFIKSTIL-3D.md`.
- **Text und Zahlen:** `subify` (Indizes `F_G`), `rootTxt`/`rootDraw`, `fracTxt` (` / ` mit Leerzeichen wird Bruch), `fitAll()` (Umbrüche), `nbTxt` (geschützte Leerzeichen: Zahl–Einheit über `NBU`; seit v198 auch Funktionsname–Argument über `NBF`: „sin 75°“, „cos α“, „tan² α“, „lg c(H₃O⁺)“, „log₂ x“, „√ 2“ brechen nie zwischen Funktion und Wert um, nicht vor einem Wort wie „sin und cos“; Prüfung „Funktionsname“ in tests/check.js, deshalb neue Texte einfach mit normalem Leerzeichen schreiben), `nf(v,d=4)` (4 gültige Ziffern, ab 1e6 Zehnerpotenz), `nfe()` Geld (toFixed(2), Rundungsfehler siehe unten), `hf`/`mcn` im Mathe-Check, `pnum()` liest Eingaben; Prüftoleranz 2 %.
- **Haptik/Bedienung:** Wischleisten `div.swr` mit Pfeilen `.swa` unter 900 px, `tick()` beim Einrasten, Menüband 🏠📚🎓👤.
- **Dozentenversion:** gleiche index.html mit `const DOZENT=true`, Titel „Dozent · Lernlabor“, drei Schriften als base64. Nur `/mnt/project-files/dozent/lernlabor_dozent.html`, **nie committen**, nach jedem Merge neu bauen. Enthält Kursübersicht mit „Auswertung an mich mailen“.
- **Versionierung:** `APPV` + `NEWS` in index.html und Cache-Name in sw.js. Nächste freie Nummer nehmen, direkt vor dem Merge main holen und rebasen.
- **Tests:** `CHROMIUM=/opt/pw-browsers/chromium node tests/check.js` → „9440 Aufgaben erzeugt, 116 Themen geöffnet. Alles in Ordnung.“ Läuft als CI bei jedem PR. Prüft nur Abstürze, nicht die Fachlichkeit.
- **Werkzeuge in Claude-Sitzungen:** Repo mit `git clone https://github.com/84g64ds8jm-cmyk/LernLabor.git` holen; PRs per `gh api` REST (GraphQL gesperrt, Repo vorher mit add_repo freischalten); Playwright mit Chromium; Live-Check per curl geht nicht, stattdessen Pages-Workflow-Runs prüfen.

**Meisterlabor Basis**
- Eine HTML-Datei, Version 2, live als Claude-Artifact https://claude.ai/artifact/ETNVG16tGKCYAce3JXraiW . Noch **kein Repo** (lege ich selbst an), GitHub-Pages-Paket unter `/mnt/project-files/meisterlabor/`, Dozentenversion unter `meisterlabor/dozent/`.

## 2. Stabil implementiert (live, v86)

- **Sieben Fächer, 116 Themen:** Physik, Chemie, Energie, Statistik, Mathematik, Sicherheit, Umrechnen. Je Thema Simulation mit Reglern, Merkbox, Grundgleichungen, Verstehen und typische Fehler, Im Betrieb, teils Vermute zuerst und Passt das?.
- **Navigation wie eine App:** Start / Fächer / Prüfen / Ich, eigene Adresse je Ansicht, Zurück-Taste, Teilen/QR, Wischleisten mit Einrasten, Darstellung einstellbar (Menü 105), Versionsinfo (Menü 104).
- **Üben:** Zufallsaufgaben mit Rechenweg, Mehrschritt, Ankreuzen, mündlich mit Vorlesen, 348 „Fehler finden“-Aufgaben, „Meine Fehler“, Fehler melden.
- **Prüfen:** Prüfungsaufgaben mit Skizzen, Prüfungssimulation 90 min mit Folgefehler-Wertung, Mathe-Check (Ampel, Startplan), Prüfungsreife je Fach.
- **Ich:** Lernstand, Lernplan, Export/Import, Notizen, Kurslink mit Kalenderdatei, Was ist neu, Impressum/Datenschutz.
- **Glossar** mit Suche, **Hausaufgaben** (8 Einheiten).
- **Zuletzt live:** Hyperbel/Logarithmus v77, Fehler finden v78, Chemie 3D Teil 2 v80, Spannungsreihe-Balken v79, Kräfte-Skizzen v82, Wischleisten v83, Tick v84, Vermute zuerst nur auf Themenseiten v85, Kursübersicht für Dozent v86.

## 3. Nächster Schritt, offene Bugs und Edge Cases

### Exakter nächster Schritt
**Ein PR „Abschlussgutachten: Korrekturen vor dem Pilot“ als v87** (erst nach meinem Ja, Merge nur nach wörtlichem „Merge PR N“). Inhalt:
1. Die fünf A-Befunde aus dem Fachgutachten:
   - ERK „Schmelz- und Verdampfungswärme“: das richtige Vorgehen („erst auf 0 °C, dann schmelzen, dann weiter erwärmen“) steht als typischer Fehler.
   - EXW „Galvanisches Element: Spannung und Zinkverbrauch“ rechnet mit Eisen → Titel anpassen.
   - `nfe()` rundet über `toFixed(2)` falsch (3,3 · 0,35 → 1,15 € statt 1,16 €).
   - ERK Wärmeausdehnung: „Flüssigkeiten … γ ≈ 3·α“ (gilt nur für feste Körper).
   - MCQ 128 und Wasserhärte-Text: „Calcium- und Magnesiumsalze bilden den Kalk“ widerspricht der Korrektur (nur Ca als CaCO₃).
2. Kleine Bedienpunkte aus dem UI-Gutachten: Tippflächen auf Themenseiten ≥ 44 px (Ohm 7, Wahrscheinlichkeitsnetz 10 zu klein), `aria-label` für 3–4 Symbolknöpfe, eigene leere Ansicht bei `#fehler` ohne Fehler (Adresse wechselt, Ansicht bleibt beim alten Thema), `document.title` je Ansicht.
3. Testen, Vorschau mit Screenshots zeigen, nach Merge Dozentenversion neu bauen.

### Danach (im Pilot)
- „Erst runden, dann rechnen“: Niederhalter („102,81 − 102,04 = 0,768 mm“), Messreihe („16,9 − 16 = 0,817 Ω“), Schaltschrank („16,5° − 16,7° = −0,1949°“).
- Ganzzahlige Zählgrößen: Steuertransformator N₂ = 208,7 Windungen, Tagesspeicher 1340,7 Haushalte, Stichprobe 43,56 Teile.
- Vereinheitlichen: Bindungstypen ΔEN 0,4 (FX) vs. 0,5 (GEN); Brennstoffzelle 1 V / 0,65 V / 1,25 V → 1,23 V Leerlauf, 0,6–0,8 V Betrieb; Konstantentabelle (c Wasser 4,19; 68,27/95,45/99,73 %); ein Zahlenformatierer statt `nf`/`nfe`/`hf`/`mcn` (Mathe-Check zeigt „10^4“, „÷“).
- Texte: „Eis ist leichter als Wasser“ (MCQ 127, Oral 10) → Dichte; Grundlast mit Kernkraft (MCQ 63, Oral 56); Funktionen „y = −1 · −3 − 2“ ohne Klammer; Umrechnen-ERK (Masse, Dichte, Kraft, Energie, Leistung) mit generischem 10/100/1000-Text; Tippfehler „Mm und m“ (Hebel); verneinte Anweisungen („km/h nicht in m/s umrechnen“) positiv formulieren.
- Alte offene Fachbefunde (Liste `feedback/FACHGUTACHTEN-FEHLERLISTE.md`): P4–P7, P9–P15, C5–C9, S2–S9, Q4–Q6, D2 (gestufte Hilfe), D4 (Getriebe, Schallpegel, U-Wert, CO₂-Bilanz), D6.
- Branch `fachgutachten-fixes` (PR #29) ist nicht gemergt und veraltet: nicht rebasen, nur fehlende Korrekturen neu auf main übertragen, Branch danach löschen.

### Vor einem Verkauf
- Daten (Aufgaben, Texte, Glossar) aus index.html in eigene Dateien lösen, Build-Skript erzeugt weiter eine Datei.
- Fachliche Tests in `tests/check.js`: ganzzahlige Zählgrößen, angezeigte Zahlen ergeben angezeigtes Ergebnis, Titel passt zur Rechnung.
- Mathe-Check mit Startwert statt `Math.random` (Fehler nachstellbar).
- Vollständige Prüfung der Barrierefreiheit (Tastatur, Vorleseprogramm, Kontrast); Glossar am Handy 38.000 px lang → Buchstabenleiste.

### Edge Cases und Fallen beim Bauen
- ` / ` mit Leerzeichen in Antwortoptionen wird zum Bruch und verrät die Antwort.
- `ERK`/`BET` neuer Themen erst nach `BET['Bruchrechnung']`; `subify` überspringt `<option>` (dort Unicode-Indizes).
- Kopf braucht Manifest-Link, apple-touch-icon und Apple-Meta-Tags (sonst falsches iPhone-Symbol). Reglerlabels kurz halten.
- `nf()` nicht für ganze Zahlen wie 1728; UX-Schicht nicht doppelt überschreiben.
- Neue Formelzeichen im Glossar (Menü 103) ergänzen.
- Safari löscht Webseiten-Daten nach 7 Tagen ohne Besuch → App installieren, Lernstand exportieren.
- Tick beim Einrasten in der Homebildschirm-App auf dem iPhone noch nicht getestet; falls kein Tick, Tick-Teil entfernen.
- Kursübersicht: Teilnehmerzahl beim ersten Mal eintragen.

### Vor dem Pilot (organisatorisch)
- Projekt-E-Mail anlegen und `MAIL` ersetzen (derzeit private Adresse).
- Schriftliche Bestätigung des Bildungsträgers zum Honorarvertrag (offen).
- Zwischenumfrage nach dem 3. Samstag und Abschlussumfrage vorbereiten.
- Repo privat: erst GitHub Pro, dann privat (sonst ist Pages aus).
- Test auf echtem iPhone und Android als Homebildschirm-App.

## Gutachten (Abschluss v86, 22.10.2026)
- Fachgutachten (Professoren-Konsortium), Note gesamt 1,9: https://claude.ai/artifact/MukTPiko3CDWpCmAez7x8U , Quelle `feedback/abschluss/fachgutachten-abschluss.html`.
- UI- und Software-Gutachten, Note gesamt 2,0: https://claude.ai/artifact/WevsJeZ2884ddX5dMaB1qw , Quelle `feedback/abschluss/ui-software-gutachten-abschluss.html`.
- Ältere Gutachten: `feedback/` (Fachgutachten v57, Produkt-/UX, Gymnasium, Schülersicht).

## Arbeitsregeln
- Nur eigene Aufgaben, keine IHK-Originale oder Abwandlungen (ADR 002).
- Code-Änderungen, PRs und Merges nur nach meinem ausdrücklichen Ja; Merge nur nach wörtlichem „Merge PR N“. Bei Darstellungsänderungen vorher Vorschau (Artifact-Seite mit Screenshots).
- Handy ist der kritische Fall, immer bei 390 px und 320 px prüfen.
- Pilot: 9 Samstage ab November 2026, nur Lernlabor, ohne KI, kostenlos, ohne Anmeldung. Erfolg: mindestens 2/3 erledigen die Aufgabe von Samstag zu Samstag.
- Unterlagen: `/mnt/project-files/CONTEXT.md`, `docs/` (PRD, TECHNIK, ROADMAP, OFFENE-FRAGEN, ADR 001–003, IDEEN-FUNKTIONEN, GRAFIKSTIL-3D), Gutachten unter `feedback/`, Pitch unter `pitch/`, Unterrichtsfolien unter `unterricht/`.
