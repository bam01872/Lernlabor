# Archiv: Thema „Ampel“ (Steuern & Regeln)

Das Thema stand von v307 bis v348 im Fach Physik, Gruppe „Steuern & Regeln“ (Festzeitampel als Steuerung, ab v308 auch Regelung über die Staulänge).
In v349 (20.11.2026) hat Markus es aus der App nehmen lassen: Steuern und Regeln wird nur noch am Beispiel Heizung gezeigt. Es ist nicht gelöscht, sondern hier aufbewahrt.
Der Ordner `archiv/` wird von GitHub Pages nicht ausgeliefert.

## Inhalt von `ampel-v348.js`

Alle Stellen aus `index.html` v348 (Commit 6abb48b) unverändert, in 14 Abschnitten mit Zeilennummern und Einfügeort:
Simulation (Helfer SRAMP, SRPH, SRCAR, SRPED, SRSG, SRAMPEL und `fm(FP,SR,'Ampel',…)`), Ankreuzfragen, Grundgleichungen, Rechenübung, Verstehen, Im Betrieb, Typische Fehler, Vermuten, Auftrag, Kurz erklärt (Erklärvideo), Größen-Kasten, 11 Aufgaben `amp-…`, Glossar T_U.

## Wieder einbauen

1. Abschnitte an den im Kopf genannten Stellen in `index.html` einfügen (Kommas an Array-/Objekt-Enden beachten). Abschnitt 1 braucht `SRLAY`, `SRX`, `T`, `TH`, `SXT` (bleiben in index.html stehen).
2. In `LVT` bei `"num"` wieder `"Ampel":2` eintragen. Die Aufgaben-IDs `amp-…` stehen noch in der `OK.push`-Liste.
3. `'Ampel'` aus `OFFT` (bei `memGet`) streichen. Seit v349 wird der Lernstand zum Thema unter `ll_mem.off` beiseitegelegt; beim Streichen `m.off['Ampel']` zurück nach `m.t` holen.
4. `APPV`, `sw.js` und `NEWS`/`CHL` hochzählen, `node tests/check.js` laufen lassen.
