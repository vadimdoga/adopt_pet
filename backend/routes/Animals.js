const express = require("express")
const router = express.Router()
const db = require("../model/db")

router.get('/', (req, res) => {
  const limit = req.query.limit
  const sql = `select * from animals limit ${limit}`

  db.query(sql, (err, data, fields) => {
    if (err) return res.status(400).send(err.sqlMessage)

    res.json({
      status: 200,
      data
    })
  })
});

router.get('/user/:id', (req, res) => {
  const user_id = req.params.id

  db.query('select * from animals where user_id=?', [user_id], (err, data) => {
    if (err) return res.status(400).send(err.sqlMessage)

    res.json({
      status: 200,
      data
     });
  })
});

router.get('/animal/:id', (req, res) => {
  const animal_id = req.params.id

  db.query(`select * from animals where id = ${animal_id}`, (err, data) => {
    res.json({
      status: 200,
      data
     });
  })
});

//todo: try catch for query
router.post('/', async (req, res) => {
  const get_color_promise = new Promise((resolve, reject) => {
    db.query(`select id from animal_colors where color = ?`, [req.body.color], (err, data) => {
      if(err) return res.status(400).send(err.sqlMessage);
      resolve(data[0].id)
    })
  })

  const get_breed_promise = new Promise((resolve, reject) => {
    db.query(`select id from animal_breeds where breed = ?`, [req.body.breed], (err, data) => {
      if(err) return res.status(400).send(err.sqlMessage);
      resolve(data[0].id)
    })
  })

  const get_hair_type_promise = new Promise((resolve, reject) => {
    db.query(`select id from animal_hair_types where hair_type = ?`, [req.body.hair_type], (err, data) => {
      if(err) return res.status(400).send(err.sqlMessage);
      resolve(data[0].id)
    })
  })

  const get_gender_promise = new Promise((resolve, reject) => {
    db.query(`select id from genders where gender = ?`, [req.body.gender], (err, data) => {
      if (err) return res.status(400).send(err.sqlMessage);
      resolve(data[0].id)
    })
  })

  const get_user_animals_promise = new Promise((resolve, reject) => {
    db.query(`select name from animals where user_id = ?`, [req.body.user_id], (err, data) => {
      if (err) return res.status(400).send(err.sqlMessage);
      if(data.length === 0) return resolve(false)
      //check for same name of the animal
      let checkUnique = false
      data.forEach((el) => {
        if (el.name === req.body.name)
          checkUnique = true
      })

      if (checkUnique)
        return resolve(true)
      else
        return resolve(false)
    })
  })

  const color_id = await get_color_promise
  const breed_id = await get_breed_promise
  const hair_type_id = await get_hair_type_promise
  const gender_id = await get_gender_promise
  const get_user_animals = await get_user_animals_promise


  if (!get_user_animals) {
    const create_animal_promise = new Promise((resolve, reject) => {
      const sql = `INSERT INTO animals(user_id, color_id, gender_id, breed_id, hair_type_id, name, age, description) values(?)`
      const values = [
        req.body.user_id,
        color_id,
        gender_id,
        breed_id,
        hair_type_id,
        req.body.name,
        req.body.age,
        req.body.description
      ]

      db.query(sql, [values], (err, data) => {
        if (err) return res.status(400).send(err.sqlMessage);
        resolve(true)
      })
    })

    const create_animal = await create_animal_promise
    if (create_animal) {
      db.query('select id from animals where name=?', [req.body.name], (err, data) => {
        res.json({
          status: 200,
          message: "New animal added succesfully",
          "animal_id": data
        });
      })
    }
  } else {
     res.status(400).send("Animal with such name already exists!");
  }
});

router.post('/habbits', async (req, res) => {
  let check_good = false
  let check_bad = false

  const get_good_things = new Promise((resolve, reject) => {
    db.query(`select good_thing from good_things where animal_id = ?`, [req.body.animal_id], (err, data) => {
      if(err) return res.status(400).send(err.sqlMessage);
      resolve(data)
    })
  })

  const get_bad_things = new Promise((resolve, reject) => {
    db.query(`select bad_thing from bad_things where animal_id = ?`, [req.body.animal_id], (err, data) => {
      if(err) return res.status(400).send(err.sqlMessage);
      resolve(data)
    })
  })

  const good_things = await get_good_things
  const bad_things = await get_bad_things

  try {
    good_things.forEach(el => {
      if (req.body.good_things.includes(el.good_thing))
        check_good = true
    })

    bad_things.forEach(el => {
      if (req.body.bad_things.includes(el.bad_thing))
        check_bad = true
    })
  } catch (error) {
    res.status(400).send(error)
  }

  if (check_good) {
    res.json({
      status: 400,
      message: "Habbits from good already exist!"
    });
  } else if (check_bad) {
    res.json({
      status: 400,
      message: "Habbits from bad already exist!"
    });
  } else {
    try {
      req.body.good_things.forEach(el => {
        db.query(`insert into good_things(animal_id, good_thing) values (${req.body.animal_id}, ?)`, [el], (err, data) => {
          if (err) return res.status(400).send(err.sqlMessage);
        })
      });

      req.body.bad_things.forEach(el => {
        db.query(`insert into bad_things(animal_id, bad_thing) values (${req.body.animal_id}, ?)`, [el], (err, data) => {
          if (err) return res.status(400).send(err.sqlMessage);
        })
      });

      // res.json({
      //   status: 200,
      //   message: "Habbits added succesfully"
      // });
    } catch (error) {
      res.status(400).send(error)
    }
  }
});

router.get('/habbits/:id', async (req, res) => {
  const animal_id = req.params.id

  const get_good_things = new Promise((resolve, reject) => {
    db.query(`select good_thing, id from good_things where animal_id = ?`, [animal_id], (err, data) => {
      if(err) return res.status(400).send(err.sqlMessage);
      resolve(data)
    })
  })

  const get_bad_things = new Promise((resolve, reject) => {
    db.query(`select bad_thing from bad_things where animal_id = ?`, [animal_id], (err, data) => {
      if(err) return res.status(400).send(err.sqlMessage);
      resolve(data)
    })
  })

  const good_things = await get_good_things
  const bad_things = await get_bad_things

  if (good_things !== [] && bad_things !== [])
    res.json({
      status: 200,
      good_things,
      bad_things
     });
  else
    res.status(400);

});

router.get('/details', async (req, res) => {
  const get_breed_promise = new Promise((resolve, reject) => {
    db.query(`select * from animal_breeds`, (err, data) => {
      if(err) return res.status(400).send(err.sqlMessage);
      resolve(data)
    })
  })
  const get_hair_type_promise = new Promise((resolve, reject) => {
    db.query(`select * from animal_hair_types`, (err, data) => {
      if(err) return res.status(400).send(err.sqlMessage);
      resolve(data)
    })
  })
  const get_color_promise = new Promise((resolve, reject) => {
    db.query(`select * from animal_colors`, (err, data) => {
      if(err) return res.status(400).send(err.sqlMessage);
      resolve(data)
    })
  })

  const breeds = await get_breed_promise
  const hair_types = await get_hair_type_promise
  const colors = await get_color_promise

  res.json({
    status: 200,
    details: {
      breeds: breeds,
      hair_types: hair_types,
      colors: colors
    }
   });
})

router.post('/images', (req, res) => {
  const sql = `insert into animal_images(animal_id, user_id, image) values(?)`
  const json_length = Object.keys(req.body.images).length

  for (let i = 0; i < json_length; i++) {
    let file = req.body.images[`file${i}`]
    const values = [
      req.body.animal_id,
      req.body.user_id,
      file
    ]
    db.query(sql, [values], (err, data) => {
      if (err) return console.log(err.sqlMessage)

      res.json({
        status: "Images added succesfull"
       });
    })
  }
});

router.get('/images/user/:id', (req, res) => {
  const user_id = req.params.id

  db.query(`select image, animal_id from animal_images where user_id = ${user_id}`, (err, data) => {
    if (err) return res.status(400).send(err.sqlMessage);

    res.json({
      status: 200,
      data
     });
  })
});

router.get('/images/:id', (req, res) => {
  const animal_id = req.params.id

  db.query(`select image, id from animal_images where animal_id = ${animal_id}`, (err, data) => {
    if (err) return res.status(400).send(err.sqlMessage);

    res.json({
      status: 200,
      data
     });
  })
});

module.exports = router
