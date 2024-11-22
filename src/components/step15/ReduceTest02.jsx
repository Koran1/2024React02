import React, { useReducer, useState } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case "add":
            return state + action.payload;

        case "sub":
            return state - action.payload

        default:
            alert(`Unknown type error : ${action.type}`)

    }
}

function ReduceTest02() {
    const [number, setNumber] = useState(0);
    const [money, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h2>ICT 은행에 오신 것을 환영합니다</h2>
            <p>잔고 : {money}</p>
            <input type='number' value={number}
                onChange={(e) => {
                    const value = parseInt(e.target.value) || 0;
                    setNumber(value < 0 ? 0 : value)
                }}
                step="1000" />

            <button onClick={() => {
                dispatch({ type: "add", payload: parseInt(number) })
                setNumber(0);   // 입력값 초기화
            }}>예금</button>
            <button onClick={() => {
                if (number > money) {
                    alert("잔고 부족!")
                    setNumber(0);
                } else {
                    dispatch({ type: "sub", payload: parseInt(number) })
                    setNumber(0);   // 입력값 초기화
                }
            }}>출금</button>
        </div>
    );
}

export default ReduceTest02;