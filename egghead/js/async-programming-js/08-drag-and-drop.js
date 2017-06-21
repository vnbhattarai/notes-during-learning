// Using map and concatAll

/*
Using map and filter methods on arrays are inefficient in comparison to using with observable
as observable do not store items in memory

We need to try to prevent nesting of forEach and use concatAll to flatten collection whenever
we are using forEach
*/
var Observable = Rx.Observable;

var parent = document.getElementById("parent");
var widget = document.getElementById("widget");

var mouseDowns = Observable.fromEvent(widget, "mousedown");
var parentMouseMoves = Observable.fromEvent(parent, "mousemove");
var parentMouseUps = Observable.fromEvent(parent, "mouseup");

// var stocks =
//   exchanges.
//     map(function(exchange) {
//       return exchange.stocks.
//         filter(function(stock) { return stock.price >= 100.00; });
//     }).
//     concatAll();

var drags = mouseDowns
  .map(function(e) {
    return parentMouseMoves.takeUntil(parentMouseUps);
  })
  .concatAll();

var subscription = drags.forEach(
  function onNext(e) {
    widget.style.left = e.clientX + "px";
    widget.style.top = e.clientY + "px";
  },
  // Both onError and onCompeted are optional here as they won't come through
  function onError(error) {
    console.log("error");
  },
  function onCompleted() {}
);

/*
HTMl code for this part:
  <div id="parent" style="width:200px; height:200px; background-color:red">
  <div id="widget" style="position:absolute;width:150px;background-color:blue;color:white">Drag me</div>
*/
