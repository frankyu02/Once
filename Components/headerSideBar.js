import Image from "next/image";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "../Firebase/clientApp";
export default function HeaderSideBar() {
    const handleSignOut = () => {
        firebase.auth().signOut();
    }
    const [user] = useAuthState(firebase.auth());
    console.log(user);
    return (
        <div className="logOut">
            {user ?
                <div className="userSummary">
                    <Image src={user.photoURL} alt="user Image" width="50%" height="100%" />
                </div>
                : ''}
            <div className="buttonDiv">
                <button onClick={handleSignOut}>Log Out</button>
            </div>
        </div>
    );
}