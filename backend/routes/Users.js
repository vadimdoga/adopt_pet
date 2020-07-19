const express = require("express")
const router = express.Router()
const db = require("../model/db")

router.post("/register", (req, res) => {
  const sql_gender = `select id from genders where gender = ?`
  db.query(sql_gender, [req.body.gender], (err, data, fields) => {
    if (err) return res.status(400).send(err.sqlMessage)
    const sql = `INSERT INTO users(gender_id, username, password, email, phone_number, question) VALUES (?)`
    const values = [
      data[0].id,
      req.body.username,
      req.body.password,
      req.body.email,
      req.body.phone_number,
      req.body.question
    ]
    db.query(sql, [values], (err, data, fields) => {
      if (err) return res.status(400).send(err.sqlMessage)
      res.json({
        status: 200,
        message: "New user added succesfully",
      })
    })
  })
})

router.post('/login', (req, res) => {
  const sql = `select id from users where email = ? and password = ?`
  const values = [req.body.email, req.body.password]
  db.query(sql, values, (err, data, fields) => {
    if (err) return res.status(400).send(err.sqlMessage)
    if (data.length == 0) {
      return res.status(400).send("Password not valid")
    } else {
      res.json({
        status: 200,
        data
      })
    }
  })
});

router.get('/:id', (req, res) => {
  const user_id = req.params.id

  db.query(`select phone_number, username from users where id=${user_id}`, (err, data) => {
    if (err) return res.status(400).send(err.sqlMessage)

    res.json({
      status: 200,
      data
     });
  })
});

module.exports = router
