import React from 'react'
import '../styles/ParentComponent.css';
function ParentComponent({loginFun}){
  return (
    <div>
        <label htmlFor = "userName">Username:</label>
        <input type="text" id="userName"/>
        <br/>
        <label htmlFor = "password">Password:</label>
        <input type="password" id="password"/>
        <br/>
        <button onClick = {()=>{
            loginFun(true)
        }}>Login</button>
    </div>
  )
}

export default ParentComponent