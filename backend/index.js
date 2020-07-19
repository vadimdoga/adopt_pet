const express = require('express')
const app = express()
const cors = require("cors")
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000
const db = require('./model/db')

//import routes
const userRoute = require('./routes/Users')
const animalRoute = require('./routes/Animals')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '5mb'}));
app.use(cors())

app.use("/users", userRoute)
app.use("/animals", animalRoute)

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
