/*
import { useState } from 'react';
import './App.css';

  function Person() {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");  

  return (
    <>
      <h1>{firstName+" "+lastName}</h1>
      <FirstNameInput value = {firstName} onChange = {(e)=>setFirstName(e.target.value)}/>
      <LastNameInput value = {lastName} onChange = {(e)=>setLastName(e.target.value)}/>
    </>
  );
  }

function FirstNameInput({value,onChange}){
  return(
    <input type="text" onChange={onChange} value={value} style={{marginRight:"10px"}}/>
  )
}

function LastNameInput({value,onChange}){
  return(
    <input type="text" onChange={onChange} value={value}/>
  )
}


function App() {
    return (
    <div>
      <Person />
    </div>
  );

}

export default App;*/