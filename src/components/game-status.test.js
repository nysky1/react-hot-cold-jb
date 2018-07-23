import React from 'react';
import { shallow, mount } from 'enzyme';

import GameStatus from './game-status';

describe('<GameStatus />', () => {
    it('Renders the GameStatus section ', () => {
        const statusToCheck = 'Quidproquo'
        const wrapper = shallow(<GameStatus gameStatus={statusToCheck} />);
        expect(wrapper.text()).toEqual(statusToCheck);
    });
}); 