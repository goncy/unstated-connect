import React, {Component} from "react";

export default class Jokes extends Component {
  componentDidMount() {
    const [jokes] = this.props.containers;

    jokes.getJoke();
  }

  render() {
    const [jokes] = this.props.containers;

    return (
      <div>
        {jokes.state.list.map((joke, key) => (
          <div key={key} data-test="joke">
            {joke}
          </div>
        ))}
      </div>
    )
  }
};
