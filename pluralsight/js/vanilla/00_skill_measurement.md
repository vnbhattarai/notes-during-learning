## Following is a list of questions and answer as per Skill Measurement in Pluralsight


### Test 1:

1. What does `"2" + 3 + 4` evaluate to?

  => **'234'**

2. The Math.tan( ) method is used to?

  => **return the tangent of an angle (in radians)**

3. Which of these is NOT a built-in JavaScript type?

  => **Time**

4. Which string prototype method is capable of removing a character from a string?

  => `replace()`

5. Which of the following is NOT a reserved word?

  => `and`

6. What does Object.keys(x) return?

  =>
  **The enumerable properties of x as an array of strings**

7. What is the difference between the following two class implementations? First:

  ```javascript
  function Animal() {
  this.feed = function () {
  }
  }
  ```

  Second:

  ```javascript
  function Animal () {
  }
  Animal.prototype.feed = function () {
  };
  ```

  => **The first class creates a copy of the feed function for every instance; the second shares a single implementation**

8. What is the result of running the following code?

  ```javascript
  function f() {
  'use strict';
  foo = 'bar';
  }
  f();
  ```

  => **It throws an error because foo is not defined.**

9. How would you iterate over the following object?

  ```javascript
  var my_data = {
  a: 'Ape', b: 'Banana', c: 'Citronella'
  };
  ```

  =>

  ```javascript
  for (var key in my_data) {}
  ```

10. What is the type of `null`, according to the `typeof` operator?

  => **"object"**

11. What is the correct method for creating an object instance:

  =>

  ```javascript
  { x: 1, y: 2}
  ```

12. What happens when this code is executed?

  ```javascript
  var a = 0;
  function add() {
  var b = a;
  }
  var c = b;
  ```

  => `ReferenceError`

13. How do you access the second parameter that is passed to this function?

  ```javascript
  function foo (x) {
  }
  foo("first", "second");
  ```

  => `arguments[1]`

14. Which Object method takes a `propertyName` parameter and returns `true` if the object contains an uninherited property with that key?

  => `obj.hasOwnProperty('propertyName');`

15. What is the difference between using call() and apply() to invoke a function with multiple arguments?

  =>**apply() is identical to call(), except apply() requires an array as the second parameter**

16. Which is the proper way to do prototypal inheritance?

  =>

  ```javascript
  function superclass() {this.stuff="stuff";}
  function subclass() {}
  subclass.prototype = new superclass();
  ```

17. Evaluate the following: `undefined + 2;`

  => **NaN**

18. What is JSONP used for?

  => **Cross-domain requests**

19. Given the following, what is the value of x?

  `var x = typeof null;`

  => **"object"**
