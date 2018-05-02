import React from 'react';

import Films from './Films';
import Film from './Film/Film';

describe('<Films />', () => {
  it('should render one <Film /> item', () => {
    const wrapper = mount(<Films films={[
      {
        id: 'xxx',
        image: 'xxx',
        title: 'xxx',
        releasedate: 111,
        genre: 'xxx',
      }]} />);
    expect(wrapper.find(Film)).to.have.length(1);
  });
});
