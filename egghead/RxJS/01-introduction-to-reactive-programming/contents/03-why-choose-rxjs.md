## Takeaway
---

It allows us to specify dynamic behavior of a value completely at the time of declaration.

So, dynamic behavior should be defined only at the time of declaration.

```javascript
console.clear();
var streamA = Rx.Observable.of(3, 4);
var streamB = streamA.map(a => 10 * a);

streamB.subscribe(b => console.log(b));
```
