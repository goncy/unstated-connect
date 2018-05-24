import {Container} from "unstated";

export default class JokesContainer extends Container {
  constructor() {
    super();

    this.state = {
      list: [],
    }
  };

  getJoke() {
    this.setState({list: this.state.list.concat("joke")});
  };
}