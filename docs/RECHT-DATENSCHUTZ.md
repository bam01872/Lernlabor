# Recht und Datenschutz
Stand: 21.10.2026

Zweck: Geklärte und offene Rechtsfragen, benötigte Texte, Zuständigkeit.

> **Keine Rechtsberatung.** Alle Aussagen hier sind Einschätzungen nach allgemeinem Kenntnisstand. Impressum und Datenschutzhinweis vor Veröffentlichung von einer fachkundigen Stelle prüfen lassen (zum Beispiel Anwalt für IT-Recht, Datenschutz-Generator eines seriösen Anbieters, Beratung der IHK für Selbstständige).

## Geklärt
- Entschieden: Markus ist freiberuflicher Dozent; Rechte an selbst erstellten Inhalten liegen grundsätzlich bei ihm. Honorarvertrag geprüft (21.10.2026): keine Rechteklausel, kein Wettbewerbsverbot, siehe Abschnitt „Prüfung Honorarvertrag“.
- Erledigt (21.10.2026): Markus hat den Bildungsträger (RBZ) über den Einsatz im Kurs informiert. PLZ im Impressum 93053 bestätigt.
- Entschieden: Abstandsregel zu IHK-Prüfungsaufgaben, siehe [ADR 002](adr/002-abstandsregel-pruefungsaufgaben.md).
- Entschieden: Schrift lokal einbinden statt Google Fonts (keine IP-Übertragung an Google).
- Entschieden: Im Pilot keine KI ([ADR 003](adr/003-pilot-ohne-ki.md)) und keine Spracheingabe der Seite (Aufnahme ginge in Chrome an Google-Server). Vorlesen bleibt (lokal). Diktieren über die Tastatur ist die eigene Wahl der Nutzer.
- Annahme: „IHK“ und „Industriemeister“ dürfen beschreibend verwendet werden („zur Vorbereitung auf die IHK-Prüfung“). Keine IHK- oder DIHK-Logos, kein Eindruck eines offiziellen Angebots.
- Annahme: Impressumspflicht besteht, weil die App im bezahlten Kurs eingesetzt wird. Adresse: Geschäftsadresse von Markus als Freiberufler.
- Annahme: Speichern des Lernstands im Browser (localStorage) ist für die vom Nutzer gewünschte Funktion nötig und braucht keine Einwilligung (§ 25 Abs. 2 TDDDG). Kein Cookie-Banner, weil keine Cookies, kein Tracking.

## Entwurf Impressum
```
Impressum
Angaben gemäß § 5 DDG

Dr. rer. nat. Markus Baum
Am alten Schlachthof 2
93053 Regensburg

E-Mail: [Projekt-E-Mail-Adresse]

Das Lernlabor ist ein privates Lernangebot. Es steht in keiner Verbindung zur IHK oder zum DIHK.
```
Offen: Umsatzsteuer-ID angeben, falls vorhanden.

## Entwurf Datenschutzhinweis
```
Datenschutz

Verantwortlich: Dr. rer. nat. Markus Baum, Am alten Schlachthof 2, 93053 Regensburg, [Projekt-E-Mail-Adresse]

Dein Lernstand: Das Lernlabor speichert Deinen Lernstand nur in Deinem Browser auf Deinem Gerät. Er wird nicht automatisch an mich oder andere übertragen. Du kannst ihn jederzeit exportieren oder unter „Lernstand → Daten“ löschen.

Lernfortschritt senden: Nur wenn Du im Lernstand „Lernfortschritt senden“ nutzt, schickst Du mir selbst eine Datei oder einen Text, zum Beispiel per Mail. Sie enthält den Namen oder das Kürzel, das Du einträgst, Deinen Kurs, Deine Ergebnisse je Thema, Deine Prüfungssimulationen, Deine aktiven Tage und Deine Fehlerarten. Ich nutze diese Angaben nur, um Dich im Kurs zu begleiten und den Unterricht anzupassen. Rechtsgrundlage ist Deine freiwillige Übermittlung (Art. 6 Abs. 1 lit. a DSGVO). Die Daten liegen nur auf meinem Rechner, niemand sonst sieht sie, und ich lösche sie spätestens nach Kursende. Ein Kürzel statt Deines Namens reicht.

Hosting: Die Seite liegt bei GitHub Pages (GitHub Inc., USA). Beim Aufruf verarbeitet GitHub technisch nötige Zugriffsdaten, zum Beispiel Deine IP-Adresse, um die Seite auszuliefern und vor Angriffen zu schützen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren Bereitstellung). Die Übermittlung in die USA stützt sich auf [Angemessenheitsbeschluss bzw. EU-US Data Privacy Framework, vor Veröffentlichung prüfen].

Fehler melden: Wenn Du „Fehler melden“ nutzt, öffnet sich Dein eigenes E-Mail-Programm. Ich verarbeite Deine E-Mail nur, um den Fehler zu beheben, und lösche sie danach.

Keine Cookies, kein Tracking, keine KI und keine Spracherkennung durch diese Seite.

Deine Rechte: Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Beschwerde bei einer Datenschutz-Aufsichtsbehörde (in Bayern für Private: Bayerisches Landesamt für Datenschutzaufsicht).
```

## Entwurf Hinweise in der App
```
Alle Aufgaben sind eigene Aufgaben und keine IHK-Prüfungsaufgaben. Ich prüfe die Inhalte sorgfältig, Fehler sind trotzdem möglich. Melde sie bitte über „Fehler melden“. Das Lernlabor ersetzt keinen Lehrgang und garantiert keinen Prüfungserfolg.
```

## Offen
- Vollständiger Name für Impressum und Datenschutzhinweis. Entschieden: Markus legt eine neue E-Mail-Adresse nur für das Lernlabor an und trägt sie ein.
- Grundlage der Datenübermittlung an GitHub in die USA prüfen.
- Schriftliche Bestätigung der drei Punkte vom RBZ einholen (Mail-Entwurf unten) und ablegen.
- Vor Verkauf an Träger: Lizenzvertrag, Haftung, Barrierefreiheitspflichten (BFSG), Gewerbe und Steuern. Nur benennen, fachlich beraten lassen.

## Prüfung Honorarvertrag (21.10.2026)
Dozentenvertrag (freie Mitarbeit) mit dem RBZ Eckert, Kurs IMKO-1TRST261101, Laufzeit 07.11.2026 bis 28.10.2028. Persönliche Angaben und Honorar stehen bewusst nicht hier. Einschätzung ohne Rechtsberatung.

**Ergebnis:** Der Vertrag steht weder dem Pilot im eigenen Kurs noch einem späteren Verkauf entgegen. Drei Punkte sollte Markus vorab schriftlich mit dem RBZ klären: Rechte am Lernlabor, „Lernfortschritt senden“ und Nennung des RBZ bzw. Pilot-Ergebnisse im Vertrieb.

| Klausel | Was drinsteht | Bedeutung für das Lernlabor |
|---|---|---|
| Rechte an Materialien | Nicht geregelt | Urheberrecht bleibt bei Markus. Ohne ausdrückliche Abrede bekommt das RBZ höchstens ein einfaches Nutzungsrecht für den Vertragszweck, also Markus' eigenen Unterricht (Zweckübertragung, § 31 Abs. 5 UrhG). Das Lernlabor ist zudem unabhängig vom Auftrag entstanden. Risiko: § 3.1 sagt, das Honorar deckt auch die Unterrichtsvorbereitung ab. Daraus könnte das RBZ ableiten wollen, das Lernlabor auch für andere Kurse nutzen zu dürfen. Deshalb schriftlich bestätigen lassen. |
| § 2.1 Methodenfreiheit | Dozent gestaltet Unterricht eigenverantwortlich, Methode und Didaktik nach eigenem Ermessen | Deckt den Einsatz einer eigenen Lern-App. |
| § 2.2 Vorgaben | Prüfungsordnung, IHK-Rahmenplan, Auflagen und Grundsätze der Eckert Schulen AG, vorgeschriebene Leistungsnachweise | Inhalte am Rahmenplan ausrichten (ist so geplant). Lernlabor nicht als offiziellen Leistungsnachweis oder Bewertungsgrundlage nutzen. Beim RBZ nachfragen, ob es Vorgaben zu digitalen Werkzeugen gibt. Keine RBZ-internen Unterlagen ins Lernlabor übernehmen. |
| § 4 Datenschutz | Personenbezogene Daten nur im Umfang verarbeiten, der für die Aufgabe nötig ist; Anlage nennt Art. 29 DSGVO (Verarbeitung nur auf Weisung) | Lernstand lokal, keine Konten, kein Tracking: unkritisch. „Lernfortschritt senden“ ist der einzige Punkt mit Teilnehmerdaten bei Markus. Im Kurs gelten diese Daten vermutlich als Daten des RBZ-Lehrgangs, dann wäre eher das RBZ verantwortlich, nicht Markus (Datenschutzhinweis nennt bisher Markus). Empfehlung: freiwillig, Kürzel statt Name, Daten nur lokal (keine private Cloud), Löschung nach Kursende, Weitergabe an niemanden, kurz mit RBZ bzw. dessen Datenschutzbeauftragtem abstimmen. |
| § 5.1 Verschwiegenheit | Stillschweigen über alle Angelegenheiten des RBZ, Mitarbeiter, Dozenten und Teilnehmer, auch nach Vertragsende | Für den Verkauf wichtig: Im Pitch kein RBZ-Name, keine Kursdaten, keine Teilnehmerzitate und keine Pilot-Zahlen aus diesem Kurs ohne schriftliche Zustimmung des RBZ (und bei Zitaten der Teilnehmer). Zwischenumfrage anonym durchführen. Allgemeine eigene Erfahrungen („im eigenen Kurs erprobt“) sind unkritisch. |
| Nebentätigkeit, Wettbewerb | Keine Klausel | Verkauf an andere Träger ist vertraglich nicht beschränkt. Das RBZ kann selbst Kunde werden (dann eigener Lizenzvertrag, nicht über das Honorar). |
| § 3.3 Steuern, Rente | Selbstständige Lehrtätigkeit, rentenversicherungspflichtig nach § 2 Satz 1 Nr. 1 SGB VI; Unterricht umsatzsteuerfrei nach § 4 Nr. 21 UStG | Die Befreiung gilt nur für Unterricht. Lizenz- oder Einmalverkäufe sind eine andere Tätigkeit: umsatzsteuerpflichtig (oder Kleinunternehmerregelung, § 19 UStG), je nach Ausgestaltung Gewerbe (Gewerbeanmeldung), Einnahmen getrennt aufzeichnen. Rentenversicherung: Pflicht hängt an der Lehrtätigkeit; ob Verkaufseinnahmen dazugerechnet werden, mit Steuerberater bzw. Deutscher Rentenversicherung klären, bevor Verkäufe starten. Hinweis: Herrenberg-Urteil des BSG zur Scheinselbstständigkeit von Dozenten, Übergangsregel bis Ende 2026; ein eigenes Produkt für mehrere Kunden spricht eher für Selbstständigkeit. |
| Haftung | Nicht geregelt | Für Fehler im Lernlabor haftet Markus selbst. Hinweis in der App („ersetzt keinen Lehrgang“) beibehalten. Vor Verkauf Berufshaftpflicht prüfen. |

### Empfehlungen
1. RBZ ist informiert (21.10.2026). Offen: die drei Punkte (Rechte, Lernfortschritt senden, Nennung des RBZ) vor dem 07.11.2026 schriftlich bestätigen lassen, falls das noch nicht geschehen ist (Entwurf unten). Eine Antwort per Mail reicht, ablegen.
2. „Lernfortschritt senden“ im Pilot nur mit Kürzel, freiwillig und mit Löschung nach Kursende. Bis zur Antwort des RBZ notfalls nur mündlich im Unterricht besprechen.
3. Pitch und Vertrieb ohne RBZ-Bezug, solange keine Zustimmung vorliegt.
4. Vor dem ersten Verkauf: Steuerberater (Umsatzsteuer, Gewerbe) und Deutsche Rentenversicherung (Statusfrage, Beitragsbemessung).

### Entwurf Mail an das RBZ
```
Betreff: Einsatz meiner Lern-App „Lernlabor“ im Kurs IMKO-1TRST261101

Guten Tag,

im Fach NTG möchte ich im Kurs IMKO-1TRST261101 ergänzend meine selbst entwickelte Lern-App „Lernlabor“ einsetzen. Die Teilnehmer nutzen sie freiwillig und kostenlos im Browser. Es gibt keine Konten, kein Tracking und keine KI; der Lernstand bleibt auf dem eigenen Gerät. Die Aufgaben sind eigene Aufgaben, keine IHK-Prüfungsaufgaben, und am Rahmenplan ausgerichtet.

Damit alles sauber geregelt ist, bitte ich um kurze Bestätigung:
1. Die App entwickle ich unabhängig von meinem Dozentenvertrag. Alle Rechte daran bleiben bei mir; das RBZ erhält dadurch kein Nutzungsrecht über meinen eigenen Unterricht hinaus.
2. Teilnehmer können mir ihren Lernstand freiwillig zuschicken (Kürzel statt Namen). Ich nutze ihn nur für meinen Unterricht, speichere ihn nur lokal und lösche ihn nach Kursende. Bitte teilen Sie mir mit, ob das aus Sicht Ihres Datenschutzbeauftragten so in Ordnung ist oder ob Sie Vorgaben haben.
3. Ich werde das RBZ und Ergebnisse aus dem Kurs ohne Ihre ausdrückliche Zustimmung nirgends nennen.

Gerne zeige ich Ihnen die App vorab.

Viele Grüße
Markus Baum
```
