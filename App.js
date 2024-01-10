
import React, { useCallback, useState } from 'react'
import './App.css'
import Valor from './componentes/Valor'
import Resultado from './componentes/Resultado'




export default function App(){


   const [todosValores, setTodosValores] = useState({
      valor1: 0, 
      valor2: 0
   })

    const handleChange =(ev)=>{
      setTodosValores({...todosValores, [ev.target.name] : ev.target.value})

    }

 return (
    <>
    <Valor name = {'valor1'} value = {todosValores.mercado} handleChange = {handleChange} /> 
    <Valor name = {'valor2'} value = {todosValores.aluguel} handleChange = {handleChange} /> 

    <Resultado total = {parseFloat(todosValores.valor1) + parseFloat(todosValores.valor2)}/> 
    
    
    </>
    
 )

  
}

