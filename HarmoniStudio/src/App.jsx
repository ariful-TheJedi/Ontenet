import { useState } from 'react'
import Header from "./Compoenets/Header"

import './App.css'
import Contact from './Compoenets/Contact'
import Home from './Compoenets/Home'
import AboutUs from './Compoenets/Aboute'
import Projects from './Compoenets/Projects'

function App() {
  let [actComponent,setActive] = useState("Home")

  console.log(actComponent)
  return (
   <div className='H-studio'>
      <Header setActive={setActive}/>
      {actComponent == "Home" && <Home/>}
      {actComponent == "About" && <AboutUs/>}
      {actComponent == "Contact" && <Contact/>}
      {actComponent == "Projects" && <Projects/>}
   </div>
  )
}

export default App
