import { useState } from 'react'
import './index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom"
import Home from '../Components/Home'
import Destination from '../Components/Destination'
import Crew_Commander from '../Components/Crew_Commander'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <div className="App">
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path ="Destination" element={<Destination />}/>
        <Route path ="Crew_Commander" element={<Crew_Commander />}/>
      </Routes>
    </div>



    </div>
    
  )
}

export default App
