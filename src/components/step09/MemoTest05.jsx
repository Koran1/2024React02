import { useEffect, useMemo, useState } from "react";

function MemoTest05() {
    console.log('component 렌더링')
    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(false);

    // 1. 기본 자료형의 경우 값이 저장된다
    // const country = isKorea ? '한국' : '외국';
    // useEffect(() => {
    //     console.log('useEffect 호출');
    // }, [country])

    // 2. 객체에 저장
    // const location = {
    //     country: isKorea ? '한국' : '외국'
    // }

    // 3. Memo 활용
    const location = useMemo(() => {
        return {
            country: isKorea ? '한국' : '외국'
        }
    }, [isKorea]);


    useEffect(() => {
        console.log('useEffect 호출');
    }, [location])

    return (
        <div>
            <h2>하루에 몇끼 먹어요?</h2>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} /> 끼
            <hr />
            <h2>어느 나라 사람이신가요?</h2>
            {/* <p>나라 : {country}</p> */}
            <p>나라 : {location.country}</p>
            <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
        </div>
    );
}

export default MemoTest05;