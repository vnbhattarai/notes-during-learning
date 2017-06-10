## Takeaway
---

- Event stream by themselves do not do anything; We need to add either event listener or subscribe
- One stream for each user in our case

In our case:
- The suggestion one stream got its data from the response stream. We just subscribe to that suggestion one stream and we render this to the DOM.

Code:

```javascript
var refreshButton = document.querySelector('.refresh');

var requestStream = Rx.Observable.of('https://api.github.com/users');

// flatMap is now an alias for mergeMap
// but will work just the same.
var responseStream = requestStream
  .flatMap(requestUrl =>
    Rx.Observable.fromPromise(jQuery.getJSON(requestUrl))
  );

function createSuggestionStream(responseStream) {
  return responseStream.map(listUser =>
    listUser[Math.floor(Math.random()*listUser.length)]
  );
}

var suggestion1Stream = createSuggestionStream(responseStream);
var suggestion2Stream = createSuggestionStream(responseStream);
var suggestion3Stream = createSuggestionStream(responseStream);

function renderSuggestion(userData, selector) {
  var element = document.querySelector(selector);
  var usernameEl = element.querySelector('.username');
  usernameEl.href = userData.html_url;
  usernameEl.textContent = userData.login;
  var imgEl = element.querySelector('img');
  imgEl.src = userData.avatar_url;
}

suggestion1Stream.subscribe(user => {
  renderSuggestion(user, '.suggestion1');
});

suggestion2Stream.subscribe(user => {
  renderSuggestion(user, '.suggestion2');
});

suggestion3Stream.subscribe(user => {
  renderSuggestion(user, '.suggestion3');
});

```

```html
<body>
<div class="container">
    <div class="header">
         <h3>Who to follow</h3><a href="#" class="refresh">Refresh</a>
    </div>
    <ul class="suggestions">
        <li class="suggestion1">
            <img />
            <a href="#" target="_blank" class="username">this will not be displayed</a>
            <a href="#" class="close close1">x</a>
        </li>
        <li class="suggestion2">
            <img />
            <a href="#" target="_blank" class="username">neither this</a>
            <a href="#" class="close close2">x</a>
        </li>
        <li class="suggestion3">
            <img />
            <a href="#" target="_blank" class="username">nor this</a>
            <a href="#" class="close close3">x</a>
        </li>
    </ul>
</div>
</body>
```
```css
body {
    font-family: sans-serif;
    padding: 10px;
}
h3 {
    font-weight: bold;
    display: inline-block;
  padding: 0;
  margin: 0;
}
.refresh {
    font-size: 80%;
    margin-left: 10px;
}
.header {
    background: #ECECEC;
    padding: 5px;
}
.suggestions {
    border: 2px solid #ECECEC;
}
li {
    padding: 5px;
}
li img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
}
li .username, li .close {
    display: inline-block;
    position: relative;
    bottom: 15px;
    left: 5px;
}
```
