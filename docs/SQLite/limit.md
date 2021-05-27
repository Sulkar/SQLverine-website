---
sidebar_position: 5
---
# LIMIT

<img
  src={require('./assets/Limit.png').default}  
  style={{width:200}}
/>

## Ausgabe einschränken
```
SELECT * FROM tabellenname LIMIT <Anzahl>
```
Mit diesem Befehl wird nur die angegebene Anzahl von Ergebnissen angezeigt.

### Beispiele:

#### Befehl


```
SELECT * FROM schueler LIMIT 2
```

#### Ergebnis:

|id| vorname   | nachname | geburtsdatum | klasse_id | 
|--|--------   | -------- | ------------ | :-------: |
|1 | Paul      | Weber    | 2009-07-12   |     1     |
|2 | Margot    | Müller   | 2008-11-19   |     2     |



---


<img
  src={require('./assets/Offset.png').default}  
  style={{width:200}}
/>

## Eine Anzahl von Ergebnissen überspringen
```
SELECT * FROM tabellenname LIMIT <Anzahl> OFFSET <Anzahl>
```
Mit diesem Befehl wird die angegebene Anzahl (LIMIT) der Ergebnisse ab dem angegeben Wert (OFFSET) angezeigt.
### Beispiele:

#### Befehl


```
SELECT * FROM schueler LIMIT 2 OFFSET 2
```

#### Ergebnis:

|id| vorname   | nachname | geburtsdatum | klasse_id | 
|--|--------   | -------- | ------------ | :-------: |
|3 | Mahmud    | Al'hissi | 2008-06-30   |     1     |
|4 | Sabrina   |  Otto    | 2007-05-19   |     2     |


