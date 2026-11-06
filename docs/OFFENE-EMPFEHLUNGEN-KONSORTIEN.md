# Offene Empfehlungen der beiden Konsortien

Stand: 24.10.2026, geprüft gegen main **v144** (Commit e21b1cb). Zum späteren Abgleich: Status hier eintragen, wenn etwas umgesetzt oder verworfen wird.

Quellen:
- Design-/UX-Konsortium (29 Befunde, Bewertung v140): Bericht https://claude.ai/artifact/Y3GHPkbEuFppn2Y8AxNA2u · Details `feedback/design-konsortium/BEFUNDE.md` · Vorher/Nachher-Entwürfe https://claude.ai/artifact/RJDjeo5imAkAJscAbz2iMz
- Fachkonsortium IHK/Dozent/Träger (22 Befunde, Bewertung v140): Bericht https://claude.ai/artifact/R82A5UuULwEJKK7at8dkvz · Details `feedback/fachkonsortium-ihk/BEFUNDE.md` · Vorschau mit Nummern 1–9 https://claude.ai/artifact/Efkwu6Q7ttnK43BG9v1mNA
- Diese Liste ersetzt `docs/SPAETER-FACHKONSORTIUM.md` (dort stehen weiter die ausführlichen Vorschläge und Prüfkriterien zu jedem FK-Punkt).

## Überblick

| | Befunde | umgesetzt | teilweise | offen |
|---|---|---|---|---|
| Design-/UX-Konsortium | 29 | 13 | 1 | 15 |
| Fachkonsortium IHK | 22 | 4 | 5 | 13 |
| **Zusammen** | **51** | **17** | **6** | **28** |

Bereits umgesetzt und live:
- Design v141 (PR #106): ONB-01, ONB-02, UX-01, VIS-02, ACC-01, BRD-01, FDB-01, FDB-02, MOT-01, SIM-06, SIM-08, INT-02, NAV-01.
- Fach v142 (PR #107) und v144 (PR #108): FK-04 Gleiche Art, neue Zahlen (auch bei Prüfungsaufgaben im Übungsmodus), FK-05 typische Fehler zur Auswahl (ll_fw, im Lernfortschritt und als Top-3 beim Dozenten), FK-17 20 mündliche Fallgespräche plus Modus zu zweit, FK-18 Basis-/Plus-Übungslinks für den Dozenten. Teilweise: FK-01, FK-03, FK-12, FK-20, FK-22 (siehe unten).

Legende: Priorität Design P0 (höchste) bis P3; Schwere Fach S1 (hoch) bis S3. Aufwand S/M/L = klein/mittel/groß.

## A. Fachkonsortium IHK

| Kennung | Kurztitel | Prio | Status | Was fehlt | Abhängigkeiten |
|---|---|---|---|---|---|
| FK-01 | Probeprüfung fragt fast nur Zahlen ab | S1 | teilweise | Drin: Simulation mit 8 Rechen- und 2 Erläuterungsaufgaben (1 Physik, 1 Chemie), Selbstbewertung. Fehlt: bei rund 20 Prüfungsaufgaben ein letzter Teilschritt „Was folgt daraus für den Betrieb?“ mit Checkliste; von 461 Teilfragen sind weiter 459 Zahlen, 2 Auswahl, 0 Text. | FK-02, FK-22 |
| FK-02 | Energie, Chemie, Sicherheit in Prüfungsaufgaben dünn, Gewichtung ohne Beleg | S1 | offen | Weiter Chemie 8, Energie 6, Sicherheit 0 von 111 Prüfungsaufgaben (Ziel Chemie ≥ 20, Energie ≥ 15). Auswertungsliste alter Prüfungen fehlt in docs/. Satz „Themen, die in der Prüfung mehr Punkte bringen (Elektrotechnik, Chemie, Statistik)“ steht weiter ohne Quelle im Lernstand. Simulation zieht weiter zufällig, nicht „ohne Wiederholung bis Pool leer“. | FK-01, FK-07 |
| FK-03 | Lernstandsanzeigen klingen genauer, als sie sind | S1 | teilweise | Drin: „sicher geübt“ erst ab zwei Aufgabenarten, Basis je Thema sichtbar. Fehlt: Aussagen zur Prüfungsnähe nur aus der Simulation ableiten; Gewichtungssatz im Lernstand (siehe FK-02). | FK-02, FK-11 |
| FK-06 | Rückkanal zum Dozenten freiwillig, per Datei | S1 | offen | Ablauf „Abgabe bis Donnerstag vor dem Kurstag“ festlegen; kleiner Text auf der Kurstag-Karte „Bis Donnerstag Lernfortschritt senden“ (nicht in der App). | FK-15 (gleiche Karte), FK-11 |
| FK-07 | Zuordnung zu den Qualifikationsinhalten nicht dokumentiert | S2 | offen | Zuordnungsmatrix Thema × Qualifikationsinhalt 1–4 × Aufgabenarten × Anzahl als PDF für Träger. | FK-02, FK-16, FK-22 |
| FK-08 | Angebot zu breit für Lernende mit wenig Zeit | S2 | offen | Startseite im Kursmodus als „Wochenpaket“ (drei Zeilen, Fortschritt „diese Woche“, Rest unter „Mehr“). | FK-10, FK-09 |
| FK-09 | Erster Schritt widerspricht der Didaktik-Entscheidung | S2 | offen | Entscheidung treffen; Vorschlag: Mathe-Check bleibt erster Schritt, danach „Einheit 0“ mit drei Aufgaben Umrechnen/Formelumstellen vor Kapitel 1.1 (Eintrag in HW und KURS0). Hausaufgaben beginnen weiter mit „Grundlagen der Chemie“. Deckt die offene Frage aus dem Lernenden-Konsortium ab (erste Hausaufgabe Umrechnen oder Chemie 1.1). | FK-08, ONB-02 (umgesetzt) |
| FK-10 | Bis zu elf Wochen zwischen Kurstagen, Hausaufgabe füllt eine Stunde | S1 | offen | Wochenpakete von etwa 20 Minuten aus Kurskalender und Lernstand (Hausaufgabe/Fleißaufgabe, zwei Wiederholungen, eine Vermutung). | FK-08 |
| FK-11 | Pilot misst Erledigung, nicht Lernwirkung | S1 | offen | Papier-Kurztest je Kapitel (5 Aufgaben, 10 Minuten, anonym; Vor- und Nachtest). Ohne Code, sollte vor dem 28.11.2026 stehen. | FK-03, FK-13 |
| FK-12 | Simulationen ohne Arbeitsauftrag | S2 | teilweise | Drin: Aufträge in 11 Themen (Hydraulik, Hebel, Ohmsches Gesetz, Drehmoment, Gasgesetze, Prozess- & Maschinenfähigkeit, Wirkungsgrad, Schiefe Ebene, Parallel, Wärmekapazität, Elektrische Arbeit & Leistung). Fehlt: rund 14 weitere der etwa 25 Themen, die in den Hausaufgaben verlinkt sind. | – |
| FK-13 | Prüfungsaufgaben stark vorstrukturiert | S2 | offen | Modus „Ohne Zwischenschritte“ für Prüfungsniveau (Teilschritte nur auf Wunsch, kostet Punkte); bei 15 Aufgaben abschließende Entscheidung mit Begründung. | FK-11 |
| FK-14 | Rechnen am Handy braucht Papier | S2 | offen | Hinweis „Am besten mit Zettel und Taschenrechner“ bei Aufgaben mit mehr als zwei Rechenschritten (steht nur in der Prüfungssimulation); optional Notizfeld je Aufgabe. | – |
| FK-15 | Ein Jahr Lernstand nur auf einem Gerät | S1 | offen | Am ersten Kurstag gemeinsam installieren und exportieren; Sicherungs-Erinnerung auf der Kurstag-Karte am Vortag (nicht in der App). | FK-06 |
| FK-16 | Für einen Träger hängt alles an einer Person | S1 | offen | Seite „Betrieb und Pflege“, Fachprüfung durch zweite Lehrkraft, Anleitung zur Kurseinrichtung für fremde Dozenten. | FK-07, FK-22 |
| FK-19 | Lange Aufgabentexte bei Deutsch als Zweitsprache | S2 | offen | „📖 Begriffe“ gibt es bei Themen und Hausaufgaben, aber nicht unter Prüfungsaufgaben; Vorlesen nur in der mündlichen Prüfung und bei Fehlerkarten, nicht für Aufgabentexte. | – |
| FK-20 | Zugelassene Hilfsmittel und Fachrichtung ungeklärt | S2 | teilweise | Drin: Hinweis in der Formelsammlung „Hilfsmittel legt die IHK fest, frag vorher nach“. Fehlt: schriftliche Auskunft der IHK Regensburg und des Trägers in docs/, danach Texte in Simulation und Formelsammlung anpassen. | FK-14 |
| FK-21 | Themen ohne eigene Übungsaufgaben | S3 | offen | Keine Ankreuzfragen weiter für Drehmoment, Gesetz von Hooke, Gleichförmige Bewegung, Mischungstemperatur, Elektrische Arbeit & Leistung, Normalverteilung; prüfen, ob Gemischte Schaltungen auf Reihe/Parallel-Aufgaben führt. | – |
| FK-22 | Außendarstellung braucht klare Grenze zur IHK | S2 | teilweise | Drin: „keine IHK-Prüfungsaufgaben“ in den Hinweisen, „keine offizielle IHK-Prüfung“ in der Simulation, „keine Verbindung zur IHK“ im Impressum. Fehlt: fester Satz auf der Startseite; „unter Prüfungsbedingungen“ in der Simulation; im Pitch noch „≈ 50 Themen“ (jetzt 118) und „wie in der echten Prüfung“. | FK-07 |

## B. Design-/UX-Konsortium

| Kennung | Kurztitel | Prio | Aufwand | Status | Was fehlt | Abhängigkeiten |
|---|---|---|---|---|---|---|
| MOB-01 | Bildbeschriftungen am Handy zu klein (84 % unter 9 px) | P1 | L | offen | Mindestgröße für Bildtext (Ziel 11 px bei 390 px Breite), Schrift aus der echten Bildbreite berechnen, dichte Bilder entlasten, Knopf „Bild groß“. | SIM-05, SIM-07 |
| SIM-01 | Erster Handy-Bildschirm zeigt keine bedienbare Simulation | P1 | M | offen | „Vermute zuerst“ einzeilig/aufklappbar oder unters Bild, Merksatz unters Bild, zwei Wischleisten zu einer Zeile. Entscheidung v109 (Fach öffnet direkt ein Thema) bleibt. | NAV-03 |
| SIM-02 | Dieselben Zahlen drei- bis viermal je Thema | P2 | M | offen | Eine Hauptgröße groß, zwei Nebenkacheln, Tabelle als „Alle Werte ▾“. Von Markus aus PR #106 herausgenommen. | SIM-03 |
| SIM-03 | Keine gemeinsame Bedien-Grammatik der Simulationen | P2 | M | teilweise | Drin: Pause/Weiter und ↺ „Von vorn starten“ in der Bildecke (über SIM-06). Fehlt: festes Muster Hauptregler/Nebenregler, Segment-Knöpfe bis vier Optionen, gleiche Knopfzeile. Von Markus aus PR #106 herausgenommen. | SIM-04, ACC-02 |
| SIM-04 | Sicherheit und Lexikon-Themen im Rechen-Template | P2 | M | offen | Themenvariante „Erkunden“ (Beispiel wählen, Text statt Kacheln, Schrittfolgen mit „Weiter“). Von Markus aus PR #106 herausgenommen. | SIM-03 |
| SIM-05 | Dichte Anlagenbilder nur am Laptop brauchbar | P2 | L | offen | Am Handy Umschalter „Anlage / Energiefluss“, Beschriftung auf 4–6 Hauptteile (Dampfkraftwerk, Kernkraftwerk, Wasserkraft, Biogas, Photovoltaik, Geothermie, Galvanische Zelle, Periodensystem). | MOB-01 |
| SIM-07 | Leere Bildflächen, winziger Inhalt | P2 | S | offen, in Arbeit | Thread „Simulationen besser auf die Fläche skalieren“ (geplant v146) arbeitet daran; danach hier abhaken. Von Markus aus PR #106 herausgenommen. | MOB-01 |
| NAV-02 | Reiter „Lernen“ heißt im Thema plötzlich „Physik“ | P2 | S | offen | Am Handy steht im Thema weiter „⚙️ Physik“ im Menüband; Reiter immer gleich benennen, Fach nur im Pfad. | – |
| NAV-03 | Zwei Wischleisten zeigen am Handy nur Wortreste | P2 | M | offen | Eine Zeile „Gebiet › Thema ▾“ mit Themenblatt; am Laptop dürfen beide Leisten bleiben. | SIM-01 |
| VIS-01 | Fast alles ist eine Karte mit farbigem Oberrand | P2 | M | offen | Eine hervorgehobene Fläche je Bildschirm, Hinweise als schlichte Zeilen, Hintergrundmuster blasser. | DSY-01 |
| DSY-01 | Kein festes Designsystem (43 Schriftgrößen, 21 Radien) | P2 | M | offen | 6 Schriftstufen, 4 Radien, 6 Abstände als CSS-Variablen, schrittweise ersetzen. | VIS-01 |
| INT-01 | Hinweis-Leisten verdecken 12 s die Bedienung | P2 | S | offen | Tipps schweben weiter unten über dem Inhalt; als Zeile im Inhalt zeigen, Einführung auf drei Karten kürzen. | – |
| ACC-02 | Bedienelemente kleiner als 44 px | P3 | S | offen | Tippflächen unsichtbar auf 44 px erweitern. Betrifft auch die neuen Pause/↺-Knöpfe (32 px, bewusst klein). Von Markus aus PR #106 herausgenommen. | SIM-03 |
| FDB-03 | Leere Zustände lang und voller Nullen | P3 | S | offen | Ein Satz, eine Aktion; Rest erst ab 5 geübten Aufgaben. | – |
| NAV-04 | Unruhige Themen-Adressen | P3 | S | offen | Feste, lesbare Adressen ohne angehängte Zahlen, alte weiterleiten. | – |
| VIS-03 | Drei Symbolsysteme nebeneinander | P3 | M | offen | Je Fläche nur ein System; Menüband-Emojis bleiben (Deine Entscheidung). | – |

Nicht als eigener Befund, aber im Design-Bericht: Simulations-Noten 43× A, 55× B, 20× C. Am dringendsten überarbeiten: Galvanische Zelle, Periodensystem, Dampfkraftwerk (hängt an MOB-01/SIM-05).

## Vorgeschlagene Reihenfolge

1. **Vor dem ersten Kurstag 28.11.2026, ohne Code:** FK-11 Papier-Kurztest, FK-06 Abgabe bis Donnerstag, FK-15 Sicherung am ersten Kurstag, FK-20 Anfrage Hilfsmittel bei der IHK.
2. **Vor dem 28.11.2026, wenig Code:** FK-09 Einheit 0, FK-06/FK-15 Satz auf der Kurstag-Karte, FK-14 Zettel-Hinweis, FK-22 Startseiten-Satz und Pitch-Texte.
3. **Bis Kurstag 3 (23.01.2027):** FK-08/FK-10 Wochenpaket, FK-02 Prüfungsaufgaben Energie/Chemie plus Gewichtung belegen, FK-01 Rest, FK-19 Begriffe und Vorlesen, SIM-01 + NAV-03 (Handy-Erstbild), MOB-01 Bildschrift, INT-01, NAV-02.
4. **Bis Juni 2027:** FK-13 ohne Zwischenschritte, FK-21 Ankreuzfragen, FK-12 restliche Aufträge, SIM-02/03/04, SIM-05, ACC-02, FDB-03.
5. **Vor einem Trägerangebot:** FK-07 Zuordnungsmatrix, FK-16 Betrieb und Pflege, DSY-01/VIS-01/VIS-03 Feinschliff, NAV-04.

## Abgleich-Notizen

Hier später eintragen, was sich geändert hat (Datum, Version, Kennung, neuer Status).

| Datum | Version | Kennung | Neuer Status | Bemerkung |
|---|---|---|---|---|
| | | | | |
