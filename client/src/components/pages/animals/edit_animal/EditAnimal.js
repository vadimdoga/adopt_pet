import React, { useEffect, useState, useRef } from "react"
import Cookies from "universal-cookie"
import "./css/EditAnimal.css"
import { useHistory } from "react-router-dom";
import rq from '../../../../axios.js'

export default function EditAnimal() {
  const cookies = new Cookies()
  const user_id = cookies.get("user_id")
  const history = useHistory()

  const [breeds, setBreeds] = useState([])
  const [hairtypes, setHairtypes] = useState([])
  const [colors, setColors] = useState([])
  const [gd, setGd] = useState("")
  const [bd, setBd] = useState("")

  const gdthings = useRef(null);
  const bdthings = useRef(null);

  const [petName, setPetName] = useState("")
  const [petAge, setPetAge] = useState(0)
  const [petColor, setPetColor] = useState("")
  const [petDescription, setPetDescription] = useState("")
  const [petGender, setPetGender] = useState("")
  const [petHairType, setPetHairType] = useState("")
  const [petBreed, setPetBreed] = useState("")
  const [petImages, setPetImages] = useState(null)

  useEffect(() => {
    if (isNaN(user_id)) {
      throw "Not Authorized"
    }

    const fetchData = async () => {
      const animalDetailsRes = await rq.get('/animals/details')
      const animalsRes = await rq.get(`/animals/user/${user_id}`)

      const details = animalDetailsRes.data.details
      const animals = animalsRes.data.data

      setBreeds(details.breeds)
      setHairtypes(details.hair_types)
      setColors(details.colors)
    }

    fetchData()
  }, [])

  const handleDeleteLi = (e) => {
    const li_to_delete = e.target.outerText
    let value

    if (e.target.parentElement.id === "gdthings") {
      value = gdthings
    } else if (e.target.parentElement.id === "bdthings") {
      value = bdthings
    }

    const ul = value.current
    const lis = ul.getElementsByTagName('li')

    for (let i = 0; i < lis.length; i++) {
      if(lis[i].outerText === li_to_delete)
        lis[i].remove()
    }

  }

  const thingsHandleClick = (ref) => {
    const ul = ref.current
    let check_doubles = false
    let value

    if (ref.current.id === "gdthings") {
      value = gd
    } else if (ref.current.id === "bdthings") {
      value = bd
    }

    check_doubles = value === ""

    const lis = ul.getElementsByTagName('li')

    for (let i = 0; i < lis.length; i++) {
      if (lis[i].outerText === value) {
        check_doubles = true
      }
    }

    if (lis.length < 3 && !check_doubles) {
      const li = document.createElement('li')
      li.innerText = value
      li.addEventListener("click", handleDeleteLi)

      ul.appendChild(li)
    }

    setGd("")
    setBd("")
  }

  const convertToBlob = async (files) => {
    const jsonData = {images: {}}
    const toBase64 = (file) => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

    const files_arr = Array.from(files)

    for (let i = 0; i < files_arr.length; i++) {
      const val = await toBase64(files_arr[i])
      jsonData["images"][`file${i}`] = val
    }

    return jsonData
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const postHabbits = (animal_id) => {
      //animal_habbits request
      //get good things li values
      const gdUl = gdthings.current
      const gdLis = gdUl.getElementsByTagName('li')
      const gdArr = []
      for (let i = 0; i < gdLis.length; i++) {
        gdArr.push(gdLis[i].outerText)
      }

      //get bad things li values
      const bdUl = bdthings.current
      const bdLis = bdUl.getElementsByTagName('li')
      const bdArr = []
      for (let i = 0; i < bdLis.length; i++) {
        bdArr.push(bdLis[i].outerText)
      }

      const habbits = {
        "animal_id": animal_id,
        "good_things": gdArr,
        "bad_things": bdArr
      }

      rq.post('/animals/habbits', habbits)
        .then(res => {
          return res.status
        })
    }

    const postImages = async (animal_id) => {
      // request to animal_images
      const jsonData = await convertToBlob(petImages)

      jsonData["animal_id"] = animal_id
      jsonData["user_id"] = user_id
      console.log(jsonData)

      rq.post('/animals/images', jsonData)
        .then(res => {
          return res.status
        })
    }

    //todo: input validator
    //create animal request

    const animal = {
      "user_id": user_id,
      "color": petColor,
      "breed": petBreed,
      "gender": petGender,
      "hair_type": petHairType,
      "name": petName,
      "age": petAge,
      "description": petDescription
    }

    rq.post('/animals', animal)
      .then(res => {
        const animal_id = res.data.animal_id[0].id
        if (res.data.status === 200) {
          const habbitsStatus = postHabbits(animal_id)
          const imagesStatus = postImages(animal_id)
          if (habbitsStatus === 200 && imagesStatus === 200) {
            alert("Animal added succesfull!")
            history.push('/animals')
          }
        } else {
          throw("Something went wrong!")
        }
      })

  }

  return (
    <form className="animal">
      <h2>Edit Animal</h2>
      <div className="animal__form">
        <div className="animal__form__left">
          <div class="form-group">
            <label for="name">Name</label>
            <input value={petName} onChange={(e) => setPetName(e.target.value)} type="text" class="form-control" id="name" />
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input value={petAge} onChange={(e) => setPetAge(e.target.value)} class="form-control" id="age" type="number" />
          </div>
          <div class="form-group">
            <label for="color">Color</label>
            <select onChange={(e) => setPetColor(e.target.value)} class="form-control" id="color">
              <option>Choose color</option>
              {
                colors.map(el => {
                  return <option key={el.id} value={el.color}>{el.color}</option>
                })
              }
            </select>
          </div>
          <div class="form-group">
            <label for="description">Short Description</label>
            <textarea value={petDescription} onChange={(e) => setPetDescription(e.target.value)} class="form-control" id="description" rows="3"></textarea>
          </div>
        </div>
        <div className="animal__form__middle">
          <div class="form-group">
            <label for="gender">Gender</label>
            <select onChange={(e) => setPetGender(e.target.value)} class="form-control" id="gender">
              <option>Choose gender</option>
              <option value="M">M</option>
              <option value="F">F</option>
            </select>
          </div>
          <div class="form-group">
            <label for="hair">Hair Type</label>
            <select onChange={(e) => setPetHairType(e.target.value)} class="form-control" id="hair">
              <option>Choose hair type</option>
              {
                hairtypes.map(el => {
                  return <option key={el.id} value={el.hair_type}>{el.hair_type}</option>
                })
              }
            </select>
          </div>
          <div class="form-group">
            <label for="breed">Breed</label>
            <select onChange={(e) => setPetBreed(e.target.value)} class="form-control" id="breed">
              <option>Choose breed</option>
              {
                breeds.map((el => {
                  return <option key={el.id} value={el.breed}>{el.breed}</option>
                }))
              }
            </select>
          </div>
          <input onChange={(e) => setPetImages(e.target.files)} type="file" name="filefield" multiple="multiple"></input>
        </div>
        <div className="animal__form__right">
          <div className="form-group">
            <label for="gdthings">Good Things</label>
            <div className="input">
              <input value={gd} onChange={e => {setGd(e.target.value)}} type="text" />
              <button className="btn btn-primary" type="button" onClick={() => thingsHandleClick(gdthings)}>Add</button>
            </div>
            <ul ref={gdthings} id="gdthings"></ul>
          </div>
          <div className="form-group">
            <label for="bdthings">Bad Things</label>
            <div className="input">
              <input value={bd} onChange={e => {setBd(e.target.value)}} type="text" />
              <button className="btn btn-primary" type="button" onClick={() => thingsHandleClick(bdthings)}>Add</button>
            </div>
            <ul ref={bdthings} id="bdthings"></ul>
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  )
}
