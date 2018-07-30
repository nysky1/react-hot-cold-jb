import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessInput from './guess-input';

describe('<GuessInput />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessInput />);
    });
    it('Should fire the onGuess callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessInput onGuess={callback} />);
        const value = '22';

        wrapper.find('input[type="number"]').instance().value = value;

        wrapper.find('form').simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
    });
    it('Should fire the onGuess callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessInput onGuess={callback} />);
        const value = '';

        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).not.toHaveBeenCalled();
    });
    it('Should reset the input form when submitted', () => {
        const wrapper = mount(<GuessInput />);

        const guessText = wrapper.find('input[type="number"]').instance().value;
        wrapper.simulate('submit');
        expect(guessText).toEqual('');
    });
});