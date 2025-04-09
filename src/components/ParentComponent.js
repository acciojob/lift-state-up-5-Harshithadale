import React from 'react'
import '../styles/ParentComponent.css';
function ParentComponent({loginFun}){
  return (
    <div>
      <form>
        <label htmlFor = "userName">Username:</label>
        <input type="text" id="userName"/>
        <br/>
        <label htmlFor = "password">Password:</label>
        <input type="password" id="password"/>
        <br/>
        <button type ="submit" onClick = {()=>{
            loginFun(true)
        }}>Login</button>
      </form>
    </div>

  )
}

export default ParentComponent