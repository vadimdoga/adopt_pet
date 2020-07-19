import React, { useState, useEffect } from "react"
import "./css/Header.css"
import pet_logo from "../../assets/pet_logo.png"
import PersonIcon from "@material-ui/icons/Person"
import EmailIcon from "@material-ui/icons/Email"
import LockIcon from "@material-ui/icons/Lock"
import Cookies from "universal-cookie"
import axios from "axios"

export default function Header() {
  const [password, setPasswordValue] = useState("")
  const [email, setEmailValue] = useState("")
  const [user_id, setUser_id] = useState(NaN)
  const cookies = new Cookies()

  useEffect(() => {
    cookies.set("user_id", 2)
    const cookie_user_id = cookies.get("user_id")
    if (cookie_user_id != NaN) {
      setUser_id(cookie_user_id)
    }
  })

  const handleLogout = () => {
    cookies.remove("user_id")
    setUser_id(NaN)
  }

  const handleSubmit = (e) => {
    const user = {
      email: email,
      password: password,
    }

    axios
      .post("http://localhost:4000/users/login", user)
      .then((res) => {
        console.log(res.data.data)
        cookies.set("user_id", parseInt(res.data.data[0].id), {
          path: "/",
          expires: new Date(Date.now() + 2 * 3600),
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light navbar-light">
        <a className="navbar-brand h1" href="/">
          <img
            src={pet_logo}
            className="d-inline-block align-top mr-2"
            alt="pet-logo"
            width="25"
            height="30"></img>
          Adopt Pet
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ml-4">
            <li className="nav-item ml-2">
              <a className="nav-link" href="/pets/find">
                Find Pet
              </a>
            </li>
            <li className="nav-item ml-2">
              <a className="nav-link" href="/blog/how-it-works">
                How It Works?
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                style={{ cursor: "pointer" }}
                class="nav-link dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Adoption
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/blog/adoption/cat">
                  Cat Adoption
                </a>
                <a class="dropdown-item" href="/blog/adoption/dog">
                  Dog Adoption
                </a>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              {isNaN(user_id) ? (
                <a
                  className="nav-link"
                  data-toggle="modal"
                  data-target="#modalLoginForm"
                  href="/">
                  <PersonIcon /> Login/SignUp
                </a>
              ) : null}
            </li>
            <li className="nav-item">
              {isNaN(user_id) ? null : (
                <div className="dropdown ">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    id="dropdownLogged"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <PersonIcon />
                  </button>
                  <div
                    class="dropdown-menu dropdown-menu-right"
                    aria-labelledby="dropdownLogged">
                    <a class="dropdown-item" href="/animals">
                      My Animals
                    </a>
                    <a class="dropdown-item" href="#">
                      Settings
                    </a>
                    <a onClick={handleLogout} class="dropdown-item" href="/">
                      Logout
                    </a>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <div
        className="modal fade"
        id="modalLoginForm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">Sign In</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="modal-body mx-3">
              <div className="md-form mb-5 form-group">
                <label class="control-label font-weight-bold" for="email">
                  Email:
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <EmailIcon />
                    </span>
                  </div>
                  <input
                    placeholder="Your email"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmailValue(e.target.value)}
                    className="form-control validate"
                  />
                </div>
              </div>
              <div className="md-form mb-4">
                <label class="control-label font-weight-bold" for="email">
                  Password:
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <LockIcon />
                    </span>
                  </div>
                  <input
                    placeholder="Your password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPasswordValue(e.target.value)}
                    className="form-control validate"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-light">
                  Login
                </button>
                <hr />
                <p>
                  Do you have an account? <a href="/users/register"> Sign Up</a>
                </p>
                <p>
                  Forgot password? <a href="/users/recover"> Recover</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  )
}
