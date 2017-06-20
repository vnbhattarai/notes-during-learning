// Mapping over observable, we get observable. Same with filter

// Observable are lazy
/*
The way Observable works is it waits until you call forEach to have any side effects,
to carry out any side effects whatsoever. What we've done is we've really just built
an Observable that promises that when you will call forEach on it,
it will hook up an event listener.
 */

var Observable = Rx.Observable;

var button = document.getElementById("button");
/*
var handler = function(e) {
  alert('clicked');
  button.removeEventListener('click', handler);
};

button.addEventListener('click', handler);
*/

var clicks = Observable.fromEvent(button, "click");

var points = clicks.map(function(e) {
  return { x: e.clientX, y: e.clientY };
});

var subscription = points.forEach(
  function onNext(point) {
    alert("clicked:" + JSON.stringify(point));
    subscription.dispose();
  },
  function onError(error) {
    console.log("ERROR!");
  },
  function onCompleted() {
    console.log("done");
  }
);
