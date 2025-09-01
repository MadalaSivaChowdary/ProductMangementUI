import SignUp from "./components/sign_up/SignUp.jsx";
import Login from "./components/login/Login.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import { Navigate, Route, Routes } from "react-router";
import Category from "./components/pages/Category.jsx";
import { useState } from "react";
import Context from "./components/ContextApi/context.js";

var App = () => {
  const [login, setLogin] = useState(
    ()=>{
      return localStorage.getItem("login") ==="true";
    });

  return (
    <div>
      <Context.Provider value={{ login, setLogin }}>
        <Routes>
          <Route path="/" element={<Navigate to={"/login"} />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={login ? <Navigate to="/Home" replace /> : <Login />} />
          <Route path="/Home" element={login?<Navbar /> : <Login />} />
          <Route path="/category/:name" element={login?<><Navbar /><Category /></>: <Login/>} />
        </Routes>
      </Context.Provider>
    </div>
  );
};

export default App;
