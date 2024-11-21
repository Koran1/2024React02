import { useMemo, useState } from "react";

const hardCalc = (num) => {
    console.log("hardCalc 돌리는 중" + num);
    for (let i = 0; i < 9999999; i++) { } // 딜레이 용
    return num + 1000;
}

const easyCalc = (num) => {
    console.log("easyCalc 돌리는 중" + num);
    return num + 1000;
}


function MemoTest04() {
    console.log("component 입니다")
    const [hardNum, setHardNum] = useState(0);
    const hardSum = useMemo(() => {
        return hardCalc(hardNum);
    }, [hardNum])

    const [easyNum, setEasyNum] = useState(0);
    const easySum = useMemo(() => {
        return easyCalc(easyNum);
    }, [easyNum]);

    return (
        <div>
            <h3>계산기</h3>

            <input type="number" value={hardNum} onChange={(e) => setHardNum(parseInt(e.target.value))} />+1000 = {hardSum}
            <input type="number" value={easyNum} onChange={(e) => setEasyNum(parseInt(e.target.value))} />+1000 = {easySum}

        </div>
    );
}
export default MemoTest04;