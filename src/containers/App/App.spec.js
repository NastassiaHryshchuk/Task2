import React from 'react';

import App from './App';
import Films from '../../components/Films/Films';

describe('<App />', () => {
  it('should renders the <Films /> item', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Films)).to.have.length(1);
  });
});

