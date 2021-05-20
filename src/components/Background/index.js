import React from "react";
import "./style.css";

function Background (props) {
    console.log(props.src);
    const image2 = (props.src);
    return (
        <div>
            <div class="background">
                <img
                src={`${process.env.PUBLIC_URL}${image2}`}
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