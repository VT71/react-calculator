import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from '../store/slices/calculatorSlice';

const store = configureStore({
    reducer: { calculator: calculatorReducer },
});

export default store;
