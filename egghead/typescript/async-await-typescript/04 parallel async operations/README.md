### Parallel and serial execution using async / await

---

**Takeaways:**

* We simply loop through the handles one by one with a simple `forof` loop
* We await the result of each `handle` with `getUserDetails`.
* Once the result comes back, we simply log it out.

---

**Promise.all:**

Promise.all allows us to run a bunch of operations in parallel and wait for all of them to resolve.

> `Promise.all` takes an array of promises and returns a new promise that resolves with an array of resolved values for each of the promise.

```js
// Inside main()

 const allPromises = handles.map(getUserDetails);
 const combinedPromise = Promise.all(allPromises);
 const details = await combinedPromise;
 for (const item of details) {
    console.log(`
  Name: ${item.name}
  Location: ${item.location}
    `);
  }
```

---

**Promise.race**

* Takes an array of promises just like Promise.all and returns a new promise.
* The fate of this new promise is equal to the fate of the first promise that resolves or rejects.
* Here we simply log out the result of the first promise that wins.

```js
 const resultOfPromiseThatWins = Promise.race(allPromises);
 const item = await resultOfPromiseThatWins;
 console.log(`
 Name: ${item.name}
 Location: ${item.location}
    `)
```
