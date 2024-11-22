import { useEffect, useId, useRef } from "react";

function UseIdTest01() {
    const Id = useId();
    console.log("Id : ", Id)
    // const Age_Id = useId();
    // console.log("Age_Id : ", Age_Id)

    const inputRef = useRef(0);
    const ageRef = useRef(0);

    const getValue = (ref, msg) => {
        const inputValue = ref.current.value;
        alert(`${inputValue} ${msg}`)
        ref.current.value = '';
        ref.current.focus();
    }



    useEffect(() => {
        // 이렇게는 못한다!
        // const id_element = document.querySelector(Id);
        // console.log(id_element)

        const id_element = inputRef.current;
        console.log(id_element)

        const age_element = ageRef.current;
        console.log(age_element)

    }, [])
    return (
        <div>
            <label htmlFor={`${Id}-name`}>이름</label>
            <input id={`${Id}-name`} ref={inputRef} />
            <button onClick={() => getValue(inputRef, '님 환영합니다')}>이름 alert</button>

            {/* 만약 여러개인 경우 */}
            {/* <label htmlFor={Age_Id}>나이</label>
            <input id={Age_Id} ref={ageRef} /> */}

            <label htmlFor={`${Id}-age`}>나이</label>
            <input id={`${Id}-age`} ref={ageRef} />
            <button onClick={() => getValue(ageRef, '세 십니다')}>나이 alert</button>

        </div>
    );
}

export default UseIdTest01;