import "./SignUp.css"
import { useNavigate } from "react-router";
var signUp= () =>{
     var navigate = useNavigate();
    return(
<div className="signUp">
<h1 style={{color:"blue"}}>Sign Up</h1>

    <div className={"UserName input"  }>
        <input placeholder="UserName"  />
    </div> 
    <div className="Email input">
        <input placeholder="Email"  />
    </div>
    <div className="Password input">
        <input placeholder="password"  />
    </div>

  <div className="button">
       <button>Sign Up</button>
    </div>
    <h3>Have Account</h3>
    <div className="button">
       <button onClick={()=>{
        
        navigate("/login")
       }}>Login page</button>
    </div>
</div>
    );
}


export default signUp;