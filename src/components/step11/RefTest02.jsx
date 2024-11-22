import React, { useRef, useState } from 'react';

function RefTest02() {
    const [render, setRender] = useState(0);
    const countRef = useRef(0);
    let countVar = 0;

    const refPlus = () => {
        countRef.current += 1;
        console.log("refPlus - countRef : ", countRef.current)
    }

    const countVarPlus = () => {
        countVar += 1;
        console.log("countVarPlus - countVar : ", countVar)
    }

    const doRender = () => {
        setRender(render + 1);
        console.log("re-Rendering")
    }

    const printResult = () => {
        console.log(`결과 출력 - countRef : ${countRef.current}, countVar : ${countVar}`)
    }
    return (
        <div>
            <p>Ref : {countRef.current}</p>
            <p>countVar : {countVar}</p>
            <button onClick={refPlus}>Ref 올리기</button>
            <button onClick={countVarPlus}>Var 올리기</button><br />
            <button onClick={doRender}>렌더링 하기</button>
            <button onClick={printResult}>결과출력?</button>
        </div >
    );
}

export default RefTest02;