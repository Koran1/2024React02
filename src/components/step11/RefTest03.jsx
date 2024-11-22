import React, { useEffect, useRef, useState } from 'react';

function RefTest03() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const renderCount = useRef(0);

    // 방법 1
    // renderCount.current = renderCount.current + 1;
    // console.log('렌더링 횟수 : ', renderCount.current)

    // 방법 2
    useEffect(() => {
        renderCount.current += 1;
        console.log('렌더링 횟수 : ', renderCount.current)
    });

    return (
        <div>
            <p>State : {count}</p>
            <p>State2 : {count2}</p>
            <button onClick={() => setCount(count + 4)}>State ++++</button>
            <p>렌더링 된 횟수 : {renderCount.current}</p>
            <button onClick={() => setCount2(count2 + 3)}>State2 +++</button>
        </div>
    );
}

export default RefTest03;