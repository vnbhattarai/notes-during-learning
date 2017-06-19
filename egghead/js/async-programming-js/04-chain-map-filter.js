/*
map => The map() method creates a new array with the results of
calling a provided function on every element in the calling array.

filter => The filter() method creates a new array
with all elements that pass the test implemented by the provided function.
It accepts predicate function (either true or false).

Both methods make new array
*/

// Chaining .map() and .filter()

var stocks = [
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 }
];

var filteredStockSymbols = stocks
  .filter(function(stock) {
    return stock.price >= 150.0;
  })
  .map(function(stock) {
    return stock.symbol;
  });

filteredStockSymbols.forEach(function(symbol) {
  console.log(symbol);
});
