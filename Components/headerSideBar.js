import React from "react";
import firebase from "../Firebase/clientApp";

export default function HeaderSideBar() {
    const handleSignOut = () => {
        firebase.auth().signOut();
    }
    return (
        <div className="logOut">
            <button onClick={handleSignOut}>Log Out</button>
        </div>
    );
}