import { useState } from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom"
import "./login.css"
import {Link} from "react-router-dom"

function Login() {
    const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
     var navigate = useNavigate()
     console.log(email)
     console.log(password)
     function loginUser(){
    axios.post('http://localhost:3000/login', {
    email: email,
    password: password
  })
  .then(function (response) {
    console.log(response);
    alert("your account login was successful")
    navigate("/")
  })
  .catch(function (error) {
    console.log(error);
  });
}
  return (
//     <div>
//    <h1>login page</h1>
//    <input type="text" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}} />
//    <input type="text" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
//    <button onClick={loginUser}>login</button>
//    </div>

<div>

  <div className="wrapper">
    <div>
      <h2>Login</h2>
        <div className="input-field">
        <input onChange={(e)=>{setEmail(e.target.value)}} type="text" required/>
        <label>Enter your email</label>
      </div>
      <div className="input-field">
        <input onChange={(e)=>{setPassword(e.target.value)}} type="password" required/>
        <label>Enter your password</label>
      </div>
      <div className="forget">
        <label htmlFor="remember">
          <input type="checkbox" id="remember"/>
          <p>Remember me</p>
        </label>
        <a href="#">Forgot password?</a>
      </div>
      <button onClick={loginUser} type="submit">Log In</button>
      <div className="register">
        <p>Don't have an account? <Link to="/signup">Signup</Link></p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Login