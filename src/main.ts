import { SocialNetwork } from "./social-networks";

class App implements SocialNetwork {
  title = "Eggheads";

  getUsers() {
    return [{ name: "John" }];
  }
}
