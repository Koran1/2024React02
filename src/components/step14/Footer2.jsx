import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

function Footer2() {
    const { isDark, setIsDark } = useContext(ThemeContext);
    const toggleTheme = () => {
        setIsDark(!isDark)
    }
    return (
        <footer className='footer'
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
                color: isDark ? 'white' : 'black'
            }}>
            <button onClick={toggleTheme}>모드 변경</button>
        </footer>
    );
}

export default Footer2;