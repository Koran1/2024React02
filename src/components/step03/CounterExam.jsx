import { Button } from '@mui/material';
import { useState } from 'react';

// function CounterExam() {
//     const [count, setCount] = useState(5);

//     return (
//         <div>
//             <Button variant="outlined" onClick={() => setCount(count - 1)}>-</Button>
//             <h2>Count : {count}</h2>
//             <Button variant="outlined" onClick={() => setCount(count + 1)}>+</Button>
//         </div>
//     );
// }

function CounterExam(props) {
    const [count, setCount] = useState(5);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div>
            <Button variant="outlined" onClick={decrement}>-</Button>
            <h2>Count : {count}</h2>
            <Button variant="outlined" onClick={increment}>+</Button>
        </div>
    );
}

export default CounterExam;