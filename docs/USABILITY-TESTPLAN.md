# Usability-Testplan Lernlabor
Stand: 25.10.2026, App-Version 153

Zweck: Wie wir mit wenig Aufwand herausfinden, wie echte Lernende das Lernlabor bedienen, und wie daraus Verbesserungen werden. Gilt für den Pilot (NTG-Kurs ab 28.11.2026) und danach als wiederholbarer Ablauf.

Kennzeichnung: **Fakt** = geprüft oder entschieden. **Annahme** = plausibel, nicht geprüft. **Empfehlung** = Vorschlag, braucht Dein Ja. Rechtliche Hinweise sind keine Rechtsberatung.

Rahmen (Fakt): Reine Web-App (index.html + sw.js) auf GitHub Pages. Lernstand nur im Browser, keine Konten, kein Server, kein Tracking (ADR 001). Nutzungszählung hast Du am 21.10.2026 für den Pilot abgelehnt. Pilot ohne KI (ADR 003). Handy ist der kritische Fall. Erfolgskriterium: mindestens zwei Drittel erledigen die Hausaufgabe bis zum nächsten Termin, anonyme Umfrage nach dem 3. Samstag. Dein Zeitbudget: 5 bis 7 Stunden pro Woche.

Vorarbeit, die hier nicht wiederholt wird: Produkt-UX-Gutachten (v58), Lernenden-Konsortium mit 12 fiktiven Lernenden (v106/107), Design-/UX-Audit (v140), Fachkonsortium (v140), offene Punkte in `docs/OFFENE-EMPFEHLUNGEN-KONSORTIEN.md`. Alle diese Berichte sind **simulierte** Tests: technisch echt ausgeführt, aber ohne echte Menschen. Ein Test mit echten Lernenden fehlt bisher ganz.

---

## Teil 1 – Machbarkeit: Was ich selbst kann und was nicht

Heute tatsächlich gemacht (Fakt): Repo geklont (main = v153), index.html lokal in Chromium per Playwright geöffnet, Handy-Größe 390 × 844 mit Touch, leerer Lernstand. Erststart mit Einführung (7 Karten), Menüs Lernen / Üben & Prüfen / Ich, Suche „Ohm“ (findet „Ohmsches Gesetz“), Hausaufgaben-Übersicht (24 Aufgaben in 8 Einheiten), Lernstand, Meine Fehler und Lernfortschritt senden aufgerufen. Keine Skriptfehler. Alle Testaufgaben in Teil 6 haben einen vorhandenen Weg in v153.

| Frage | Antwort | Grenze |
|---|---|---|
| 1. App selbst bedienen und reale Nutzerinteraktionen nachvollziehen? | **Bedienen: ja.** Ich steuere die App per Browser-Automation (Chromium, Safari näherungsweise über WebKitGTK), tippe, scrolle, fülle Felder aus, mache Bildschirmfotos. **Reale Nutzerinteraktionen: nein.** Ich sehe nur meine eigenen Schritte. | Kein echtes iPhone/Android, keine echte Systemschrift-Vergrößerung, kein echtes langsames Netz (nur emuliert). Ich kenne den Code, bin also nie ein unbefangener Erstnutzer. |
| 2. Zugriff über Link, Bilder, Videos, Testzugang, Quellcode? | **Quellcode: ja** (Repo, lokal startbar, identisch mit Pages). **Live-Link: nein**, der Proxy meiner Umgebung sperrt den Aufruf von github.io. **Bildschirmfotos: ja.** **Videos: ja, indirekt** (ich zerlege sie mit ffmpeg in Einzelbilder und werte Bildfolgen aus, Ton nur, wenn Du eine Abschrift mitgibst). **Testzugang: nicht nötig**, es gibt keine Konten. | Bei Videos sehe ich Einzelbilder (z. B. jede Sekunde), keine flüssige Bewegung. |
| 3. Selbst navigieren, Aufgaben ausführen, Probleme dokumentieren? | **Ja**, reproduzierbar als Prüfskript (wie in den bisherigen Gremien). Ich messe Anzahl der Schritte, ob Ziele sichtbar sind, Schriftgrößen, Fehler im Skript, Ladezeiten. | Ich finde, was technisch hakt, nicht was Menschen missverstehen. |
| 4. Echte Testpersonen beobachten oder deren Daten auswerten? | **Beobachten: nein.** **Auswerten: ja**, wenn Du mir Material gibst: ausgefüllte Beobachtungsbögen, Notizen, Bildschirmaufnahmen, freiwillige Lernfortschritt-Dateien, Umfrageergebnisse. | Was nicht aufgeschrieben oder aufgenommen ist, kann ich nicht auswerten. |
| 5. Nur Simulation oder echte Werkzeuge? | **Beides.** Werkzeug echt: Browser-Automation auf dem echten Code. Simulation: Nutzertypen (Personas) sind ausgedacht. | Simulierte Nutzer liefern Hypothesen, keine Belege. |
| 6. Was brauche ich? | Für Runde 1 nichts Neues: Code habe ich. Von Dir: 5 Testpersonen, die ausgefüllten Bögen, optional Bildschirmaufnahmen. Details in Teil 5. | — |

---

## Teil 2 – Methodenvergleich

| Methode | Was sie zeigt | Voraussetzungen | Grenzen | Aufwand für Dich | Vereinbar mit „keine Konten / keine Zählung“? |
|---|---|---|---|---|---|
| **A1 Moderierter Test mit lautem Denken** (vor Ort, eigenes Handy) | Wo Menschen zögern, falsch tippen, Begriffe missverstehen, aufgeben. Das stärkste Signal. | 5 Personen, 30–40 min je Person, Testskript, Bogen | Kleine Zahl, Testsituation ist künstlich, Du als Entwickler kannst die Antworten beeinflussen | ca. 5 h für 5 Personen | **Ja**, keine Technik nötig |
| **A2 Unmoderierter Test** (Aufgabenblatt zu Hause, Person nimmt den Bildschirm selbst auf) | Ablauf in echter Umgebung | Person kann Bildschirmaufnahme starten, schickt Video | Ohne lautes Denken oft unklar, warum etwas passiert; viele schicken nichts | gering, aber unzuverlässig | **Ja**, Aufnahme bleibt bei der Person, Weitergabe freiwillig |
| **B1 Bildschirmaufnahme mit Bordmitteln** (iPhone/Android/Laptop) während A1 | Nachträglich genau: Tipps, Scrollen, Umwege, Zeit je Schritt | Einwilligung, Aufnahme lokal, Speicherort bei Dir | Kein Gesicht, Ton nur mit Einwilligung | +10 min je Person | **Ja**, nichts wird in die App eingebaut |
| **B2 Session-Replay-Dienst** (z. B. Microsoft Clarity, PostHog, Hotjar) | Aufnahmen aller Sitzungen, Heatmaps | Skript in index.html, Einwilligungsbanner nach § 25 TDDDG, Auftragsverarbeitung, Drittland-Prüfung | Widerspricht ADR 001, dem Hinweis „kein Tracking“ in der App und dem Datenschutzentwurf | hoch (Recht + Pflege) | **Nein, Abweichung.** Technisch auf GitHub Pages möglich, für den Pilot **nicht empfohlen** |
| **C1 Zentrales Event-Tracking** (Klicks, Abbrüche, Verweildauer an einen Server) | Quantitative Abbruch- und Erfolgsraten | Server oder Analysedienst, Einwilligung | Widerspricht der Entscheidung vom 21.10.2026 | hoch | **Nein, Abweichung.** Nicht empfohlen |
| **C2 Vorhandene lokale Daten + freiwilliges „Lernfortschritt senden“** | Hausaufgaben erledigt, Ergebnisse je Thema, Prüfungssimulationen, aktive Tage, Fehlerarten; in der Dozentenversion als Kursübersicht | Teilnehmende senden freiwillig (Kürzel); gibt es schon | Nur wer sendet, zählt; keine Klickwege, keine Zeiten je Schritt | gering (Einsammeln am Samstag) | **Ja**, ist schon so geplant und im Datenschutzentwurf beschrieben |
| **C3 Lokales Testprotokoll** (Ereignisse nur auf dem Gerät, nur nach Einschalten in einer Testsitzung, Export per Hand) | Zeiten und Wege je Aufgabe, ohne Video | Code-Änderung | Neue Datenerhebung, auch wenn lokal; erklärungsbedürftig | mittel | **Grenzfall, Entscheidungsfrage.** Für Runde 1 nicht nötig |
| **D KI-Simulation** (Personas per Browser-Automation) | Technische Hürden, Wegelängen, Lesbarkeit, Widersprüche in Texten | Code, Prüfskripte | Keine Aussage über echtes Verstehen, Motivation, Häufigkeit; vier Gremien liegen schon vor | gering (macht Claude) | **Ja** |
| **E Umfrage** (anonym nach dem 3. Samstag, geplant) | Zufriedenheit, Selbstauskunft Nutzung | Fragebogen (noch offen, OFFENE-FRAGEN Nr. 5) | Meinung statt Verhalten | gering | **Ja** |

Was Kennzahlen hier bedeuten (Empfehlung): **Zeigt ein Usability-Problem an:** Aufgabe im Test nicht ohne Hilfe geschafft; dieselbe falsche Stelle bei zwei oder mehr Personen; Hausaufgabe begonnen, aber nicht abgeschlossen (aus C2). **Nur Anlass zum Nachschauen:** geringe Erledigungsquote insgesamt (kann Zeitmangel sein), wenige aktive Tage, viele Fehler in einem Thema (kann Fachschwäche sein statt Bedienproblem), schlechte Umfragewerte ohne Begründung.

Falls Du Event-Tracking später doch willst (zum Beispiel für eine Träger-Lizenz), wären diese Ereignisse der Kern. **Nur als Vorrat, nicht für den Pilot:**

| Ereignis | Zweck | Felder (ohne Personenbezug) |
|---|---|---|
| `app_start` | Rückkehr, Wiederaufnahme | Version, Gerätetyp (Handy/Tablet/Laptop), erster Start ja/nein |
| `view` | Navigationswege, Hin-und-her | Ansicht (Hash, z. B. `thema/ohmsches-gesetz`), vorherige Ansicht |
| `task_start` / `task_end` | Abschluss- und Abbruchrate, Zeit | Modus (Hausaufgabe/Üben/Prüfung), Thema, Aufgabentyp, Stufe, Dauer, Ergebnis richtig/falsch/Lösung angesehen |
| `hint_used` | Hilfebedarf | Thema, Hilfestufe |
| `hw_done` | Erfolgskriterium | Einheit, Anzahl erledigt |
| `feature_use` | Auffindbarkeit | Funktion (Formelsammlung, Glossar, Suche, Meine Fehler, Letzte Aufgabe, Senden) |

---

## Teil 3 – Empfehlung

**Empfehlung: A1 + B1 + C2 + D + E, ohne neues Tracking.**

1. **D vorher (Claude):** Ich spiele das Testskript aus Teil 6 automatisch auf Handy-Größe durch, damit jede Aufgabe lösbar ist und wir keine Testzeit an Abstürzen verlieren.
2. **A1 mit B1 (Du):** 5 Personen, je 30–40 min, eigenes Handy, lautes Denken, freiwillige Bildschirmaufnahme. Das ist der größte Erkenntnisgewinn je Stunde: Erfahrungsgemäß zeigen schon 5 Personen die meisten groben Bedienprobleme (Annahme, keine repräsentative Stichprobe).
3. **Auswertung (Claude):** Problemliste nach Teil 7, priorisiert, mit Vorschau für jede Darstellungsänderung.
4. **Verbessern und gleiche Aufgaben erneut testen** mit 2–3 neuen Personen.
5. **C2 + E im Pilot:** Lernfortschritt-Dateien am 2. und 3. Samstag einsammeln, Umfrage nach dem 3. Samstag mit drei Usability-Fragen.

Warum: Bisher gibt es nur simulierte Tests. Der blinde Fleck ist genau das, was nur Menschen zeigen: Verstehen sie Begriffe, Rückmeldungen und den Weg zur Hausaufgabe? Das klärt A1 ohne Code, ohne Recht und ohne Kosten. B2 und C1 würden die Kernzusage der App („keine Konten, kein Tracking“) brechen und Einwilligungsbanner, Verträge und Pflege nach sich ziehen, für eine Kursgröße, bei der Zahlen ohnehin wenig belastbar sind.

---

## Teil 4 – Konkreter Pilotversuch

| Nr. | Schritt | Wer | Bis | Aufwand |
|---|---|---|---|---|
| 0 | Testskript per Browser-Automation durchspielen (Handy 390 × 844 und 320 px, Chromium und WebKit), Sollwege und Schrittzahl je Aufgabe festhalten | Claude | 31.10.2026 | Dich 0 h |
| 1 | 5 Testpersonen ansprechen, Termine, Bögen drucken (Vorlagen aus Teil 6/7) | Du | 02.11.2026 | 1 h |
| 2 | 5 Sitzungen à 30–40 min + 10 min Notizen direkt danach | Du (besser mit zweiter Person, die moderiert, während Du schweigst) | 15.11.2026 | 4 h |
| 3 | Bögen abfotografieren oder abtippen, Aufnahmen (falls vorhanden) übergeben | Du | 16.11.2026 | 0,5 h |
| 4 | Auswertung: Aufgabenmatrix, Problemliste, Prioritäten, Vorschau der Verbesserungen | Claude | 18.11.2026 | Dich 0,5 h zum Lesen |
| 5 | P0/P1 umsetzen nach Deinem Ja (PR wie gewohnt) | Claude, Ja von Dir | 25.11.2026 | 0,5 h |
| 6 | 1. Kurstag 28.11.2026: Beim gemeinsamen Speichern der App und Öffnen der ersten Hausaufgabe 5 Minuten still beobachten, wo die Gruppe hängt (nur Strichliste, keine Namen) | Du | 28.11.2026 | 10 min im Kurs |
| 7 | 2. und 3. Kurstag (16.01. und 23.01.2027): freiwillige Lernfortschritt-Dateien einsammeln, Kursübersicht in der Dozentenversion | Du, Auswertung Claude | 23.01.2027 | 0,5 h |
| 8 | Umfrage nach dem 3. Samstag mit drei Usability-Fragen (Teil 6, Nachbefragung) | Fragebogen Claude, Ausgabe Du | 23.01.2027 | 0,5 h |

Gesamt für Dich bis zum Kursstart: rund 6,5 Stunden, also etwa eine Woche Deines Budgets.

Testpersonen (Empfehlung): 5 Erwachsene, möglichst nah an der Zielgruppe: Facharbeiterinnen und Facharbeiter, frühere Lehrgangsteilnehmende, Kolleginnen und Kollegen aus Betrieben. Mischung: 2 mit wenig Übung am Handy oder in Mathe, 2 typisch, 1 mit Deutsch als Zweitsprache. Geräte: mindestens 2 iPhones und 2 Android-Handys. Niemand, der den Code oder frühere Fassungen gut kennt. Keine Minderjährigen (siehe Teil 7 Datenschutz). Teilnehmende des eigenen Kurses erst ab dem 1. Kurstag und nur in der Gruppe (Schritt 6), damit niemand das Gefühl hat, bewertet zu werden.

### Wiederholbarer Ablauf für spätere Versionen

| Anlass | Was | Aufwand |
|---|---|---|
| Jeder PR | Prüfskript (gibt es: `tests/check.js`, CI „Prüfskript“) | 0 |
| Jeder PR mit Änderung an Bedienung | Automatischer Durchlauf der Testskript-Aufgaben (Empfehlung: `tests/aufgabenpfade.js`, Code nur nach Deinem Ja) | 0 |
| Neue sichtbare Funktion | 1 Person, 10 min, nur die betroffene Aufgabe („Flurtest“) | 15 min |
| Vor jedem Kurshalbjahr oder vor einem Träger-Angebot | 3–5 Personen mit dem vollen Testskript, gleiche Aufgaben, Vergleich mit der Vorrunde | 4 h |
| Nach jedem 3. Kurstag | Lernfortschritt-Dateien + Umfrage | 1 h |

---

## Teil 5 – Technische Umsetzung

| Bereich | Was | Status |
|---|---|---|
| Zugang zur App | Pages-Adresse https://84g64ds8jm-cmyk.github.io/LernLabor/ auf dem eigenen Handy der Testperson. Vorher die Websitedaten der Seite in den Browser-Einstellungen löschen (oder einen Browser nehmen, in dem die App noch nie offen war), damit der Erststart echt ist. Kein privates Fenster: Dort geht der Lernstand beim Schließen verloren, dann scheitert T7 künstlich. | vorhanden |
| Testkonto | nicht nötig, es gibt keine Konten | — |
| Aufnahme iPhone | Kontrollzentrum → Bildschirmaufnahme (Mikrofon aus lassen, wenn keine Tonaufnahme vereinbart ist) | Bordmittel |
| Aufnahme Android | Schnelleinstellungen → Bildschirmaufnahme (ab Android 11, je nach Hersteller benannt) | Bordmittel |
| Aufnahme Laptop | macOS: Umschalt+Cmd+5. Windows: Win+Alt+R (Xbox Game Bar) oder OBS Studio | Bordmittel / kostenlos |
| Alternative ohne Aufnahme auf dem Gerät | Zweites Handy filmt von schräg oben nur Bildschirm und Hände | Bordmittel |
| Daten an Claude | Fotos der Bögen oder abgetippte Notizen, optional Videos (ich ziehe Einzelbilder), optional die Lernfortschritt-Datei der Testsitzung mit Kürzel | Upload in den Projektordner |
| Automatischer Aufgabendurchlauf | Playwright gegen lokale index.html, gleiche Aufgaben wie Teil 6 | läuft bei mir; ins Repo nur nach Ja |
| Neue Integrationen | keine | — |
| Nicht nötig | Analysedienst, Session-Replay-Dienst, Server, Cookie-Banner | — |

---

## Teil 6 – Testskript

### Begrüßung (vorlesen, 2 min)
„Danke, dass Du mitmachst. Wir testen die App, nicht Dich. Wenn etwas nicht klappt, liegt das an der App, und genau das wollen wir finden. Sag bitte laut, was Du denkst, was Du suchst und was Du erwartest. Ich helfe absichtlich nicht gleich, auch wenn es komisch wirkt. Du kannst jederzeit aufhören.“

### Vorfragen (1 min)
1. Wie oft lernst Du mit Apps oder Webseiten auf dem Handy? (nie / selten / oft)
2. Wie sicher fühlst Du Dich beim Rechnen mit Formeln? (1 = gar nicht bis 5 = sehr)
3. Hast Du schon eine IHK-Prüfung abgelegt? (ja / nein)

### Aufgaben
Kern = immer. Zusatz = wenn Zeit bleibt. Die Spalte „Sollweg“ ist nur für die Beobachtung, nicht vorlesen.

| Nr. | Auftrag (wörtlich vorlesen) | Startpunkt | Geschafft, wenn | Sollweg in v153 | Zeitgrenze |
|---|---|---|---|---|---|
| T1 Kern | „Du hast diesen Link von Deinem Dozenten bekommen. Schau Dich zwei Minuten um und erzähl mir, wofür Du die App nutzen würdest.“ | Link frisch geöffnet | nennt mindestens zwei Dinge (z. B. üben, Hausaufgaben, Bilder zum Einstellen) | Einführung (7 Karten) lesen oder überspringen, Startseite | 2 min |
| T2 Kern | „Dein Dozent hat gesagt: Bis zum nächsten Termin sollt ihr die Aufgaben zum ersten Unterrichtstag machen. Fang mit der ersten an.“ | Startseite | erste Hausaufgabe von Kapitel 1.1 beantwortet | Start → Karte Hausaufgaben → Öffnen → Aufgabe 1 | 4 min |
| T3 Kern | „Gib bei der nächsten Rechenaufgabe absichtlich eine falsche Zahl ein. Finde dann heraus, was richtig gewesen wäre und warum.“ | Hausaufgabe oder Üben | erklärt den Rechenweg in eigenen Worten | Prüfen → Rückmeldung → Lösungsweg | 4 min |
| T4 Kern | „Im Unterricht ging es um den Zusammenhang von Spannung, Strom und Widerstand. Such Dir die Erklärung dazu mit dem Bild, an dem man etwas einstellen kann.“ | beliebig | Thema „Ohmsches Gesetz“ offen, Regler bewegt | Suche oben („Ohm“, „Spannung“) oder Lernen → Physik → Thema | 3 min |
| T5 Kern | „Stell im Bild ein, dass doppelt so viel Strom fließt. Was hast Du dafür verändert?“ | Thema Ohmsches Gesetz | Strom verdoppelt und Begründung genannt | Regler U oder R | 3 min |
| T6 Kern | „Übe jetzt zwei Aufgaben genau zu diesem Thema. Danach geh zurück zum Bild.“ | Thema Ohmsches Gesetz | 2 Aufgaben beantwortet, wieder im Thema | „Aufgaben zu diesem Thema üben“ → … → „‹ Zurück zum Thema“ | 5 min |
| T7 Kern | „Mach eine Pause: Schließ die App ganz. Jetzt öffne sie wieder und mach da weiter, wo Du warst.“ | App geschlossen | wieder im zuletzt bearbeiteten Thema oder in der Aufgabe | Menü „↩ Weiter: <Thema>“ oder Fach öffnet zuletzt besuchtes Thema | 2 min |
| T8 Kern | „Finde heraus, bei welcher Aufgabe Du heute einen Fehler gemacht hast, und rechne sie noch einmal.“ | beliebig | Fehleraufgabe erneut gelöst | Meine Fehler (Startseite oder Ich → Lernstand) | 3 min |
| T9 Zusatz | „Du hast die Formel für den Wirkungsgrad vergessen. Schlag sie nach.“ | beliebig | Formel η = P_ab / P_zu gefunden | Suche oder Lernen → Formelsammlung | 2 min |
| T10 Zusatz | „Dein Dozent möchte vor dem nächsten Termin sehen, wie weit Du bist. Bereite das so vor, dass Du es ihm schicken könntest. Schick es nicht ab.“ | beliebig | Senden-Ansicht mit Kürzel ausgefüllt | Ich → Lernfortschritt senden | 3 min |
| T11 Zusatz | „Richte es so ein, dass Du die App nächste Woche schnell wiederfindest.“ | beliebig | Symbol auf dem Homebildschirm oder klarer eigener Weg | Karte „Als App speichern“ oder Browsermenü | 2 min |

### Hilfe in drei Stufen (immer gleich, im Bogen notieren)
1. „Was würdest Du jetzt versuchen?“
2. „Wo würdest Du so etwas erwarten?“
3. Zeigen. Dann zählt die Aufgabe als **nicht geschafft**.

### Beobachten je Aufgabe
- Ergebnis: ✓ ohne Hilfe · H1/H2 mit Hilfe · ✗ nicht geschafft oder abgebrochen
- Zeit (Stoppuhr am Handy reicht)
- Umwege: falsche Ansicht geöffnet, zurück gegangen, gleiche Stelle mehrfach angetippt
- Zögern über 10 Sekunden, Suchen durch Scrollen
- Wörtliche Zitate, besonders „Ah“, „Hä?“, „Wo ist …?“, „Ich dachte …“
- Liest die Person Rückmeldungen und Lösungsweg oder tippt sie weg?
- Schwierigkeit nach jeder Aufgabe erfragen: „Wie leicht war das, von 1 (sehr schwer) bis 7 (sehr leicht)?“

### Nachfragen (5 min)
1. „Die App hat die Funktionen, die ich zum Lernen brauche.“ (1 bis 7)
2. „Die App ist leicht zu bedienen.“ (1 bis 7)
3. Was war am verwirrendsten?
4. Was würdest Du als Erstes ändern?
5. Würdest Du die App zwischen zwei Kursterminen nutzen? Warum oder warum nicht?

Die Fragen 1 und 2 sind die zwei Aussagen des kurzen Fragebogens UMUX-Lite. Dieselben zwei Fragen in die Umfrage nach dem 3. Samstag, dann sind Test und Kurs vergleichbar.

---

## Teil 7 – Auswertungsvorlage

### Aufgabenmatrix (je Testrunde ein Blatt)

| Person | Gerät | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | UMUX 1 | UMUX 2 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| P1 | iPhone | ✓ 1:10 · 6 | | | | | | | | | | | | |
| P2 | Android | | | | | | | | | | | | | |

Eintrag je Zelle: Ergebnis · Zeit · Schwierigkeit 1–7.

### Problemkarte (je Problem eine Zeile)

| Feld | Inhalt |
|---|---|
| ID | U-JJJJ-NN, zum Beispiel U-2026-01 |
| Art | **B** beobachtet (echte Person) · **D** datenbasiert (Lernfortschritt, Umfrage) · **H** Hypothese (Simulation, noch prüfen) |
| Ansicht / Funktion | z. B. Startseite, Hausaufgabe, Thema Ohmsches Gesetz |
| Aufgabe | T1–T11 |
| Beobachtetes Verhalten | was die Person tat, möglichst wörtlich |
| Erwartet | was die Person erwartete (aus lautem Denken) |
| Tatsächlich | was die App tat |
| Beleg | Bogen P2 T4, Video P2 ab 03:12, Zitat |
| Auswirkung | was dadurch für das Lernen verloren geht |
| Schweregrad | 4 blockiert Kernaufgabe · 3 große Verzögerung oder Fehlverständnis · 2 kleiner Umweg · 1 Schönheitsfehler |
| Häufigkeit | x von n Personen |
| Vermutete Ursache | Begriff, Position, Größe, fehlende Rückmeldung … |
| Verbesserungsvorschlag | konkret, mit Ort |
| Aufwand | S (unter 1 h) · M (halber Tag) · L (mehr) |
| Prüfung der Verbesserung | gleiche Aufgabe mit 2–3 neuen Personen, Ziel: ✓ ohne Hilfe |
| Status | offen · Vorschau · umgesetzt in vNNN · bestätigt |

### Priorität

| Stufe | Regel | Umgang |
|---|---|---|
| P0 | Schweregrad 4 bei einer Kernaufgabe (T2, T3, T6, T8) und mindestens 1 Person | vor dem 1. Kurstag beheben |
| P1 | Schweregrad 4 bei Zusatzaufgabe, oder Schweregrad 3 bei mindestens 2 von 5 | vor dem 1. Kurstag, wenn Aufwand S oder M |
| P2 | Schweregrad 3 bei 1 Person, oder Schweregrad 2 bei mindestens 3 von 5 | in die nächste Version |
| P3 | sonst | sammeln in `OFFENE-EMPFEHLUNGEN-KONSORTIEN.md` |

Art **H** bekommt nie mehr als P2, bis eine echte Person sie bestätigt.

### Beispiel (Hypothese aus meinem heutigen Durchlauf, nicht beobachtet)

| Feld | Inhalt |
|---|---|
| ID | U-2026-H1 |
| Art | H |
| Ansicht | Startseite, Erststart |
| Aufgabe | T2 |
| Beobachtet | (noch keine Person) |
| Erwartet | Kursteilnehmende suchen die Hausaufgabe zuerst |
| Tatsächlich | „Dein nächster Schritt“ zeigt zuerst die Hydraulik-Probe und den Mathe-Check (20 min). Die Hausaufgabe steht in der zweiten Karte. |
| Beleg | Playwright v153, 390 × 844, Bildschirmfoto Erststart |
| Auswirkung | möglicher Umweg vor der Aufgabe, an der der Pilot gemessen wird |
| Schweregrad | offen |
| Häufigkeit | offen |
| Ursache | Startseite richtet sich an Neue ohne Kurs |
| Vorschlag | erst nach dem Test entscheiden |
| Aufwand | S |
| Prüfung | T2: Anteil, der die Hausaufgabe ohne Umweg öffnet |

---

## Datenschutz und praktische Grenzen

Keine Rechtsberatung. **Allgemeine Empfehlung** = guter Brauch, wenig Risiko. **Prüfen** = Anwendbarkeit klären lassen.

| Punkt | Empfehlung | Art |
|---|---|---|
| Information und Einwilligung | Kurzes Blatt: Zweck (App verbessern), was aufgezeichnet wird (Bildschirm, ggf. Ton, Notizen), wer es sieht (Du, Claude zur Auswertung), Löschung, Freiwilligkeit, jederzeit abbrechen. Unterschrift oder Zustimmung per Mail. | Allgemein; Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO **prüfen** |
| Datensparsamkeit | Kürzel P1–P5 statt Namen, kein Gesicht, Ton nur wenn nötig, Notizen statt Video, wo es reicht | Allgemein |
| Zweckbindung | Daten nur für die App-Verbesserung, nicht für Noten oder Kursbewertung | Allgemein |
| Weitergabe an Claude | Hochgeladene Bögen und Videos werden von einem KI-Dienst verarbeitet; im Einwilligungsblatt nennen, Videos vorher auf das Nötige kürzen | **Prüfen** (Auftragsverarbeitung, Drittland) |
| Speicherung und Zugriff | Nur auf Deinem Rechner bzw. im privaten Projektordner, keine private Cloud | Allgemein |
| Löschfristen | Videos 4 Wochen nach Auswertung löschen, anonymisierte Problemliste darf bleiben | Allgemein |
| Minderjährige | Im Pilot keine. Falls Azubis unter 18: Einwilligung der Eltern, besser ganz vermeiden | **Prüfen** |
| Zugangsdaten / sensible Daten | Die App hat keine Passwörter. Bei Bildschirmaufnahme vorher Benachrichtigungen aus (Nicht stören), keine anderen Apps öffnen | Allgemein |
| Eigene Kursteilnehmende | Abhängigkeit vom Dozenten: Teilnahme freiwillig, anonym, nicht im Kurs bewerten. Verschwiegenheit gegenüber RBZ (§ 5.1 Honorarvertrag): keine Namen, Zitate oder Zahlen aus dem Kurs im Pitch ohne Zustimmung | Allgemein; RBZ-Bestätigung ist noch offen |
| Alternativen zu Session-Replays | Moderierter Test mit Notizen, Bordmittel-Aufnahme einzelner Testsitzungen, Lernfortschritt senden, Umfrage | Empfehlung |

---

## Teil 8 – Nächste Schritte (was ich von Dir brauche)

1. **Ja oder Nein zur Testrunde vor Kursstart** mit 5 Erwachsenen außerhalb des Kurses. Wenn ja: Wen könntest Du fragen? Mir reichen Anzahl, Gerät (iPhone/Android) und ob jemand wenig Übung mit Handy oder Mathe hat.
2. **Wer moderiert?** Du selbst oder eine zweite Person (empfohlen, damit Du still beobachten kannst).
3. **Bildschirmaufnahme ja oder nein?** Empfehlung: ja, nur Bildschirm, ohne Ton und Gesicht.
4. **Darf ich den automatischen Aufgabendurchlauf als `tests/aufgabenpfade.js` ins Repo legen?** Das ist eine Code-Änderung, nur nach Deinem Ja. Schritt 0 mache ich ohnehin lokal.
5. **Sollen die zwei UMUX-Lite-Fragen in die Umfrage nach dem 3. Samstag?** Der Fragebogen ist noch offen (OFFENE-FRAGEN Nr. 5); ich kann ihn mit entwerfen.

Nicht nötig für den Start: Testkonto, Analysedienst, Session-Replay, neue Integrationen.
