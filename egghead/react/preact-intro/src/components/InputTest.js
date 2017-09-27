import { h, Component } from "preact";
import linkState from "linkstate";

class InputTest extends Component {
  render(props, { text = "" }) {
    return (
      <div>
        <h1>Input test</h1>
        <input type="text" value={text} onInput={linkState(this, "text")} />
        <pre>
          <code>{JSON.stringify(this.state, null, 2)}</code>
        </pre>
      </div>
    );
  }
}

export default InputTest;
