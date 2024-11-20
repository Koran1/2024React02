import { useState } from "react";

function InputForm() {
    const roles = ['user', 'admin', 'guest']

    const [name, setName] = useState('');
    const [role, setRole] = useState(roles[0]);
    const [isSubscribed, setSubscribe] = useState(false);

    return (
        <form>
            <p>Name : {name} {isSubscribed && '(Subscribed)'}</p>
            <p>Role : {role}</p>
            <p><input type="text" placeholder="Enter your username" value={name}
                onChange={(e) => setName(e.target.value)} /></p>
            {/* <p><input type="checkbox" checked={isSubscribed} onClick={() => setSubscribe(!isSubscribed)} /><label>Subcribed</label> */}
            <p><input type="checkbox" checked={isSubscribed} onChange={(e) => setSubscribe(e.target.checked)} /><label>Subcribed</label>
                &nbsp;&nbsp; <select value={role} onChange={e => setRole(e.target.value)}>
                    {roles.map((role) => (<option key={role} value={role}>{role}</option>))}
                </select> </p>
        </form>
    );
}

export default InputForm;