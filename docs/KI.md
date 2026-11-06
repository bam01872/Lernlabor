# KI-Funktionen
Stand: 19.10.2026

Zweck: Einsatz, Grenzen, Zugang und Datenschutz der KI-Funktionen (KI-Tutor, KI-Prüfer, KI-Bewertung von Freitext) sowie Sprachein- und -ausgabe.

## Ist-Stand im Code (Lernlabor)
- KI läuft über `window.claude.use('sample')`, also nur im Claude-Artifact mit dem Konto des Nutzers.
- Ohne Artifact zeigen die KI-Bereiche nur einen Hinweis („gibt es nur im Claude-Artifact“). Die Bereiche sind in der GitHub-Fassung sichtbar, aber nicht nutzbar.
- Vorlesen nutzt die Gerätestimmen (SpeechSynthesis), läuft lokal.
- Spracheingabe nutzt die Spracherkennung des Browsers (SpeechRecognition). Auf dem iPhone in der installierten App ist sie abgeschaltet, dort wird auf das Diktieren der Tastatur verwiesen.

## Entscheidungen
- Entschieden: Im Pilot keine KI. Die KI-Bereiche werden in der GitHub-Fassung ausgeblendet, es wird kein Artifact-Link ausgegeben. Siehe [ADR 003](adr/003-pilot-ohne-ki.md).
- Begründung: KI mit echten Nutzern ungetestet, Teilnehmer müssten ein Konto bei einem KI-Anbieter anlegen, ein Knopf mit „geht hier nicht“ wirkt wie ein Fehler.
- Entschieden: Markus testet die KI parallel selbst im Artifact (Tutor, beide Prüfertypen, Freitext-Bewertung).

## Annahmen
- Annahme: Vorlesen bleibt im Pilot, weil es lokal auf dem Gerät läuft.
- Annahme zum Datenschutz: Die Spracheingabe in Chrome schickt die Aufnahme nach allgemeinem Kenntnisstand an Server des Browser-Herstellers (Google).
- Korrektur 19.10.2026: Die Spracheingabe hängt im Code nur an KI-Tutor und KI-Prüfer, nicht an anderen Antwortfeldern. Mit dem Ausblenden der KI ist sie in der GitHub-Fassung ebenfalls weg (PR #1).

## Offen (nach dem Pilot)
- Zugangsmodell für KI: Claude-Konto der Nutzer, eigener Dienst mit Kosten, nur für Dozenten oder gar nicht.
- Fairness und Konsistenz der Prüfertypen (wohlwollend, streng): Testplan mit festen Beispielantworten.
- Umgang mit KI-Fehlern: Bezug auf Merkbox des Moduls, Beschränkung auf Modulthemen, Hinweis „KI kann irren“.
