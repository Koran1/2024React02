import React, { useEffect, useRef, useState } from 'react';

function RefTest04() {
    const [state, setState] = useState(0);
    const [operation, setOperation] = useState('0');
    const btn1 = useRef(0);
    const btn2 = useRef(0);
    const totalCount = useRef(0);

    const clickBtn1 = () => {
        setState(state + 4)
        setOperation(operation + '(+4)')
        btn1.current += 1;
    }
    const clickBtn2 = () => {
        setState(state + 3)
        setOperation(operation + '[+3]')
        btn2.current += 1;
    }

    useEffect(() => {
        totalCount.current += 1
    }, [state])

    return (
        <div>
            <p>State : {state}</p>
            <p>Total Operation : {operation}</p>
            <p>Btn1 횟수 : {btn1.current}</p>
            <p>Btn2 횟수 : {btn2.current}</p>
            <p>총 렌더링 횟수 : {btn1.current + btn2.current + 1}</p>
            <p>총 렌더링 횟수 : {totalCount.current}</p>
            &nbsp;<button onClick={clickBtn1}>Btn1 (+4)</button> &nbsp;
            <button onClick={clickBtn2}>Btn2 (+3)</button>
        </div>
    );
}

export default RefTest04;