import React, { useRef, useState } from 'react';

function RefTest01() {
    const [count, setCount] = useState(0);
    const statePlus = () => {
        setCount(count + 1)
        // 1줄이면 return 생략 가능!
    }

    const countRef = useRef(0);
    console.log("ref 밖 (re-rendering O) count : ", count, "  countRef : ", countRef.current);

    const refPlus = () => {
        countRef.current = countRef.current + 1;
        console.log("ref 안 (re-rendering X) count : ", count, "  countRef : ", countRef.current);
    }

    return (
        <div>
            <p>State : {count}</p>
            <p>Ref : {countRef.current}</p>
            <button onClick={() => setCount(count + 1)}>State 증가</button>
            <button onClick={statePlus}>State 증가2</button><br />
            <button onClick={refPlus}>Ref 증가2</button>
        </div >
    );
}

export default RefTest01;