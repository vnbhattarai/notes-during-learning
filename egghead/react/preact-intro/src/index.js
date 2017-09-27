import { h, render } from "preact";
import App from "./components/App";

const config = {
  urls: {
    user: "https://api.github.com/users/vnbhattarai"
  }
};

render(<App config={config} />, document.getElementById("app"));
