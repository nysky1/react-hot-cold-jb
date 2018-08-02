import React from 'react';
import {shallow} from 'enzyme';

import {HotCold} from './hotCold';

describe('<HotCold />', () => {
    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<HotCold dispatch={dispatch} />);
    });
});