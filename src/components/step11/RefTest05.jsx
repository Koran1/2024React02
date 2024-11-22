import React, { useEffect, useRef } from 'react';

function RefTest05() {
    const inputRef = useRef();

    // 맨 처음 한번만 실행
    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const login = () => {
        const inputValue = inputRef.current.value;
        alert(`${inputValue} 님 환영합니다.`)
        inputRef.current.value = '';
        inputRef.current.focus();
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') login();
    }
    return (
        <div>
            <input type='text' placeholder='userName' ref={inputRef} onKeyDown={handleKeyDown} />
            <button onClick={login}>로그인</button>
        </div>
    );
}

export default RefTest05;