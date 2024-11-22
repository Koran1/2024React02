import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case "add":
            return state + action.payload
        case "sub":
            return state - action.payload
        case "reset":
            return 0
        default:
            throw new Error(`Unknown type error : ${action.type}`)

    }
}

function ReduceTest01() {
    const [number, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <p>Count : {number}</p>
            {/* dispatch 들을 구분하기 위해서 type이 존재한다! action이나 요청에 포함되는 데이터 = payload*/}
            <button onClick={() => dispatch({ type: "add", payload: 1 })}>+</button>
            <button onClick={() => dispatch({ type: "sub", payload: 1 })}>-</button>
            <button onClick={() => dispatch({ type: "reset", payload: 1 })}>Reset</button>

        </div>
    );
}

export default ReduceTest01;