---
sidebar_position: 3
---
# WHERE

<img
  src={require('./assets/Vergleichsoperatoren.png').default}  
  style={{width:200}}
/>

## Vergleichsoperatoren

| Operator| Beschreibung | Beispiel |
| -------- | -------- | ------ |
| =     | gleich     | nachname = 'Weber' | 
|  <\>    | ungleich     | id <\> 2  |
| >=     | größer gleich     | id >= 2  |
| <=     | kleiner gleich     | id <= 3   |
| <     | kleiner     | id < 3 |
| >     | größer     | id > 2 |
| BETWEEN     | Wert innerhalb einer Spanne     | id BETWEEN 2 AND 4   |
| LIKE     | Beinhaltet einen Text; Platzhalter: %     | vorname LIKE 'Ma%'  |
| IN     | ist Teil einer Auflistung     | vorname IN ('Paul', 'Margot')



---


## Ausgabe einfach filtern

```
SELECT * FROM tabellenname WHERE spaltenname <Operator> <Wert>
```



Mit diesem Befehl werden alle Einträge der Tabelle angezeigt, bei welchen das Ergebnis der Bedingung wahr ist.

### Beispiele:

#### Befehl
`spaltenname` klasse_id

`Operator` =

`Wert` 1


```
SELECT * FROM schueler WHERE klasse_id = 1
```

#### Ergebnis:

|id| vorname   | nachname | geburtsdatum | klasse_id | 
|--|--------   | -------- | ------------ | :-------: |
|1 | Paul      | Weber    | 2009-07-12   |     1     |
|3 | Mahmud    | Al'hissi | 2008-06-30   |     1     |

#### Befehl
`spaltenname` geburtsdatum

`Operator` <=

`Wert` 2008-06-30

```
SELECT * FROM schueler WHERE geburtsdatum <= '2008-06-30'
```

#### Ergebnis:

|id| vorname   | nachname | geburtsdatum | klasse_id | 
|--|--------   | -------- | ------------ | :-------: |
|3 | Mahmud    | Al'hissi | 2008-06-30   |     1     |
|4 | Sabrina   |  Otto    | 2007-05-19   |     2     |


#### Befehl
`spaltenname` vorname

`Operator` LIKE

`Wert` Ma%

```
SELECT * FROM schueler WHERE vorname LIKE 'Ma%'
```

#### Ergebnis:

|id| vorname   | nachname | geburtsdatum | klasse_id | 
|--|--------   | -------- | ------------ | :-------: |
|2 | Margot    | Müller   | 2008-11-19   |     2     |
|3 | Mahmud    | Al'hissi | 2008-06-30   |     1     |


#### Befehl
`spaltenname` nachname

`Operator` IN

`Wert` ('Müller', 'Ünül')

```
SELECT * FROM schueler WHERE nachname IN ('Müller', 'Ünül')
```

#### Ergebnis:

|id| vorname   | nachname | geburtsdatum | klasse_id | 
|--|--------   | -------- | ------------ | :-------: |
|2 | Margot    | Müller   | 2008-11-19   |     2     |
|5 | Ayse      | Ünül     | 2008-12-12   |     2     |



---


## Verknüpfungsoperatoren
| Operator| Beschreibung | Beispiel |
| -------- | -------- | ------ |
| AND     | verknüpft zwei Bedingungen mit UND  | nachname = 'Weber' AND klasse_id = '2' | 
| OR    |  verknüpft zwei Bedingungen mit  ODER   | nachname = 'Weber' OR nachname = 'Ünül'  |
| NOT     | invertiert das Ergebnis einer Bedingung     | NOT nachname = 'Weber'  |



---


## Ausgabe mehrfach filtern

```
SELECT * FROM tabellenname 
WHERE spaltenname_1 <Vergleichsoperator_1> <Wert_1>
<Verknüpfungsoperator> spaltenname_2 <Vergleichsperator_2> <Wert_2> 
```



Mit diesem Befehl werden alle Einträge der Tabelle angezeigt, bei welchen das Ergebnis der verknüpften Bedingung wahr ist.

### Beispiele:

#### Befehl
`spaltenname1` klasse_id

`Operator1` =

`Wert1` 1

`spaltenname2` vorname

`Operator2` LIKE

`Wert2` 'Ma%'

```
SELECT * FROM schueler WHERE klasse_id = 1 AND vorname LIKE 'Ma%'
```

#### Ergebnis:
|id| vorname   | nachname | geburtsdatum | klasse_id | 
|--|--------   | -------- | ------------ | :-------: |
|3 | Mahmud    | Al'hissi | 2008-06-30   |     1     |

