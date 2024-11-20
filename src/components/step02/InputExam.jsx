import { TextField } from '@mui/material';
import './InputExam.css'

function InputExam() {
    return (
        <div className="input-exam">
            <input onFocus={() => console.log("onFocus")}
                onBlur={() => console.log('onBlur')} /><br /><br />
            <TextField id="outlined-basic" label="Outlined" variant="outlined"
                onChange={(e) => console.log(e.target.value)} /><br /><br />
            <TextField id="standard-basic" label="Standard" variant="standard"
                onKeyUp={(e) => console.log(e.key, 'UP')} /><br /><br />+
        </div>
    );
}

export default InputExam;