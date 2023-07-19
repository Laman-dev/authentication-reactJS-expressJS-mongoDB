import React, { useState } from 'react'
import '../css/Register.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Register() {

  const history = useNavigate()

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // ========Start Register Form Data POST==========
  async function submit(e) {
    e.preventDefault()
    if (username === "" || email === "" || password === "") {
      alert("please Fill out the all values")
    }
    else {
      try {

        await axios.post("http://localhost:8000/register", { username, email, password })

          // ==== If data exit so don't redirect to Home page=======
          .then(res => {
            if (res.data === "exist") {
              alert("email is already Exist try another email")
            }
            else if (res.data === "notexist") {
              history("/home")
            }
          })
          .catch((e) => {
            alert("Server can't get invalid details")
            console.log(e);
          });
        // ==== If data exit so don't redirect to Home page=======

      } catch (e) {
        console.log(e);
      }
    }
  }
  // ========End Register Form Data POST==========


  // =====Username Pattern========
  const inputUsername = (e) => {

    const { value } = e.target;
    const aplphaNumeric = /^[A-Za-z]+$/;
    if (value === "" || aplphaNumeric.test(value)) {
      setUsername(value);
      console.log(username);
    }
    else {
      alert("only use charcter");
      setUsername("")
    }
  }
  // =====End Pattern========



  return (
    <>

      <div className="main">
        <div className="wrapper">
          <h2>Registration</h2>
          <form action="POST">
            <div className="input-box">
              <input type="text" value={username} onChange={inputUsername} placeholder="Enter your name" />
            </div>
            <div className="input-box">
              <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your email" />
            </div>
            <div className="input-box">
              <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Create password" />
            </div>

            <div className="input-box button">
              <input type="Submit" value="Register Now" onClick={submit} />
            </div>
            <div className="text">
              <h3>Already have an account? <Link to="/">Login now</Link></h3>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Register