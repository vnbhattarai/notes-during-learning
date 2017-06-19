/*
The map() method creates a new array with the results of calling
a provided function on every element in the calling array.
*/

// .map() method (async)

function getStockSymbols(stocks) {
  return stocks.map(function(stock) {
    return stock.symbol;
  });
}

var symbols = getStockSymbols([
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 }
]);

console.log(JSON.stringify(symbols));
