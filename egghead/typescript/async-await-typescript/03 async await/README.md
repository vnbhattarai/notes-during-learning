### Async functions with await operator

Adding async keyword makes a function async

#### Three ways of makes aync functions:

```js
// Using simple function
async function foo() {}

// Arrow Function
const bar = async () => {};

// Class Method
class Baz {
  async qux() {}
}
```

---

If a promise takes some time to settle in its fate, the execution at the await operator pauses till the fate is determined.

```js
async function foo() {
  console.log("Waiting 5 seconds");
  await new Promise(res => setTimeout(res, 5000));
  console.log("Done waiting!");
}
foo();
```
