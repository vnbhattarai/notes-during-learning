/*
The filter() method creates a new array with all elements
that pass the test implemented by the provided function.
*/

//.filter() array method

function getStocksOver(stocks, minPrice) {
  return stocks.filter(function(stock) {
    return stock.price >= minPrice;
  });
}

var expensiveStocks = getStocksOver(
  [
    { symbol: "XFX", price: 240.22, volume: 23432 },
    { symbol: "TNZ", price: 332.19, volume: 234 },
    { symbol: "JXJ", price: 120.22, volume: 5323 }
  ],
  150.0
);

console.log(JSON.stringify(expensiveStocks));

// Using for Each in the case below is same as using filter method above
function getStocksOver(stocks, minPrice) {
  var results = [];

  stocks.forEach(function(stock) {
    if (stock.price >= minPrice) {
      results.push(stock);
    }
  });
  return results;
}

var expensiveStocks = getStocksOver(
  [
    { symbol: "XFX", price: 240.22, volume: 23432 },
    { symbol: "TNZ", price: 332.19, volume: 234 },
    { symbol: "JXJ", price: 120.22, volume: 5323 }
  ],
  150.0
);

console.log(JSON.stringify(expensiveStocks));
