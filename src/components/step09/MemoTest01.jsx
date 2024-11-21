import { useMemo, useState } from "react";

function MemoTest01() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    console.log('component 렌더링')
    const expensiveValue = useMemo(() => {
        console.log('useMemo 실행됨')
        return count + 1000;
    }, [count])
    return (
        <div>
            <h1>useMemo Example</h1>
            {/* <p>총 {count} 번 클릭</p>
            <button onClick={() => setCount(count + 1)}>클릭</button> */}

            <p>연산값 : {expensiveValue}</p>
            {/* prev = 이전에 가지고 있던 값을 의미한다 */}
            <button onClick={() => setCount((prev) => prev + 1)}>클릭2</button>
            <p>text 내용 : {text}</p>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    );
}

export default MemoTest01;