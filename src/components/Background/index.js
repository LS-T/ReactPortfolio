import React from "react";
import "./style.css";

function Background () {
    return (
        <div>
            <div class="background">
                <img
                src="images/background.png"
                className="img-fluid"
                />
            </div>
            <div className="image-content text-center">
                <h1>Hello,I'm</h1>
                <h2>Leo Teruel</h2>
                <p>WELCOME TO MY PORTFOLIO!</p>
            </div>
        </div>
    )
}

export default Background;