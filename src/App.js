import React,{useState} from 'react'
import Input from "./Input";
const App = () => {
  const [count, setCount] = useState(null);
  const [count2, setCount2] = useState(null);

  const handlechange = (e) =>{
    setCount(e.target.value)
    console.log(count)
  }

  const handlechange2 = (e) =>{
    console.log(count2)
    setCount2(e.target.value)
  }

  return (
    <div>   
        Add Numbe program
        <input type="number" onChange={(e)=>handlechange(e)} value={count ? count : ""} />
        <input type="number" onChange={(e)=>handlechange2(e)} value={count2 ? count2 : ""}  />
        <Input value={count ? count : ""} values2={count2 ? count2 : ""}/>
    </div>
  )
}

export default App
