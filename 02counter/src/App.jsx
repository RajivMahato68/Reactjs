import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)


  // let counter = 5
 
const AddValue = () => {
  // console.log("clicked ", counter)
  // counter = counter + 1
  if (counter <= 19) {
    setCounter(counter + 1)
  }
  
}

const RemoveValue = () => {
  if (counter <= 0) {
    alert("sorry")
  }
  else{
  setCounter(counter - 1)
  }
}

  return (
    <>
  <h1>Chai aur Reat</h1>
  <h2>Counter Value : {counter}</h2>

  <button onClick={AddValue}>Add Value{counter}</button>
  <br />
  <button onClick={RemoveValue}>Remove Value {counter} </button>
<p>footer: {counter}</p>
    </>
  )
}

export default App
