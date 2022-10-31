import './App.css';
import DigitButton from './components/DigitButton';
import Display from './components/Display';
import OpButton from './components/OpButton';

function App() {
    return (
        <div className='calculator-container vw-100 vh-100 d-flex flex-column justify-content-center align-items-center'>
            <div className='calculator mx-auto rounded mt-3'>
                <div className='top-container py-3 px-3 w-100 d-flex align-items-center rounded-top'>
                    <Display />
                </div>
                <div className='bottom-container w-100'>
                    <div className='buttons-container px-3 py-2 w-100 h-100'>
                        <OpButton operation='ON/OFF' />
                        <OpButton operation='C' />
                        <OpButton operation='←' />
                        <OpButton operation='÷' />

                        <DigitButton digit='7' />
                        <DigitButton digit='8' />
                        <DigitButton digit='9' />

                        <OpButton operation='x' />

                        <DigitButton digit='4' />
                        <DigitButton digit='5' />
                        <DigitButton digit='6' />

                        <OpButton operation='-' />

                        <DigitButton digit='1' />
                        <DigitButton digit='2' />
                        <DigitButton digit='3' />

                        <OpButton operation='+' />

                        <DigitButton digit='0' />

                        <OpButton operation='.' />
                        <OpButton operation='=' />
                    </div>
                </div>
            </div>
            <h1 className='main-title m-3'>
                Created by <span className='name'>Victor Toma</span>
            </h1>
        </div>
    );
}

export default App;
