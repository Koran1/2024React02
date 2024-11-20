import { useState } from 'react';
import TempChoice from './TempChoice';
import './TempConverter.css'
import TempInput from './TempInput';

function TempConverter() {
    const [unit, setUnit] = useState('Celsius');
    const [value, setValue] = useState();
    const convertedTmp = unit === 'Celsius'
        ? (value * 9 / 5 + 32).toFixed(1)
        : ((value - 32) * 5 / 9).toFixed(1)

    return (
        <div className='tempConvert'>
            <h2>Temperature Converter</h2>
            <p>Temperature : {value ? convertedTmp : '--'}
                {unit === "Celsius" ? '°F' : '°C'}
            </p>
            <TempInput value={value} unit={unit} onChangeValue={setValue} />
            <TempChoice unit={unit} onChangeUnit={setUnit} />

        </div>
    );
}

export default TempConverter;