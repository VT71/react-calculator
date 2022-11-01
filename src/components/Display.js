import React from 'react';
import { useSelector } from 'react-redux';

function Display() {
    return (
        <div className='display position-relative rounded p-2 w-100'>
            <p>{useSelector((state) => state.calculator.wholeInput)}</p>
            <div id='display'>
                <h2>{useSelector((state) => state.calculator.currentInput)}</h2>
            </div>
        </div>
    );
}

export default Display;
