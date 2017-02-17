/* eslint-disable */

import { observable, when, action } from "mobx";
import axios from "axios";
import { fromPromise } from "mobx-utils";

const fetchResult = fromPromise(
  axios.get("http://jsonplaceholder.typicode.com/users")
);

export default class Store {
  @observable counter = 0;

  @observable users = [];

  @action increaseCounter() {
    this.counter += 1;
  }
  @action decreaseCounter() {
    this.counter -= 1;
  }
  @action fetch() {
    let fetchResult = fromPromise(
      axios.get("http://jsonplaceholder.typicode.com/users")
    );

    // combine with when..
    when(() => fetchResult.state !== "pending", () => {
      console.log("Got it!");
      this.users = fetchResult.value.data;
    });
  }
}
