import { useState } from "react";

function ProfileExam({ name }) {
    const [status, setStatus] = useState('Away');

    return (
        <div className="profileBox">
            <h3>Name : {name}</h3>
            <p>Status : {status}</p>
            <button onClick={() => setStatus('Away')}>Set Away</button>
            <button onClick={() => setStatus('Available')}>Set Available</button>
        </div>
    );
}

export default ProfileExam;