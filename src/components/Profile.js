import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';

function Profile() {
    const user = useSelector((state) => state.user.value);
    const themeColor = useSelector((state) => state.theme.value);
    return (
        <div >
            <div id='pageHeader' style={{color: themeColor}}>
                <h1>Profile Page</h1>
            </div>
            <div id='userProfile'>
                <p id = 'userName'>Name: { user.name }</p>
                <p id = 'userId'>Age: { user.age }</p>
                <p id = 'userEmail'>Email: { user.email }</p>
            </div>
        </div>
    )
}

export default Profile;