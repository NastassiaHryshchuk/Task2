import React from 'react';

import Header from './Header';
import Logo from '../Logo/Logo';

describe('<Header />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('should render <Logo /> item', () => {
    expect(wrapper.find(Logo)).to.have.length(1);
  });

  it('should render TITLE input [type="radio"]', () => {
    expect(wrapper.find('input').at(1).prop('value')).to.equal('title');
  });

  it('should render DIRECTOR input [type="radio"]', () => {
    expect(wrapper.find('input').at(2).prop('value')).to.equal('director');
  });

});
