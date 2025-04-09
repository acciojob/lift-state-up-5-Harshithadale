
import React from "react";
import './../styles/App.css';
import ParentComponent from "./ParentComponent";
import ChildComponent from "./ChildComponent";

const App = () => {
  const [isLoggedIn,setLogin] = React.useState(false)
  return (
    <div>
        <h1>Parent Component</h1>
        {/* Do not remove the main div */}
        {
        !isLoggedIn&&<ParentComponent loginFun = {setLogin}/>
        }
        {
        isLoggedIn && <ChildComponent/>
        }

    </div>
  )
}

export default App
