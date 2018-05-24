# Unstated connect (`unstated-connect`)
[![Build Status](https://travis-ci.org/goncy/unstated-connect.svg?branch=master)](https://travis-ci.org/goncy/unstated-connect)
[![Coverage Status](https://coveralls.io/repos/github/goncy/unstated-connect/badge.svg?branch=master)](https://coveralls.io/github/goncy/unstated-connect?branch=master)

A simple Redux-like `connect` for `unstated`

## Installation
```sh
npm install --save unstated-connect
```

## Why
Useful when you need to access containers on lifecycle hooks

## How
```jsx
import React, {Component} from "react";
import connect from "unstated-connect";

import jokes from "./containers/jokes";

class App extends Component {
  async componentDidMount() {
    const [jokes] = this.props.containers;

    await [jokes.getJoke()];
  }

  render() {
    const [jokes] = this.props.containers;

    return (
      <Container>
        <header className="center">
          <h1>Chuck norris jokes</h1>
        </header>
        <section>
          {jokes.state.list.map((joke, key) => (
            <div className="card" key={key}>
              {joke}
            </div>
          ))}
        </section>
        <footer onClick={jokes.getJoke} className="center">
          Get joke
        </footer>
      </Container>
    );
  }
}

export default connect([jokes])(App);
```

## License
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
