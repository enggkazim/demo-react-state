
import React, {useState} from 'react';

function Room() {

    const [isLit, setLit]= useState(true);
    let [age, setAge]= useState(67);

    function updateLit(){
        console.log("Clicked");
        setLit(!isLit);
    }
    return (
    <div>
        
        This is room is {isLit? "Lit": "Dark"}
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