import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { UserInfoContext } from '../../context/UserInfoContext';

function Header2() {
    const { isDark } = useContext(ThemeContext);
    const name = useContext(UserInfoContext);
    return (
        <header
            className='header'
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
                color: isDark ? 'white' : 'black'
            }}>
            <h1>Welcome {name}!</h1>
        </header>
    );
}

export default Header2;