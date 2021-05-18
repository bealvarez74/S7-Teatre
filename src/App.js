import React from 'react'
import Linia from './Components/Linia'
import linies from './teatreLinies'
import {Stylediv, Stylep, Stylebutton} from'./styled'


function App() {
  const textObra = linies.map(text => <Linia key ={text.id} text ={text}/>)

  return (
    <div>
      <Stylediv>
      <Stylebutton>prev</Stylebutton>
      <Stylebutton>next</Stylebutton> 
      <Stylep>   
        {textObra}
      </Stylep>
      </Stylediv>   
    </div>
  )
}

export default App
