import { useNavigate } from "react-router";
import "./Login.css"

import getLogin from "../../service/authfile";
import { useContext, useState } from "react";
import Context from "../ContextApi/context.js";

var login= () =>{
   var navigate = useNavigate();
   const [username,setUserName] = useState("");
   const [password,setPassword] = useState("");
 var context = useContext(Context);

const handleLogin = async () => {
  try {
    const result = await getLogin(username, password);
    console.log(result); // should now show API response
    if (result && result.jwtToken) {
      localStorage.setItem("login", "true");
      context.setLogin(true);
      navigate("/Home", { replace: true });
    } 
  } catch (error) {
    console.error("Login failed", error);
    alert("Something went wrong!");
  }
};


    return(
<div className="login">
<h1 >Login</h1>

    <div className={"UserName input"  }>
        <input placeholder="UserName" value={username} onChange={(e) =>setUserName( e.target.value)} />
    </div> 
    
    <div className="Password input">
        <input placeholder="password"  value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>

  <div className="button">
       <button onClick={handleLogin} >Login</button>
    </div>
<h3>Don't Have Account create It</h3>
     <div className="signupBut">
       <button onClick={()=>{ 
        navigate("/signup")
       }}>SIGN UP</button>
    </div>
</div>
    );
}


export default login;