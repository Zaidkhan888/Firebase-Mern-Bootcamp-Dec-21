import { useState  , useEffect} from 'react'
import axios from "axios"
import './App.css'
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'


function App() {
  
 
// const [data , setData] = useState("")
const [todos ,setTodos] = useState([])

  useEffect(() => {
    //fetching tasks after every render

    const resp = axios.get("http://localhost:3000/task/getTask")
    .then(res=>setTodos(res))
    // .then(res => res.data) 
    // .then(res=> console.log(res))
    
  
  }, [])
  

  return (
      <Router>
      <Routes>
          <Route exact path ="/" element =  {<Home todos={todos}/>}/>
          <Route path="login" element={<Login/>}/>
     
      </Routes>
      </Router>
  )
}

export default App
