import React from 'react';

import Cockpit from './Cockpit';

describe('<Cockpit />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Cockpit />);
  });

  it('should render 2pcs input [type="radio"]', () => {
    expect(wrapper.find('input')).to.have.length(2);
  });

  it('should render release date input [type="radio"]', () => {
    expect(wrapper.find('input').at(0).prop('value')).to.equal('release date');
  });

  it('should render raiting input [type="radio"]', () => {
    expect(wrapper.find('input').at(1).prop('value')).to.equal('raiting');
  });
});

