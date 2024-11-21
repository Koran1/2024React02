import { useEffect, useState } from "react";

function TestEffect03() {
    const [count, setCount] = useState(0);      // useEffect 가 관리
    const [count2, setCount2] = useState(0);    // useEffect 가 관리 X
    const [text, setText] = useState('');       // 입력값 관리 useEffect 가 관리 X

    console.log('component 렌더링 발생');
    useEffect(() => {
        console.log('count 용 useEffect 실행');
    }, [count]);

    return (
        <div>
            <h1>useState 와 useEffect 비교</h1>
            <p>Count (useEffect 가 관리) : {count}</p>
            <button onClick={() => setCount(count + 1)}>클릭</button>
            <br />

            <p>Count2 (useEffect 가 관리 X) : {count2}</p>
            <button onClick={() => setCount2(count2 + 1)}>클릭</button>
            <br />

            <p>텍스트 입력 : {text}</p>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    );
}

export default TestEffect03;