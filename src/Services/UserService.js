import axios from "axios";
export class userService {
  static serverURL = "https://jsonplaceholder.typicode.com/users";

  static getAllUsers() {
    return axios.get(this.serverURL);
  }
}
