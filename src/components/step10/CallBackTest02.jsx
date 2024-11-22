import React, { useCallback, useEffect, useState } from 'react';

function CallBackTest02() {
    const [number, setNumber] = useState(0);

    // const someFunction = () => {
    //     console.log(`someFunction : number : ${number}`);
    //     return;
    // }

    // useCallBack 은 함수 자체를 저장한다
    const someFunction = useCallback(() => {
        console.log(`someFunction : number : ${number}`);
        return;
    }, [number]);

    useEffect(() => {
        console.log('someFunc가 변경 되었네요')
    }, [someFunction])

    return (
        <div>
            <input type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
            <br />
            <button onClick={() => someFunction(number)}>someFunction 함수 호출</button>
        </div>
    );
}

export default CallBackTest02;