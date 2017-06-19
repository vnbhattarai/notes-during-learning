/*
concat() => The concat() method is used to merge two or more arrays.
This method does not change the existing arrays, but instead returns a new array.
*/

var exchanges = [
  [
    { symbol: "XFX", price: 240.22, volume: 23432 },
    { symbol: "TNZ", price: 332.19, volume: 234 }
  ],
  [
    { symbol: "JXJ", price: 120.22, volume: 5323 },
    { symbol: "NYN", price: 88.47, volume: 98275 }
  ]
];

Array.prototype.concatAll = function() {
  var results = [];

  this.forEach(function(subArray) {
    subArray.forEach(function(item) {
      results.push(item);
    });
  });

  return results;
};

var stocks = exchanges.concatAll();

stocks.forEach(function(stock) {
  console.log(JSON.stringify(stock));
});

// Using forEach:

var exchanges = [
  [
    { symbol: "XFX", price: 240.22, volume: 23432 },
    { symbol: "TNZ", price: 332.19, volume: 234 }
  ],
  [
    { symbol: "JXJ", price: 120.22, volume: 5323 },
    { symbol: "NYN", price: 88.47, volume: 98275 }
  ]
];

exchanges.forEach(function(exchange) {
  exchange.forEach(function(stock) {
    console.log(JSON.stringify(stock));
  });
});
