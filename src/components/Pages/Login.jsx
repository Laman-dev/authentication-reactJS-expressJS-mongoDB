import React, { useState } from 'react';
import '../css/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {

  const history = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ========Start Login Form Data POST==========
  async function submit(e) {

    e.preventDefault();
    if (email === "" || password === "") {
      alert("please Fill out the all values")
    }

    else {
      try {

        await axios.post("http://localhost:8000/", { email, password })

          // ==== If Login to reDirect Home=======
          .then(res => {
            if (res.data === "exist") {
              history("/home")
            }
            else if (res.data === "notexist") {
              alert("Incorrect Username or Password")
            }
          })
          .catch((e) => {
            alert("Server can't get invalid details")
            console.log(e);
          });
        // ==== end Login to reDirect Home=======


      } catch (e) {
        console.log(e);
      }
    }
  }
  // ========End Login Form Data POST==========

  return (
    <>

      <div className="main">
        <div className="wrapper">
          <h2>Login</h2>
          <form action="POST">

            <div className="input-box">
              <input type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your email" name="email" required />
            </div>
            <div className="input-box">
              <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Create password" name="password" required />
            </div>

            <div className="input-box button">
              <input type="Submit" value="Login" onClick={submit} />
            </div>

            <div className="input-box text-center">
              <Link to="register">Create an Account</Link>
            </div>

          </form>
        </div>
      </div>

    </>
  )
}

export default Login