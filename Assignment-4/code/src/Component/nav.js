import React from "react";
import camera from "../Mock-data/camera.png"
import logo from "../Mock-data/logo.png"

function Nav(){
    return (
        <>
        <nav className="navbar">
            <h1><img src={logo} alt=" logo" width="30px" height=" 30px"/>InstaClone</h1>
            <img src={camera} alt="camera" width="36px" height="36px" className="camera"/>

            </nav>
            </>
    );
}
export default Nav;