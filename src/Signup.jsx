import axios from "axios"
import { useState } from "react"
import {useNavigate} from "react-router-dom"
import "./signup.css"
import {Link} from "react-router-dom"
function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    var navigate = useNavigate()
    function signupUser(){
    axios.post('http://localhost:3000/', {
    name: name,
    email: email,
    password: password
    })
.then(function (response) {
    console.log(response);
    alert("your account signup was successful")
    navigate("/login")
  })
  .catch(function (error) {
    console.log(error);
  });
}
  return (
    <div>
   {/* <h1>Signup page</h1>
   <input type="text" placeholder="name"  onChange={(e)=>{setName(e.target.value)}}/>
   <input type="text" placeholder="email"  onChange={(e)=>{setEmail(e.target.value)}}/>
   <input type="text" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
   <button onClick={signupUser}>Signup</button> */}
     <div className="wrapper">
    <div >
      <h2>Signup</h2>
      <div className="input-field">
        <input onChange={(e)=>{setName(e.target.value)}} type="text" required/>
        <label>Enter your name</label>
      </div>
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
      </div>
      <button onClick={signupUser}type="submit">Sign up</button>
      <div className="register">
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  </div>
   </div>
  )
}

export default Signup