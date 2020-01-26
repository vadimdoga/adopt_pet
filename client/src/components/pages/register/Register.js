import React, { useState } from "react"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import EmailIcon from "@material-ui/icons/Email"
import PhoneIcon from "@material-ui/icons/Phone"
import LockIcon from "@material-ui/icons/Lock"
export default function Register() {
  const [name, setNameValue] = useState("")
  const [email, setEmailValue] = useState("")
  const [phone, setPhoneValue] = useState("")
  const [password0, setPassword0Value] = useState("")
  const [password1, setPassword1Value] = useState("")
  const handleSubmit = e => {
    e.preventDefault()
    if (password0 !== password1) alert("Invalid passwords!")
    if (phone.split('')[0] !== "+") alert("Invalid phone number!")
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="mx-auto w-50 card-body">
        <h1 style={{ textAlign: "center" }}>Sign Up</h1>
        <hr />
        <div class="form-group input-group" id="form-name">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <AccountCircleIcon />
            </span>
          </div>
          <input
            name="name-form"
            class="form-control"
            placeholder="Full name"
            type="text"
            value={name}
            onChange={e => setNameValue(e.target.value)}
          />
        </div>
        <div class="form-group input-group" id="form-email">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <EmailIcon />
            </span>
          </div>
          <input
            name="email-form"
            class="form-control"
            placeholder="Email address"
            type="email"
            value={email}
            onChange={e => setEmailValue(e.target.value)}
          />
        </div>
        <div class="form-group input-group" id="form-phone">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <PhoneIcon />
            </span>
          </div>
          <input
            name="phone-form"
            id = "form-input-phone"
            class="form-control"
            placeholder="Phone number"
            type="text"
            value={phone}
            onChange={e => setPhoneValue(e.target.value)}
            onBlur={_ => {
              const formPhone = document.querySelector("#form-phone")
              if(phone.split('')[0] === "+" || phone === ''){
                document.querySelector("#form-input-phone").className = "form-control"
                if(formPhone.children[2] !== undefined) formPhone.removeChild(formPhone.children[2])
              } else {
                document.querySelector("#form-input-phone").className = "form-control is-invalid"
                const errDiv = document.createElement("div")
                errDiv.className="invalid-feedback"
                errDiv.appendChild(document.createTextNode("A phone number must start with your region code. Ex: +373"))
                if(formPhone.children[2] === undefined) formPhone.appendChild(errDiv)
                console.log(formPhone.children)
              }
            }}
          />
        </div>
        <div class="form-group input-group" id="form-password0">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <LockIcon />
            </span>
          </div>
          <input
            class="form-control"
            placeholder="Create password"
            type="password"
            value={password0}
            onChange={e => setPassword0Value(e.target.value)}
          />
        </div>
        <div class="form-group input-group" id="form-password1">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <LockIcon />
            </span>
          </div>
          <input
            class="form-control"
            id="form-input-password1"
            placeholder="Repeat password"
            type="password"
            value={password1}
            onMouseOut={_ => {
              const formPassword = document.querySelector("#form-password1")
              if(password1 === password0){
                document.querySelector("#form-input-password1").className = "form-control"
                if(formPassword.children[2] !== undefined) formPassword.removeChild(formPassword.children[2])
              } else {
                document.querySelector("#form-input-password1").className = "form-control is-invalid"
                const errDiv = document.createElement("div")
                errDiv.className="invalid-feedback"
                errDiv.appendChild(document.createTextNode("Passwords do not match!"))
                if(formPassword.children[2] === undefined) formPassword.appendChild(errDiv)
              }
            }}
            onChange={e => setPassword1Value(e.target.value)}
          />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-block">
            Create Account
          </button>
        </div>
      </form>
    </div>
  )
}
