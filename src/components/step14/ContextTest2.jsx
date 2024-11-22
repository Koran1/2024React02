import React, { useState } from 'react';
import Page2 from './Page2';
import './ContextTest2.css'
import { ThemeContext } from '../../context/ThemeContext';
import { UserInfoContext } from '../../context/UserInfoContext';

function ContextTest2() {
    const [isDark, setIsDark] = useState(false);

    return (
        <UserInfoContext.Provider value={"사용자"}>
            <ThemeContext.Provider value={{ isDark, setIsDark }}>
                <Page2 />
            </ThemeContext.Provider>
        </UserInfoContext.Provider>
    );
}

export default ContextTest2;