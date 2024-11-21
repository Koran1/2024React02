import { useEffect, useState } from "react";

function TestEffect02() {
    const [count, setCount] = useState(5);
    useEffect(() => {
        document.title = `총 ${count} 번 클릭했습니다`
    }, [count]);
    return (
        <div>
            <p>총 {count} 번 출력했습니다.</p>
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    );
}

export default TestEffect02;