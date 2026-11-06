# CONTEXT: Lernlabor und Meisterlabor Basis
Stand: 19.10.2026 (nach Grill-me-Interview, Blöcke A bis I)

## Begriffe
- IHK-Industriemeister: Weiterbildung mit Basisqualifikationen (BQ) und handlungsspezifischen Qualifikationen (HQ).
- BQ: fünf Prüfungsbereiche NTG, ReHa, BeHa, MIKP, ZiB.
- NTG: Naturwissenschaftlich-technische Gesetzmäßigkeiten (Lernlabor).
- ReHa / BeHa / MIKP / ZiB: siehe Meisterlabor Basis.
- Artifact: von Claude gehostete Seite, nur dort laufen die KI-Funktionen.
- PWA: installierbare Web-App ohne KI.

## Produkte
- Lernlabor: NTG, Simulationen, Üben, Prüfung, KI.
- Meisterlabor Basis: 47 Module, 211 Check-Fragen, 71 Rechenaufgabentypen, 27 Fallaufgaben, 58 mündliche Fragen.

## Regeln
- Deutsch, Du-Form, eigene Aufgaben, keine IHK-Originale.
- Lernstand lokal, kein Konto.
- Rechtsstand Oktober 2026, Gesetzeszahlen vor dem Lehren prüfen.

## Markt (Schätzung)
- Industriemeister 2024: 14.765 Teilnehmer (IHK-Fortbildungsstatistik).
- NTG-Zielgruppe grob 12.500 bis 13.000 pro Jahr, Chemie ohne NTG.

## Zielgruppe und Pilot (Block A, entschieden 19.10.2026)
- Entschieden: Erste Zielgruppe sind Markus' eigene Lehrgangsteilnehmer. Bildungsträger und weitere Prüflinge kommen frühestens nach dem Pilot.
- Entschieden: Pilot mit Markus' NTG-Kurs ab November 2026, nur Lernlabor, Auslieferung über GitHub Pages (PWA, ohne KI).
- Entschieden: Geräte gemischt (Handy, Tablet, Laptop). Das Handy ist der kritische Fall für Layout und Bedienung.
- Entschieden: Kernnutzen ist unbegrenztes Üben mit Zufallswerten und Rechenweg in Schritten, dazu Simulationen, die zeigen, was in der Formel passiert.
- Kursformat: 9 Samstage über rund ein Jahr verteilt (etwa alle 5 bis 6 Wochen).
- Entschieden: Einsatz als feste Aufgabe von Samstag zu Samstag passend zum Unterrichtsthema, dazu kurze Vorführung im Kurs.
- Entschieden: Erfolg des Pilots heißt, dass mindestens zwei Drittel die Aufgabe bis zum nächsten Termin erledigt haben und die anonyme Zwischenumfrage nach dem dritten Samstag überwiegend positiv ausfällt. Abschlussumfrage am Kursende zusätzlich. Die Bestehensquote ist bei einer Kursgröße kein belastbarer Beleg. (Ersetzt am 19.10.2026 die frühere Fassung „wöchentliche Nutzung, Umfrage am Kursende“.)
- Annahme: Nutzung ist nur per Selbstauskunft messbar (Umfrage, freiwilliger Lernstand-Export), weil der Lernstand nur im Browser liegt.

## Rolle von Markus
- Freiberuflicher Dozent (Honorardozent) bei einem Bildungsträger. Rechte an selbst erstellten Inhalten liegen grundsätzlich bei ihm, sofern der Honorarvertrag nichts anderes regelt (offen, siehe unten).
- Markus informiert den Bildungsträger über den Einsatz im Kurs.

## Geschäftsmodell (Block H, entschieden 19.10.2026)
- Pilot kostenlos. Technik ohne Konten, kein Abo. Spätere Einnahmen über Träger-Lizenz oder einmaligen Kauf. Details in docs/GESCHAEFTSMODELL.md.
- Zeitbudget Markus: 5 bis 7 Stunden pro Woche.

## Dokumente
- docs/PRD.md, DIDAKTIK.md, INHALT-QUALITAET.md, KI.md, TECHNIK.md, RECHT-DATENSCHUTZ.md, GESCHAEFTSMODELL.md, ROADMAP.md, OFFENE-FRAGEN.md, ANLEITUNG-INSTALLATION.md, adr/001 bis 003.
- Code-Paket für den Pilot: PR #1 im LernLabor-Repo (Entwurf, wartet auf Markus).

## Offene Punkte
- GitHub-Repository für das Meisterlabor fehlt.
- KI nur im Artifact, Kosten und Zugang für Schüler ungeklärt.
- Rechtsfragen (Impressum, Datenschutz, Urheberrecht des Dozenten) offen.
- Chemie ohne NTG ist nur frühere Recherche, in der Prüfungsverordnung belegen (betrifft Zielgruppenzahl, evtl. auch Pharmazie).
- Lernlabor lädt die Schrift von Google Fonts (sw.js cacht fonts.googleapis/gstatic). Widerspricht „nur lokal“, vor dem Pilot lokal einbinden.
