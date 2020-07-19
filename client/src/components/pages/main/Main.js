import React, {useEffect} from 'react'
import './css/Main.css'
import Pet from '../Pet/PetIcon/Pet'
import Cookies from 'universal-cookie'

export default function Main() {
  const cookies = new Cookies()
  useEffect(() => {
    console.log(cookies.getAll())
  }, []);

  return (
    <div className="main">
      <h2>Featured Pets</h2>
      <div className="main--align">
        <div className="main__petGrid">
          <Pet gender="M" color="beige" age="2" name="Charlie" imgSrc="https://icatcare.org/app/uploads/2019/09/The-Kitten-Checklist-1.png" />
          <Pet gender="M" color="beige" age="2" name="Charlie" imgSrc="https://icatcare.org/app/uploads/2019/09/The-Kitten-Checklist-1.png" />
          <Pet gender="M" color="beige" age="2" name="Charlie" imgSrc="https://icatcare.org/app/uploads/2019/09/The-Kitten-Checklist-1.png" />
          <Pet gender="M" color="beige" age="2" name="Charlie" imgSrc="https://icatcare.org/app/uploads/2019/09/The-Kitten-Checklist-1.png" />
          <Pet gender="M" color="beige" age="2" name="Charlie" imgSrc="https://icatcare.org/app/uploads/2019/09/The-Kitten-Checklist-1.png" />
          <Pet gender="M" color="beige" age="2" name="Charlie" imgSrc="https://icatcare.org/app/uploads/2019/09/The-Kitten-Checklist-1.png" />
        </div>

        <div className="main__donate">
          <h3>Donate for Pets</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
        </div>
      </div>
    </div>
  )
}
