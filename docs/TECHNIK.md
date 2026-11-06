# Technik und Betrieb
Stand: 19.10.2026

Zweck: Architektur, Hosting, PWA, Tests, Pflege und bekannte Einschränkungen.

## Architektur
- Entschieden: Je Labor eine HTML-Datei ohne Server, ohne Konten, Lernstand im Browser (localStorage). Siehe [ADR 001](adr/001-ohne-konten-kein-abo.md).
- Lernlabor-Repo: `84g64ds8jm-cmyk/LernLabor` mit index.html (rund 660 KB), manifest.webmanifest, sw.js, drei Symbolen.
- Meisterlabor: noch kein Repo, nur lokal committet (Risiko: keine Sicherung außerhalb von Markus' Rechner).
- Entschieden: Markus legt sofort ein privates Repo `84g64ds8jm-cmyk/Meisterlabor-Basis` an und pusht den lokalen Stand (Anleitung im Thread vom 19.10.2026).

## Hosting
- Entschieden: Pilot über GitHub Pages, Adresse https://84g64ds8jm-cmyk.github.io/LernLabor/ (vor Kursstart prüfen).

## Offline und Updates
- sw.js arbeitet „Cache zuerst“ mit Versionsname (Stand `lernlabor-v30`). Ein Update braucht eine neue index.html und eine höhere Version in sw.js.
- Folge: Nutzer sehen ein Update meist erst beim zweiten Öffnen nach dem Hochladen.
- Die Schrift kommt von Google Fonts und wird mitgecacht. Vor dem Pilot lokal einbinden (siehe OFFENE-FRAGEN.md).

## Lernstand
- Export und Import als JSON-Datei vorhanden (Lernstand → 💾 Daten).
- Bekannte Einschränkung: Safari auf iPhone/iPad löscht Webseiten-Daten nach 7 Tagen ohne Besuch. Installierte Apps auf dem Home-Bildschirm sind nach allgemeinem Kenntnisstand ausgenommen.
- Entschieden: Am ersten Kurs-Samstag installieren alle die App gemeinsam (rund 10 Minuten). Teilnehmer exportieren den Lernstand vor jedem Kurstermin. Anleitung: [ANLEITUNG-INSTALLATION.md](ANLEITUNG-INSTALLATION.md).

## Bekannte Einschränkungen
- KI nur im Artifact (siehe KI.md); im Pilot ausgeblendet.
- Spracheingabe auf dem iPhone in der installierten App abgeschaltet, dort Diktieren der Tastatur.
- Keine automatischen Tests im Repo.

## Prüfliste vor jedem Hochladen (entschieden 19.10.2026, rund 15 Minuten)
1. Version in sw.js erhöht und Zeile „Neu in Version N“ ergänzt.
2. App auf einem iPhone und einem Android-Gerät öffnen (installierte Fassung).
3. Je geändertem Modul drei Aufgaben mit Zufallswerten rechnen und Ergebnis prüfen.
4. Export einmal testen.
5. Startseite und ein Modul bei großer Systemschrift ansehen.
- Entschieden: Automatische Tests für die Zufallsaufgaben erst, wenn an Träger verkauft wird.

## Sicherheit
- Annahme: Einzige fremde Eingabe ist der Import einer Lernstand-Datei. Für den Pilot kein weiterer Handlungsbedarf.
