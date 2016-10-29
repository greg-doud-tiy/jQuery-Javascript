# Notes about jQuery & Javascript
- Adding data to a control
```javascript
  var item = $("<p>" + someData + "</p>");
  $('selector').append(item);
```
- HTTP Verbs
  - GET - reading data
  - POST - creating new data
  - PATCH/PUT - updating existing data
  - DELETE - removing data

```javascript
  var item;
  item.data("name","valueForName");
```