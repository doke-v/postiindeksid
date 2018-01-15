**Eesti postiindeksid**
----------------
Postiindeksite päring Omniva andmebaasist.

**Installation**
----------------

    $ npm install postiindeksid

**Usage example**
---------
```javascript
const indeks = require("postiindeksid")
    
indeks("raekoja plats 9", function(err, data) {
    if(!err){
console.log(data[0]) // =>  Eesti Vabariik, Tartu maakond, Tartu linn, Tartu linn, Raekoja plats 9, 51004
    }
    else {
        //... Do something else.
    }
})
```    


**API**
---
```javascript
indeks(address, callback)
``` 
**address**  
*Required*  
Type: `string`  

Text string containing an address or part of it (i.e. "põlva kesk 40").


**callback**  
*Required*  
Type: `function`  

Callback function which returns either error (string format) or data (array format) (error-first callback)


**Licence**
-------
[MIT](http://vjpr.mit-license.org)