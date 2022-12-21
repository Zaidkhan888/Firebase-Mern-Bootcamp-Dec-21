import React , {useEffect} from 'react'
// import axios from "axios"


const Card = ({name}) => {



  // useEffect(() => {
  //   //fetching tasks after every render

  //   const resp = axios.fetch("http://localhost:3000/task/getTask")
  //   .then(res => res.data) 
  //   .then(res=> console.log(res))
  //   console.log(resp);
  
  // }, [])
  return (
    <div className='bg-secondary text-light p-5 border rounded mx-4 my-2 ' style={{width:"29%"}} >
      <h5>{name }</h5>
      <p>"desc "</p>
      <button className='btn btn-danger'>Delete</button>
    </div>
  )
}

export default Card
