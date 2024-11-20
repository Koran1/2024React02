import { useState } from 'react';
import './DollarConverter.css'
import DollarInput from './DollarInput';
import DollarChoice from './DollarChoice';


function DollarConverter() {
    const [money, setMoney] = useState(0);
    const [unit, setUnit] = useState('원');
    const convertedMoney = (
        unit === '$' ? (money * 1400).toLocaleString('ko-KR') : (money / 1400).toFixed(3)
    )
    return (
        <div className='dollarConvert'>
            <h2>환율 계산기</h2>
            <p>Result : {convertedMoney} {unit === '$' ? '원' : '$'}</p>
            <DollarInput money={money} unit={unit} setMoney={setMoney} />
            <DollarChoice unit={unit} setUnit={setUnit} />
        </div>
    );
}

export default DollarConverter;