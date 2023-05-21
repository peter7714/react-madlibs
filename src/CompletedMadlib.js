import React from "react";

function CompletedMadlib({noun, noun2, adjective, color, reset }){
    return (
        <div>
            <h3>There was a {adjective} {noun} who loved a {color} {noun2} </h3>
            <button onClick={reset}>Reset!</button>
        </div>
    )
}

export default CompletedMadlib;