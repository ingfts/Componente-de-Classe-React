import React from "react"

export default function Valor(props){




    return (

        <>

      <h1> Este h1 vem do 'Valor.js' </h1>
      {props.children[0]}
      {props.children[1]}
      {props.pai}

        </>
    )
       

        
    
}