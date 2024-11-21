import { useState } from "react";

const hardCalc = (num) => {
    console.log("hardCalc 돌리는 중" + num);
    // for (let i = 0; i < 99999; i++) { } // 딜레이 용
    return num + 1000;
}


function MemoTest03() {
    console.log("component 입니다")
    const [hardNum, setHardNum] = useState(0);
    const hardSum = hardCalc(hardNum);

    return (
        <div>
            <h3>계산기</h3>

            <input type="number" value={hardNum} onChange={(e) => setHardNum(parseInt(e.target.value))} />+1000 = {hardSum}

        </div>
    );
}
export default MemoTest03;