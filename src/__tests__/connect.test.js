import React from "react";
import {mount} from 'enzyme';
import {Provider} from "unstated"

import connect from "../connect"

import Jokes from "../helpers/Jokes"
import JokesContainer from "../helpers/jokes-container"

describe('connect', () => {
  const ConnectedJokes = connect([JokesContainer])(Jokes)
  const wrapper = mount(
    <Provider>
      <ConnectedJokes />
    </Provider>
  );

  it('Should have a joke after mount', () => {
    wrapper.update();
    expect(wrapper.find('[data-test="joke"]').length).toBe(1);
  });
});