import React, { useState } from "react"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import EmailIcon from "@material-ui/icons/Email"
import PhoneIcon from "@material-ui/icons/Phone"
import LockIcon from "@material-ui/icons/Lock"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import { useHistory } from "react-router-dom";
import rq from '../../../../axios'

export default function Register() {
  const [name, setNameValue] = useState("")
  const [email, setEmailValue] = useState("")
  const [phone, setPhoneValue] = useState("")
  const [question, setQuestionValue] = useState("")
  const [questionAns, setQuestionAnsValue] = useState("")
  const [password0, setPassword0Value] = useState("")
  const [password1, setPassword1Value] = useState("")
  const [gender, setGenderValue] = useState("")
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault()
    if (password0 !== password1) {
      alert("Invalid passwords!")
    } else if (phone.split("")[0] !== "+") {
      alert("Invalid phone number!")
    } else {
      const user = {
        "username": name,
        "email": email,
        "phone_number": phone,
        "question": questionAns,
        "password": password0,
        "gender": gender
      }

      rq.post('/users/register', user)
        .then(res => {
          console.log(res.data)
          history.push('/')
      })
    }
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
            id="form-input-phone"
            class="form-control"
            placeholder="Phone number"
            type="text"
            value={phone}
            onChange={e => setPhoneValue(e.target.value)}
            onBlur={_ => {
              const formPhone = document.querySelector("#form-phone")
              if (phone.split("")[0] === "+" || phone === "") {
                document.querySelector("#form-input-phone").className =
                  "form-control"
                if (formPhone.children[2] !== undefined)
                  formPhone.removeChild(formPhone.children[2])
              } else {
                document.querySelector("#form-input-phone").className =
                  "form-control is-invalid"
                const errDiv = document.createElement("div")
                errDiv.className = "invalid-feedback"
                errDiv.appendChild(
                  document.createTextNode(
                    "A phone number must start with your region code. Ex: +373"
                  )
                )
                if (formPhone.children[2] === undefined)
                  formPhone.appendChild(errDiv)
                console.log(formPhone.children)
              }
            }}
          />
        </div>
        <div class="form-group">
          <select value={question} onChange={e => setQuestionValue(e.target.value)} class="form-control multiple" id="form-question">
            <option selected>Select a question</option>
            <option value="Who is your hero?">Who is your hero?</option>
            <option value="What is your favorite book to read?">What is your favorite book to read?</option>
            <option value="What is the name of your favorite childhood friend?">What is the name of your favorite childhood friend?</option>
            <option value="In what city or town was your first job?">In what city or town was your first job?</option>
            <option value="In what city or town did your mother and father meet?">In what city or town did your mother and father meet?</option>
          </select>
        </div>
        <div class="form-group input-group" id="form-questionAns">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <HelpOutlineIcon />
            </span>
          </div>
          <input
            class="form-control"
            placeholder="Answer question"
            type="text"
            value={questionAns}
            onChange={e => setQuestionAnsValue(e.target.value)}
          />
        </div>
        <div class="form-group">
          <select value={gender} onChange={e => setGenderValue(e.target.value)} class="form-control multiple" id="form-question">
            <option selected>Select your gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
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
              if (password1 === password0) {
                document.querySelector("#form-input-password1").className =
                  "form-control"
                if (formPassword.children[2] !== undefined)
                  formPassword.removeChild(formPassword.children[2])
              } else {
                document.querySelector("#form-input-password1").className =
                  "form-control is-invalid"
                const errDiv = document.createElement("div")
                errDiv.className = "invalid-feedback"
                errDiv.appendChild(
                  document.createTextNode("Passwords do not match!")
                )
                if (formPassword.children[2] === undefined)
                  formPassword.appendChild(errDiv)
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
