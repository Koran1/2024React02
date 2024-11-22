import { useCallback, useState } from "react";
import Light from "./Light";

function CallBackTest01() {
    console.log('component 렌더링')
    const [bedOn, setBedOn] = useState(false);
    const [kitchenOn, setKitchenOn] = useState(false);
    const [bathOn, setBathOn] = useState(false);

    // // 해당 부분을 useCallBack으로 해보자.
    // const toggleBed = (() => setBedOn(!bedOn));
    // const toggleKitchen = (() => setKitchenOn(!kitchenOn));
    // const toggleBath = (() => setBathOn(!bathOn));

    const toggleBed = useCallback(() => setBedOn(!bedOn), [bedOn]);
    const toggleKitchen = useCallback(() => setKitchenOn(!kitchenOn), [kitchenOn]);
    const toggleBath = useCallback(() => setBathOn(!bathOn), [bathOn]);


    return (
        <div>
            {/* Light 는 자식 컴포넌트 */}
            <Light room="침실" on={bedOn} toggle={toggleBed} />
            <Light room="주방" on={kitchenOn} toggle={toggleKitchen} />
            <Light room="욕실" on={bathOn} toggle={toggleBath} />
        </div>
    );
}

export default CallBackTest01;