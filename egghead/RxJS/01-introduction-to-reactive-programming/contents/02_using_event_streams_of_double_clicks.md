# Takeaway

---

- When we called buffer click stream throughout the whole 250 milliseconds, what it was it waited to 250 milliseconds of event silence to happen on this simple click event stream, and then it accumulated everything from the past into an array.

**Marvel Diagram** ![](https://camo.githubusercontent.com/995c301de2f566db10748042a5a67cc5d9ac45d9/687474703a2f2f692e696d6775722e636f6d2f484d47574e4f352e706e67)

---

# Code:

_This html code is required to be able to select button class anchor tag to render Button_

```html
<div class="header">
  <a href="#" class="button">BUTTON</a>
    <h4>-</h4>
</div>
```


```javascript
var button = document.querySelector('.button');
var label = document.querySelector('h4');

var clickStream = Rx.Observable.fromEvent(button, 'click');

var doubleClickStream = clickStream
  .buffer(() => clickStream.debounce(250))
  .map(arr => arr.length)
  .filter(len => len === 2);

doubleClickStream.subscribe(event => {
  label.textContent = 'double click';
});

doubleClickStream
  .delay(1000)
  .subscribe(suggestion => {
    label.textContent = '-';
  });
```
