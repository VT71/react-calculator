import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentInput } from '../store/slices/calculatorSlice';

function DigitButton({ digit }) {
    const dispatch = useDispatch();
    let buttonId = '';
    let classN = 'button-container';
    switch (digit) {
        case '0':
            buttonId = 'zero';
            classN += ' zero';
            break;
        case '1':
            buttonId = 'one';
            break;
        case '2':
            buttonId = 'two';
            break;
        case '3':
            buttonId = 'three';
            break;
        case '4':
            buttonId = 'four';
            break;
        case '5':
            buttonId = 'five';
            break;
        case '6':
            buttonId = 'six';
            break;
        case '7':
            buttonId = 'seven';
            break;
        case '8':
            buttonId = 'eight';
            break;
        case '9':
            buttonId = 'nine';
            break;
    }
    return (
        <div className={classN}>
            <button
                id={buttonId}
                className='btn digit-btn text-center text-white p-0 w-100 h-100'
                onClick={() => dispatch(setCurrentInput(digit))}
            >
                {digit}
            </button>
        </div>
    );
}

export default DigitButton;
