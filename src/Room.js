
import React, {useState} from 'react';
import './Room.css';

function Room() {

    const [isLit, setLit]= useState(true);
    let [age, setAge]= useState(67);

    function updateLit(){
        console.log("Clicked");
        setLit(!isLit);
    }

    return (
    <div className={`room ${isLit? "lit": "dark"}`}>
        
        This is room is {isLit? "lit": "dark"}
        <br/>
        age is {age}
        <br/>
        <button onClick={updateLit}>Toggle Light</button>
        <br/>
        <button onClick={()=> setAge(++age)}>inc age</button>

    </div>
  
  );
}

export default Room;