import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessHistory from './guess-history';

describe('<GuessHistory />', () => {
    it('Renders the GuessList section ', () => {
        const wrapper = shallow(<GuessHistory guessHistory={[1, 2, 3]} />);
        expect(wrapper.text()).toEqual('123');
    });
}); 