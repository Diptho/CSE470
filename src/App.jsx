import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import PopularClasses from './components/PopularClasses'
import PopularInstructor from './components/PopularInstructor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar> 
    <Banner></Banner> 
    <PopularClasses></PopularClasses>
    <PopularInstructor></PopularInstructor>
    </>
  )
}

export default App
