import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    power: true,
    currentInput: '0',
    wholeInput: '',
    calculated: false,
    result: '',
};

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        setPower(state) {
            const buttons = document.getElementsByClassName('btn');
            if (state.power) {
                for (let i = 0; i < buttons.length; i++) {
                    if (!buttons[i].className.includes('onoff')) {
                        buttons[i].className += ' disabled';
                    }
                }
                state.currentInput = '';
                state.wholeInput = '';
                state.result = '';
                state.calculated = false;
            } else {
                for (let i = 0; i < buttons.length; i++) {
                    if (!buttons[i].className.includes('onoff')) {
                        buttons[i].className = buttons[i].className.replace(
                            ' disabled',
                            ''
                        );
                    }
                }
                state.currentInput = '0';
            }
            state.power = !state.power;
        },
        deleteAll(state) {
            state.calculated = false;
            state.result = '';
            state.currentInput = '0';
            state.wholeInput = '';
        },
        removeOne(state) {
            if (state.currentInput.length === 1) {
                if (
                    state.currentInput === '+' ||
                    state.currentInput === '-' ||
                    state.currentInput === 'x' ||
                    state.currentInput === '÷'
                ) {
                    state.wholeInput = state.wholeInput.slice(0, -1);
                    state.currentInput = state.wholeInput;
                } else {
                    state.currentInput = '0';
                    if (
                        state.wholeInput.charAt(state.wholeInput.length - 2) ===
                        '='
                    ) {
                        state.calculated = false;
                        state.wholeInput = state.wholeInput.slice(0, -2);
                        state.result = '';
                    } else if (
                        state.wholeInput.charAt(state.wholeInput.length - 2) ===
                            '-' ||
                        state.wholeInput.charAt(state.wholeInput.length - 2) ===
                            '+'
                    ) {
                        state.calculated = false;
                        state.wholeInput = state.wholeInput.slice(0, -3);
                        state.result = '';
                    } else {
                        state.wholeInput = state.wholeInput.slice(0, -1);
                    }
                }
            } else {
                state.currentInput = state.currentInput.slice(0, -1);
                if (
                    state.wholeInput.charAt(state.wholeInput.length - 2) === '='
                ) {
                    state.calculated = false;
                    state.wholeInput = state.wholeInput.slice(0, -2);
                    state.result = '';
                } else if (
                    state.wholeInput.charAt(state.wholeInput.length - 2) ===
                        '-' ||
                    state.wholeInput.charAt(state.wholeInput.length - 2) === '+'
                ) {
                    state.calculated = false;
                    state.wholeInput = state.wholeInput.slice(0, -3);
                    state.currentInput = '0';
                    state.result = '';
                } else {
                    state.wholeInput = state.wholeInput.slice(0, -1);
                }
            }
        },
        setCurrentInput(state, action) {
            if (state.calculated) {
                state.currentInput = action.payload;
                state.wholeInput = action.payload;
            } else {
                switch (state.currentInput) {
                    case '+':
                    case '-':
                    case 'x':
                    case '÷':
                    case '0':
                        if (action.payload === '0') {
                            state.currentInput = '0';
                            if (state.wholeInput !== '') {
                                if (
                                    state.wholeInput.charAt(
                                        state.wholeInput.length - 1
                                    ) !== '0'
                                ) {
                                    state.wholeInput = state.wholeInput + '0';
                                }
                            } else {
                                state.wholeInput = '0';
                            }
                        } else if (action.payload === '.') {
                            state.currentInput =
                                state.currentInput + action.payload;
                            state.wholeInput =
                                state.wholeInput + '0' + action.payload;
                        } else {
                            state.currentInput = action.payload;
                            state.wholeInput =
                                state.wholeInput + action.payload;
                        }
                        break;
                    default:
                        state.currentInput =
                            state.currentInput + action.payload;
                        state.wholeInput = state.wholeInput + action.payload;
                }
            }
        },
        setDecimal(state) {
            if (
                state.currentInput === '+' ||
                state.currentInput === '-' ||
                state.currentInput === 'x' ||
                state.currentInput === '÷'
            ) {
                state.currentInput = '0.';
                state.wholeInput = state.wholeInput + state.currentInput;
            } else if (!state.currentInput.includes('.') && !state.calculated) {
                state.currentInput = state.currentInput + '.';
                state.wholeInput = state.wholeInput + '.';
            } else if (state.calculated && !state.currentInput.includes('.')) {
                state.currentInput = state.currentInput + '.';
                state.wholeInput = state.currentInput;
                state.result = '';
                state.calculated = false;
            }
        },
        addOperation(state, action) {
            if (state.wholeInput !== '' && state.wholeInput !== '-') {
                switch (state.wholeInput.charAt(state.wholeInput.length - 1)) {
                    case '+':
                    case '-':
                    case 'x':
                    case '÷':
                        if (
                            action.payload === '-' &&
                            state.wholeInput.charAt(
                                state.wholeInput.length - 2
                            ) !== '+' &&
                            state.wholeInput.charAt(
                                state.wholeInput.length - 2
                            ) !== '-' &&
                            state.wholeInput.charAt(
                                state.wholeInput.length - 2
                            ) !== 'x' &&
                            state.wholeInput.charAt(
                                state.wholeInput.length - 2
                            ) !== '÷'
                        ) {
                            state.currentInput = action.payload;
                            state.wholeInput =
                                state.wholeInput + action.payload;
                        } else {
                            if (
                                state.wholeInput.charAt(
                                    state.wholeInput.length - 2
                                ) !== '+' &&
                                state.wholeInput.charAt(
                                    state.wholeInput.length - 2
                                ) !== '-' &&
                                state.wholeInput.charAt(
                                    state.wholeInput.length - 2
                                ) !== 'x' &&
                                state.wholeInput.charAt(
                                    state.wholeInput.length - 2
                                ) !== '÷'
                            ) {
                                console.log('2');
                                state.currentInput = action.payload;
                                state.wholeInput =
                                    state.wholeInput.slice(0, -1) +
                                    action.payload;
                            } else {
                                if (
                                    state.wholeInput.charAt(
                                        state.wholeInput.length - 2
                                    ) !== '-' &&
                                    action.payload === '-'
                                ) {
                                    state.currentInput =
                                        state.wholeInput.charAt(
                                            state.wholeInput.length - 2
                                        );
                                    state.wholeInput = state.wholeInput.slice(
                                        0,
                                        -1
                                    );
                                } else {
                                    state.currentInput = action.payload;
                                    state.wholeInput =
                                        state.wholeInput.slice(0, -2) +
                                        action.payload;
                                }
                            }
                        }

                        break;
                    default:
                        if (state.calculated) {
                            state.currentInput = action.payload;
                            state.wholeInput = state.result + action.payload;
                            state.result = '';
                            state.calculated = false;
                        } else {
                            state.currentInput = action.payload;
                            state.wholeInput =
                                state.wholeInput + action.payload;
                        }
                }
            } else {
                if (action.payload === '-') {
                    state.currentInput = action.payload;
                    state.wholeInput = action.payload;
                } else if (action.payload === '+' && state.wholeInput === '-') {
                    state.currentInput = '0';
                    state.wholeInput = '';
                }
            }
        },
        calculate(state) {
            if (!state.calculated) {
                let calculation = state.wholeInput.replaceAll('x', '*');
                calculation = calculation.replaceAll('÷', '/');
                calculation = calculation.replaceAll('--', '+');
                console.log('CALCULATION: ' + calculation);
                if (
                    state.currentInput === '+' ||
                    state.currentInput === '-' ||
                    state.currentInput === 'x' ||
                    state.currentInput === '÷'
                ) {
                    state.result = parseFloat(
                        Function(
                            `"use strict"; return(${calculation.slice(0, -1)})`
                        )().toFixed(4)
                    ).toString();
                    state.wholeInput =
                        state.wholeInput.slice(0, -1) + '=' + state.result;
                    state.currentInput = state.result;
                } else {
                    const result = parseFloat(
                        Function(
                            `"use strict"; return(${calculation})`
                        )().toFixed(4)
                    );
                    state.currentInput = result.toString();
                    state.wholeInput =
                        state.wholeInput + '=' + result.toString();
                    state.result = result.toString();
                }
                state.calculated = true;
            } else {
                state.wholeInput =
                    state.wholeInput.match(/.+?(?==)/).toString() +
                    '=' +
                    state.result;
                console.log('SEPARATE FORMULA: ' + state.wholeInput);
                state.currentInput = state.result;
            }
        },
    },
});

export const {
    setPower,
    deleteAll,
    removeOne,
    setCurrentInput,
    setDecimal,
    addOperation,
    calculate,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
