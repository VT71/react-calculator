import React from 'react';
import { useDispatch } from 'react-redux';
import {
    setPower,
    deleteAll,
    removeOne,
    setDecimal,
    addOperation,
    calculate,
} from '../store/slices/calculatorSlice';

function OpButton({ operation }) {
    const dispatch = useDispatch();

    let buttonFeature;
    let classN = 'btn operation-btn p-0 w-100 h-100';

    switch (operation) {
        case 'ON/OFF':
            buttonFeature = () => {
                dispatch(setPower());
            };
            classN = 'btn text-center onoff orange-btn p-0 w-100 h-100';
            break;
        case 'C':
            buttonFeature = () => {
                dispatch(deleteAll());
            };
            classN = 'btn text-center orange-btn p-0 w-100 h-100';
            break;
        case '←':
            buttonFeature = () => {
                dispatch(removeOne());
            };
            classN = 'btn text-center orange-btn p-0 w-100 h-100';
            break;
        case '.':
            buttonFeature = () => {
                dispatch(setDecimal());
            };
            classN = 'btn decimal-btn operation-btn text-white p-0 w-100 h-100';
            break;
        case '+':
        case '-':
        case 'x':
        case '÷':
            buttonFeature = () => {
                dispatch(addOperation(operation));
            };
            classN = 'btn operation-btn p-0 w-100 h-100';
            break;
        case '=':
            buttonFeature = () => {
                dispatch(calculate());
            };
            classN = 'btn equal-btn operation-btn text-white p-0 w-100 h-100';
            break;
        default:
            console.log('Operation Button not recognised');
    }

    return (
        <div className='button-container'>
            <button className={classN} onClick={buttonFeature}>
                {operation}
            </button>
        </div>
    );
}

export default OpButton;
