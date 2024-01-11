
import React, {useEffect, useState } from 'react'
import './App.css'





export default function App(){

const [contagem, setContagem] = useState(0) 

useEffect(
  // ()=>console.log("pagina atualizada"),
  ()=>window.alert("pagina atualizada " + contagem + ' vezes')

)

useEffect(
  ()=>console.log("pagina atualizada " + contagem + ' vezes')
)

 return (
    <>

    <p>Numero de carregamentos: {contagem}</p>
    <button onClick={()=>setContagem(contagem + 1)}>Contar</button>
    
    </>
    
 )

  
}

