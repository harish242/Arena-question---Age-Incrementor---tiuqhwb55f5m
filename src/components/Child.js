import React from "react";

function Child({incre,age}) {
    return <div id="child">
        <p id='text'>Today I am {age} Years of Age</p>
        <button id='button' onClick={incre}>Increment</button>
    </div>;
}

export default Child;
