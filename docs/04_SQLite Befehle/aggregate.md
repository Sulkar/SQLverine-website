---
sidebar_position: 7
---
# AGGREGATE

<img
  src={require('./assets/Aggregatfunktionen.png').default}  
  style={{width:200}}
/>

## Aggregatsfunktionen - GROUP BY ...


| Aggregatsfunktion | Beschreibung |
| -------- | -------- |
| COUNT(spaltenname)     | Zählt alle Einträge die in der gewählten Spalte einen Wert haben.     | 
| AVG(spaltenname)     | Berechnet den Durchschnitt aller gefundenen Werte.     | Text     |
| SUM(spaltenname)     | Summiert alle gefundenen Werte.     | 
| MAX(spaltenname)     | Liefert den größten gefundenen Wert zurück.   
| MIN(spaltenname)     | Liefer den kleinsten gefundenen Wert zurück.    


Aggregatsfunktionen berechnen ein Ergebnis aus einer Vielzahl von Werten. Aggregatsfunktionen werden häufig mit dem Gruppierungsbefehl GROUP BY im SELECT Befehl aufgerufen.

```
SELECT Aggregatsfunktion(spaltenname) FROM tabellenname
GROUP BY spaltenname
```

Mit diesem Befehl werden Informationen aus mehreren Tabellen gleichzeitig abgefragt. Das Ergebnis wird über die jeweiligen IDs verknüpft.

### Beispiele:

**Tabelle 1: schueler**

|id| vorname   | nachname | geburtsdatum | klasse_id | 
|--|--------   | -------- | ------------ | :-------: |
|1 | Paul      | Weber    | 2009-07-12   |     1     |
|2 | Margot    | Müller   | 2008-11-19   |     2     |
|3 | Mahmud    | Al'hissi | 2008-06-30   |     1     |
|4 | Sabrina   |  Otto    | 2007-05-19   |     2     |
|5 | Ayse      | Ünül     | 2008-12-12   |     2     |

#### Befehl


```
SELECT MAX(geburtsdatum), vorname FROM schueler
```
Mit diesem Befehl wird der jüngste Schüler*in gefunden, da nach dem größten Wert gesucht wird.

#### Ergebnis:

| MAX(geburtsdatum)|vorname|
|--------   | -|
| 2009-07-12| Paul|

---

#### Befehl


```
SELECT MIN(geburtsdatum), vorname FROM schueler
```
Mit diesem Befehl wird der älteste Schüler*in gefunden, da nach dem kleinsten Wert gesucht wird.

#### Ergebnis:

| MIN(geburtsdatum)|vorname|
|--------   | - |
| 2007-05-19 | Sabrina |

#### Befehl


```
SELECT COUNT(id) FROM schueler
```
Mit diesem Befehl werden die Einträge in der Spalte id gezählt und ausgegeben.

#### Ergebnis:

| COUNT(id)|
|--------   |
| 5      | 


---

#### Befehl


```
SELECT COUNT(id), klasse_id FROM schueler GROUP BY klasse_id
```
Mit diesem Befehl werden die Einträge nach der Spalte klasse_id gruppiert, dann gezählt und ausgegeben.

#### Ergebnis:

| COUNT(id)| klasse_id|
|--------   | -|
| 2      | 1 |
| 3      | 2 |

---

## HAVING - Ergebnisse einer Aggregatsfunktion einschränken

```
SELECT Aggregatsfunktion(spaltenname) FROM tabellenname 
GROUP BY spaltenname 
HAVING Aggregatsfunktion(spaltenname) <Operator> <Wert>
```
Der Befehl HAVING ersetzt bei einer Aggregatsfunktion den Befehl WHERE und überprüft, ob eine Bedingung zutrifft.


#### Befehl


```
SELECT COUNT(id), klasse_id FROM schueler 
GROUP BY klasse_id 
HAVING COUNT(id) > 2
```
Mit diesem Befehl werden die Einträge nach der Spalte klasse_id gruppiert, die gruppierten Schüler*innen gezählt und das Ergebnis nur ausgegegen, wenn in der Klasse mehr als 2 Schüler*innen sind.

#### Ergebnis:

| COUNT(id)| klasse_id|
|--------   | -|
| 3      | 2 |

