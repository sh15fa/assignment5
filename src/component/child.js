import React, { useState } from 'react'
import './child.css';

export default function Child(props) {
    const [childName,setChildName]=useState('Default pressed name');
    // to hadle child On change
    function childNameHandler(e){
        setChildName(e.target.value);
        props.childName(e.target.value);//to pass data from child tp parent

        if(e.target.value===''){
            props.childName('Default pressed name');
        }
    }
  return (
    <div className='divChild'>
        <h1>I'm the Child Page</h1>
        <h3>Recive from Parent as props:</h3>
        <h3 style={{color:'orange'}}>{props.parentName} </h3>
        <h4>Enter data to pass to Parent:</h4>
        <input type='text' onChange={childNameHandler}/>
        
    </div>
  )
}
