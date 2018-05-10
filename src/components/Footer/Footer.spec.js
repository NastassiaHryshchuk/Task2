import React from 'react';

import Footer from './Footer';
import Logo from '../Logo/Logo';

describe('<Footer />', () => {
  it('should render <Logo /> item', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find(Logo)).to.have.length(1);
  });
});
