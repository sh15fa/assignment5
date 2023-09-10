import React, { useState } from 'react';
import Child from './child';

export default function Parent() {
    const [Pname,setPName]=useState('Default pressed name');
    const [chName,setChName]=useState('Default pressed name');
//to handle parent data that passed to the child
    function parentNameHandler(e){
            setPName (e.target.value);
            if(e.target.value===''){
                setPName('Default pressed name');
            }
    }
//function to pass data from child to parent
    function childName(name){
        console.log(name);
        setChName(name);
        
    }

  return (
    <div >
        <h1>I'm the Parent Page</h1>
        <h3>Recive from child:</h3>
        <h3 style={{color:'orange'}}>{chName} </h3>
        <h4>Enter data to pass to child:</h4>
        <input type='text' onChange={parentNameHandler}/>
        <Child parentName={Pname} childName={childName}/>
    </div>
  )
}
