import React from 'react'
import Card from '../components/Card'
import Form from '../components/Form'
const Home = ({todos}) => {
  // console.log(props.todos);
  return (
    <div className='container'>
      



    <h1 className='p-5 text-center'>Task Dashboard -1</h1>

    {/* multar ,  */}

    <Form/>


    {/* {
      todos.data.map((t)=>{})
    } */}
   {
    todos.data?.map((t)=><Card name={t.name} />)
   }

    <div className='d-flex p-5 flex-wrap justify-content-between '>
    
    {/* <Card />
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/> */}
    
    </div>

 
    </div>
  )
}

export default Home
