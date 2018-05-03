import React from 'react';

import Film from '../Films/Film/Film';

describe('<Film />', () => {
  it('should render one ancore', () => {
    const wrapper = shallow(<Film />);
    expect(wrapper.find('a').length).to.equal(1);
  });
});
