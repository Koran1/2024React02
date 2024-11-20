import { Button } from "@mui/material";
import ProfileExam from "./ProfileExam";
import "./UserProfile.css"
import { useState } from "react";

function UserProfile() {
    const users = ['고길동', '둘리', '희동이'];
    const [user, setUser] = useState(users[0]);
    const [activeness, setActiveness] = useState(true);

    return (
        <div className="userProfile">
            <h2>User Profile</h2>
            <Button variant="contained" onClick={() => setActiveness(!activeness)}>Toggle Status</Button>
            <Button variant="contained" onClick={() => setUser(
                users[(users.indexOf(user) + 1) % users.length]
            )}>Switch User</Button>

            <p>상태 : {activeness ? 'Active' : 'Inactive'}</p>
            <div>
                <ProfileExam name={user} />
            </div>
        </div>
    );
}

export default UserProfile;