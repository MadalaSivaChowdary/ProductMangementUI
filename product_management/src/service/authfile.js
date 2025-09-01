import axios from "axios";

const getLogin = async (username, password) => {
  try { 
    const response = await axios.post(
      "http://localhost:8080/USER/auth/public/singup",  // <-- Fix endpoint if needed
      { username, password }
    );
    if (response.data.jwtToken) {
      localStorage.setItem("token", response.data.jwtToken);
    }
    return response.data;  // This will now correctly return to caller
  } catch (error) {
    console.error("Login API error:", error);
    throw error;  // rethrow so the UI can handle it
  }
};

export default getLogin;
