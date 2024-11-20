import { Button } from '@mui/material';
import { useState } from 'react';

function CheckExam(props) {
    const [isPinned, setPinned] = useState(false)
    const togglePin = () => {
        setPinned(!isPinned)
    }

    return (
        <div>
            <Button variant="contained" onClick={togglePin}>Pin This {isPinned && '✅'}</Button>
        </div>
    );
}

export default CheckExam;