## Takeaway
---

- We need startup request in order to display before clicking refreshButton
- .merge() => Gives us back an observable with events from either this or that (here startupRequestStream and requestOnRefreshStream)
  merging results in having events from both of these

Code:

```javascript
var refreshButton = document.querySelector('.refresh');

var refreshClickStream = Rx.Observable.fromEvent(refreshButton, 'click');

var startupRequestStream = Rx.Observable.of('https://api.github.com/users');

var requestOnRefreshStream = refreshClickStream
  .map(ev => {
    var randomOffset = Math.floor(Math.random()*500);
    return 'https://api.github.com/users?since=' + randomOffset;
  });

// flatMap is now an alias for mergeMap
// but will work just the same.
var responseStream = startupRequestStream.merge(requestOnRefreshStream)
  .flatMap(requestUrl =>
    Rx.Observable.fromPromise(jQuery.getJSON(requestUrl))
  );

function createSuggestionStream(responseStream) {
  return responseStream.map(listUser =>
    listUser[Math.floor(Math.random()*listUser.length)]
  )
  .startWith(null)
  .merge(refreshClickStream.map(ev => null));
}

var suggestion1Stream = createSuggestionStream(responseStream);
var suggestion2Stream = createSuggestionStream(responseStream);
var suggestion3Stream = createSuggestionStream(responseStream);

// Rendering ---------------------------------------------------
function renderSuggestion(suggestedUser, selector) {
  var suggestionEl = document.querySelector(selector);
  if (suggestedUser === null) {
    suggestionEl.style.visibility = 'hidden';
  } else {
    suggestionEl.style.visibility = 'visible';
    var usernameEl = suggestionEl.querySelector('.username');
    usernameEl.href = suggestedUser.html_url;
    usernameEl.textContent = suggestedUser.login;
    var imgEl = suggestionEl.querySelector('img');
    imgEl.src = "";
    imgEl.src = suggestedUser.avatar_url;
  }
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
