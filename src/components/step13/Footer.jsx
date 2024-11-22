import React from 'react';

function Footer({ isDark, setIsDark }) {
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

export default Footer;