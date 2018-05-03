import React from 'react';

import Cockpit from './Cockpit';

describe('<Cockpit />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Cockpit />);
  });

  it('renders 2pcs input type="radio" ', () => {
    expect(wrapper.find('input')).to.have.length(2);
  });

  it('renders release date input', () => {
    expect(wrapper.find('input').at(0).prop('value')).to.equal('release date');
  });

  it('renders raiting input', () => {
    expect(wrapper.find('input').at(1).prop('value')).to.equal('raiting');
  });

});

