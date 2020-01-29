import React from "react"
import './css/Header.css'
import pet_logo from "../../assets/pet_logo.png"
import PersonIcon from "@material-ui/icons/Person"
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

export default function Header() {
  const handleSubmit = () => {
    console.log("submitted")
  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
          <ul className="navbar-nav ml-5">
            <li className="nav-item">
              <a className="nav-link" href="/pets/find">
                Find Pet
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-4">
            <li className="nav-item">
              <a className="nav-link" href="/blog/how-it-works">
                How It Works?
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-4">
            <li className="nav-item">
              <a className="nav-link" href="/blog/adoption">
                Adoption Info
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <a
                className="nav-link"
                data-toggle="modal"
                data-target="#modalLoginForm"
                href="/">
                <PersonIcon /> Login/SignUp
              </a>
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
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                    <input placeholder="Your email" type="email" id="email" className="form-control validate" />
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
                    <input placeholder="Your password" type="password" id="password" className="form-control validate" />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-light">Login</button>
                  <hr />
                  <p>Do you have an account? <a href="/users/register"> Sign Up</a></p>
                  <p>Forgot password? <a href="/users/recover"> Recover</a></p>
                </div>
              </form>
            </div>
          </div>
      </div>
    </header>
  )
}
