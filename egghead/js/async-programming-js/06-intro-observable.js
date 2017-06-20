/*

* Modelling an asynchronous operation as an array is impossible
* We can model such operation as a collection using an Observable

* Array => Data is stored in memory

  Observable => No data is stored in memory, and the items arrive over time, asynchronously,
                An Observable is a collection of items that arrive over time.

*/

// Callbacks in Observable:

/*
  There are actually three callbacks that are passed to an Observable.

  The first one is called the onNext callback, because it receives the next data that arrives.

  The next one is called the onError callback, because it receives any error that arrives.

  There's a third callback called onCompleted, and it accepts no arguments.
  It just gets invoked when the Observable's complete.

*/

// Observable : Rx Js

var Observable = Rx.Observable;

var button = document.getElementById("button");
/*
var handler = function(e) {
  alert('clicked');
  button.removeEventListener('click', handler);
};

button.addEventListener('click', handler);
*/

// when we call forEach on an Observable we get a subscription object out.

// Working with asynchronous collection
var clicks = Observable.fromEvent(button, "click");

var subscription = clicks.forEach(
  function onNext(e) {
    alert("clicked");
    subscription.dispose(); // Stop listening for event
  },
  function onError(error) {
    console.log("ERROR!");
  },
  function onCompleted() {
    console.log("done");
  }
);

// Working with synchronous collection    //Optional
try {
  [1, 2, 3].forEach(function(i) {
    console.log(i);
  });
  console.log("done");
} catch (e) {
  console.log("ERROR");
}
