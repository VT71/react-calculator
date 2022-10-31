import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentInput } from '../store/slices/calculatorSlice';

function DigitButton({ digit }) {
    const dispatch = useDispatch();
    let classN = 'button-container';
    if (digit === '0') {
        classN += ' zero';
    }
    return (
        <div className={classN}>
            <button
                className='btn digit-btn text-center text-white p-0 w-100 h-100'
                onClick={() => dispatch(setCurrentInput(digit))}
            >
                {digit}
            </button>
        </div>
    );
}

export default DigitButton;
