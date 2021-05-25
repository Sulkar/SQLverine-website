---
sidebar_position: 4
---
# ORDER

<img
  src={require('./assets/Sortieren.png').default}  
  style={{width:200}}
/>

## Ausgabe sortieren
```
SELECT * FROM tabellenname ORDER BY spaltenname ASC
```
Mit diesem Befehl wird das Ergebnis in aufsteigender (ASC) oder absteigender (DESC) Reihenfolge angezeigt.

### Beispiele:

#### Befehl


```
SELECT * FROM schueler ORDER BY geburtsdatum ASC
```

#### Ergebnis:

|id| vorname   | nachname | geburtsdatum | klasse_id | 
|--|--------   | -------- | ------------ | :-------: |
|4 | Sabrina   |  Otto    | 2007-05-19   |     2     |
|3 | Mahmud    | Al'hissi | 2008-06-30   |     1     |
|2 | Margot    | Müller   | 2008-11-19   |     2     |
|5 | Ayse      | Ünül     | 2008-12-12   |     2     |
|1 | Paul      | Weber    | 2009-07-12   |     1     |

#### Befehl


```
SELECT * FROM schueler ORDER BY geburtsdatum DESC
```

#### Ergebnis:

|id| vorname   | nachname | geburtsdatum | klasse_id | 
|--|--------   | -------- | ------------ | :-------: |
|1 | Paul      | Weber    | 2009-07-12   |     1     |
|5 | Ayse      | Ünül     | 2008-12-12   |     2     |
|2 | Margot    | Müller   | 2008-11-19   |     2     |
|3 | Mahmud    | Al'hissi | 2008-06-30   |     1     |
|4 | Sabrina   |  Otto    | 2007-05-19   |     2     |