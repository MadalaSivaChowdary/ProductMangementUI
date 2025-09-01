
import "./Navbar.css"
import Dropdown  from "../../util/DropDown.jsx";
import Context from "../ContextApi/context.js";
import { useContext, useState} from "react";
import { Link, useNavigate } from "react-router";
import Store from "../../ReduxFile/Store.js";
import createActionObj from "../../ReduxFile/actionObj.js"

var navBar = () =>{
  var navigate = useNavigate();
   const[search, setSearch] = useState(false);
   const [open, setOpen] = useState(false);
   const[input,setInput] = useState("");
  
 var context = useContext(Context);
     const categoryItems = [
    { label: "Electronics", link: "/category/electronics" },
    { label: "Jewelry", link: "/category/jewellery" },
    { label: "Fashion", link: "/category/fashion" },
    { label: "Beauty", link: "/category/beauty" },
    { label: "fragrances", link: "/category/fragrances" },
    
  ];

var handellogout =()=>{
   localStorage.removeItem("login"); // clear saved login
  context.setLogin(false);                  // update React state
  navigate("/login",{ replace: true }); // force URL change
}
var handelSearch =()=>{
  setOpen (false);
  setSearch(true);
}

var inputSearch =(value)=>{
    const actionObject = createActionObj(value);
    Store.dispatch(actionObject);
}

var handleClose =()=>{
  setSearch(false);
}

var ClickChange=()=>{
  setOpen (false);
}
    return(
<nav>
    <h2>Shiva Mart</h2>
  
         <div className="navBut">
    <Link href="/welCome" className="Home" onClick={ClickChange}>Home</Link>
  <Dropdown label="Category" items={categoryItems} open = {open} setOpen={setOpen} />
 {

 }
 {   
search ?( <>
<input type="text"
          placeholder="Enter your search query"
          name="searchInput"
          onChange={(e)=>{
         const value = e.target.value;
  setInput(value);
  inputSearch(value); // Pass the latest value directly
          }}
          style={{width:"860px", height:"60px", position:"absolute" ,marginRight:"30px", borderRadius:"10px" }}
/>
 <button
            onClick={handleClose}
            style={{
              position: 'relative',
              left: '520px',
              height: '35px',
              borderRadius:'10px',
              width:'35px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            ✖
          </button>



</>   ):<button onClick={handelSearch}>Search</button>}
    <button >Cart</button>
   <button>Profile</button>
   <button onClick={handellogout}>Logout</button>
   </div>
   
  
   
   
   
   
   
</nav>
    );
}   

export default navBar;