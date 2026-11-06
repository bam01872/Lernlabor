# Grafikstil 3D (Lernlabor)

Stand 21.10.2026, eingeführt mit Chemie v59/v60. Gilt für alle neuen und überarbeiteten Simulationsbilder, in denen Gegenstände vorkommen (Gefäße, Teilchen, Elektroden, Körper). Reine Diagramme (Kurven, Balken für Werte, Statistik) bleiben flach, damit sie gut ablesbar bleiben.

## Grundregeln
- Licht fällt von links oben: links Glanzstreifen, rechts und unten Schatten.
- Gefäße haben einen Öffnungsrand (Ellipse), einen gerundeten Boden und einen weichen Schatten darunter.
- Flüssigkeiten haben Farbe plus Tiefe (unten dunkler), einen hellen Flüssigkeitsspiegel mit Lichtkante und eine Spiegelung am Boden.
- Teilchen (Atome, Ionen, Elektronen) sind Kugeln mit Glanzpunkt.
- Metalle sind Stäbe mit zylindrischem Glanz.
- Körper und Klötze sind Würfel mit heller Oberseite und dunkler Seite.
- Text auf farbigen Flächen hat eine feste Farbe (weiß auf Metall, dunkel auf hellen Kacheln), Text über Bildern einen Halo in Kartenfarbe.
- Größen maßstäblich zeichnen, wenn es fachlich zählt (z. B. Ionenradien), mit Maßstabsbalken.
- Beide Darstellungen prüfen: hell und dunkel.

## Bausteine in index.html
| Baustein | Zweck |
|---|---|
| `BALL(x,y,r,farbe,strich,extra)` | Kugel mit Glanz (Verlauf `g-ball`) |
| `ROD(x,y,b,h,farbe,strich)` | Metallstab, Elektrode, Platte (`g-cyl`) |
| `GLAS(x,y,b,h,{tube,lv,c,op,ry})` | Becherglas oder Reagenzglas (`tube:1`), Füllhöhe `lv`, Flüssigkeitsfarbe `c`; liefert `{b,f}`: zuerst `b`, dann Inhalt (Elektroden, Teilchen), dann `f` |
| `CUBE(x,y,b,h,farbe,tiefe)` | Würfel oder Block mit Ober- und Seitenfläche |
| `TH(x,y,text,klasse,ausrichtung)` | Text mit Halo, lesbar über Bildern |
| Verläufe in `svg#fxd` | `g-ball`, `g-cyl`, `g-glas`, `g-liqh`, `g-liqv`, `g-surf`, `g-shad`, `g-hl`, `g-tile`, `g-glow` |

## Wo eingesetzt
- Chemie: alle Themen (Säuren & Basen, Korrosion, Atommodell, Bindungstypen, Periodensystem, Reaktionsgleichungen, Titration, Oxidationszahlen, Galvanische Zelle, Elektrolyse, Wasserhärte, Blei-Batterie), Hintergrund-Skizzen.
- Probe Physik (Branch `physik-3d-probe`, noch nicht live): Auftrieb und Dichte, Mischungstemperatur, Gasgesetze.

## Einschätzung andere Fächer
- **Physik:** lohnt sich bei Gegenständen: Hydraulik (Zylinder, Kolben), Druck (Wasserbecken), Auftrieb, Gasgesetze, Mischungstemperatur, Wärmekapazität, Wärmeausdehnung (Stab), Hebel und Flaschenzug (Gewichte als Würfel), Schwingung (Masse), Stromkreis (Bauteile). Diagramme daneben flach lassen.
- **Energie:** Schaubilder der Kraftwerke vorsichtig aufwerten (Behälter, Rohre, Turbine), Energiefluss-Balken flach lassen.
- **Statistik, Mathematik, Umrechnen:** flach lassen. Dort zählen exakte Kurven, Achsen und Zahlen; 3D-Effekte verfälschen das Ablesen.
