import React, {useState} from 'react'
import EmailIcon from "@material-ui/icons/Email"
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

export default function Recover() {
  const [email, setEmailValue] = useState("")
  const [question, setQuestionValue] = useState("")
  const handleSubmit = () => {

  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="mx-auto w-50 card-body">
        <h1 style={{ textAlign: "center" }}>Recover Password</h1>
        <hr />
        <div class="form-group input-group" id="form-name">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <EmailIcon />
            </span>
          </div>
          <input
            name="email-form"
            class="form-control"
            placeholder="Email address"
            type="text"
            value={email}
            onChange={e => setEmailValue(e.target.value)}
          />
        </div>
        <div class="form-group input-group" id="form-name">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <HelpOutlineIcon />
            </span>
          </div>
          <input
            name="question-form"
            class="form-control"
            placeholder="Question answer"
            type="text"
            value={question}
            onChange={e => setQuestionValue(e.target.value)}
          />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-block">
            Recover password
          </button>
        </div>
      </form>
    </div>
  )
}
