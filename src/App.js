import React from "react"
import Linia from "./Components/Linia"
import linies from './teatreLinies'

function App() {
  const textObra = linies.map(text => <Linia key ={text.id} text ={text}/>)

  return (
    <div>
      {textObra}
    </div>
  )
}

export default App
