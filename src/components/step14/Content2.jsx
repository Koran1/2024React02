import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { UserInfoContext } from '../../context/UserInfoContext';

function Content2() {
    const { isDark } = useContext(ThemeContext);
    const name = useContext(UserInfoContext);
    return (
        <div className='content'
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
                color: isDark ? 'white' : 'black'
            }}>
            <p>{name} 님, 좋은 하루 되세요</p>
        </div>
    );
}

export default Content2;