import React from 'react';
import {shallow, mount} from 'enzyme';

import HotCold from './hotCold';

describe('<HotCold />', () => {
    it('Renders without crashing', () => {
        shallow(<HotCold />);
    });
});