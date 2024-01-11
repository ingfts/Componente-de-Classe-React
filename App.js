
import React, { useCallback, useState } from 'react'
import './App.css'
import Valor from './componentes/Valor'
import Resultado from './componentes/Resultado'




export default function App(){


  

 return (
    <>
    <Valor pai = "Valor Pai">
      <h2> este é um h2 filho</h2>
      <p> este é um p filho</p>
      
    </Valor>
    
    
    </>
    
 )

  
}

