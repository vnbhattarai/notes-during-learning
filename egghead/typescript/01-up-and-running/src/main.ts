import { SocialNetwork } from "./social-networks";

import * as _ from "lodash";

class App implements SocialNetwork {
  title = "Eggheads";

  getUsers() {
    return [{ name: "John" }];
  }
}

console.log(_.isArray(new App().getUsers()));
