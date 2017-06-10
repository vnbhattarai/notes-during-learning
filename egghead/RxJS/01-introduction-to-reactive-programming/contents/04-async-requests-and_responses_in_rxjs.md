## Takeaway
---

responseStream will be created from the promise

Promise is in a way simplified version of event stream and can have only one of the either value: resolved value or an error.

Observable go beyond promise as they can have multiple events.

Here, flatMap flattens the meta-stream that we got as output after it maps.

flatMap is similar to Promise's .then

 Code:

```javascript
var requestStream = Rx.Observable.of('https://api.github.com/users');

// flatMap is now an alias for mergeMap
// but will work just the same.
var responseStream = requestStream
  .flatMap(requestUrl =>
    Rx.Observable.fromPromise(jQuery.getJSON(requestUrl))
  );

responseStream.subscribe(response => {
  console.log(response);
});
```
