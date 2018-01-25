### Promises using Typescript

---

**Takeaways:**

* Promise results either to resolve or reject
* Resolved promise will result to then callback being executed
* On rejection, catch callback are executed
* The new promise in a promise chain is _distinct_ from the original promise
* Fate of second promise is determined by body of first then callback
* Rejection on any subsequent promise in chain of promises will result to
  following promises being skipped and catch handler is called

---

**Code**

```ts
new Promise<number>((res, rej) => {
  res(123);
})
  .then(res => {
    console.log(res);
    // foo.bar;
    return 456;
  })
  .then(res => {
    console.log(res);
    // foo.bar;
    return 789;
  })
  .then(res => {
    console.log(res);
    // foo.bar;
  })
  .catch(err => {
    console.log("ERROR:", err.message);
  });
```
