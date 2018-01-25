### Async function with generators

Simple generator to generate numbers one by one:

```js
function* numbers() {
  let index = 1;
  while (true) {
    yield index;
    index = index + 1;
    if (index > 10) {
      break;
    }
  }
}

function main() {
  for (const num of numbers()) {
    console.log(num);
  }
}
main();
```

* for await of loop works as expected, getting a number asynchronously and logging it out.

```js
async function main() {
  for await (const num of numbers()) {
    console.log(num);
  }
}
main();
```

**To summarize, when we want to use async await in generators, we can use for await of to iterate its results.**
