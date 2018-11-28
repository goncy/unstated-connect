# Unstated connect (`unstated-connect`)
[![Build Status](https://travis-ci.org/goncy/unstated-connect.svg?branch=master)](https://travis-ci.org/goncy/unstated-connect)
[![Coverage Status](https://coveralls.io/repos/github/goncy/unstated-connect/badge.svg?branch=master)](https://coveralls.io/github/goncy/unstated-connect?branch=master)

A simple Redux-like `connect` for `unstated`. Useful when you need to access containers on lifecycle hooks.

## Installation
```sh
yarn add unstated-connect
// or
npm install --save unstated-connect
```

## How to use
```jsx
import React, { Component } from "react";
import connect from "unstated-connect";

import GlobalState from "./store/GlobalState";

class App extends Component {
  handleButtonClick = () => {
    const { GlobalState } = this.props.containers;

    GlobalState.addTodo('Hello world');
  }
  
  handleDeleteTodo = (index) => {
    const { GlobalState } = this.props.containers;

    GlobalState.removeTodo(index);
  }

  render() {
    const { GlobalState: { state: { todos } } } = this.props.containers;

    return (
      <Container>
         <Title>Your todos:</Title>
         <ul>{todos.map((item, index) => (
           <li key={index} onClick={() => this.handleDeleteTodo(index)}>{item}</li>
         ))}</ul>
         <button onClick={this.handleButtonClick}>Add new todo</button>
      </Container>
    );
  }
}

export default connect([GlobalState])(App);
```

The component can now access the state of the container, change it and automatically re-render after container changes.

## License

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.