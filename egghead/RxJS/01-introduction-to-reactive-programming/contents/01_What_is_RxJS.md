# Takeaway

--------------------------------------------------------------------------------

- Reactive Programming is mainly programming with sequence of events happening over time (event streams).
- Whenever an event happens, we can react to it by doing something.
- Items in an array exist in memory immediately unlike event streams in which events might happen and we may not know the items of event streams

--------------------------------------------------------------------------------

# Code:

_The below code is just an example to display sum of the contents of an array after parsing each items to integers_

```javascript
console.clear();

var source = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'];

var result = source
  .map(x => parseInt(x))
  .filter(x => !isNaN(x))
  .reduce((x, y) => x + y);

console.log(result);
```

_The below code has RxJS implementation to the above code_

```javascript
console.clear();

var source = Rx.Observable.interval(400).take(9)
      .map(i => ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'][i]);

var result = source
  .map(x => parseInt(x))
  .filter(x => !isNaN(x))
  .reduce((x, y) => x + y);

result.subscribe(x => console.log(x));
```
