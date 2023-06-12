import React, { useState } from "react";
import "../styles/App.css";
import Child from "./Child";
const App = () => {
    const[age,setAge]=useState(19)
    function incrementAge() {
        setAge(prev=>prev+1)
    }

    return <Child  incre={incrementAge} age={age}/>;
};

export default App;
