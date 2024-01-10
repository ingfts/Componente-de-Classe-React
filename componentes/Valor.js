import React from "react"

export default function Valor(props){




    return (

        <>
        <label> valor </label><input type="text" name = {props.name} value = {props.value} onChange= {props.handleChange} ></input><br/>

   

        </>
    )
       

        
    
}