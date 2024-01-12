
import React, {useEffect, useState } from 'react'
import './App.css'
import { keyboard } from '@testing-library/user-event/dist/keyboard'





export default function App(){


const [senha, setSenha] = useState()

const handleChange=(x)=>{
  return setSenha(x.target.value)

}


const gravar_senha=(keyPass, keyValue)=>{
  localStorage.setItem(keyPass, keyValue)
}

const ver_senha =(keyPass)=>{
  alert(localStorage.getItem(keyPass))
}

const deletar_senha=(keyPass)=>{
  localStorage.removeItem(keyPass)

}

 return (
    <>
    <main className='main'>
      <p>Definição de senha</p>
    <input type='password' placeholder='Enter your password' onChange={handleChange}></input>
    <button onClick={()=>gravar_senha('keyPass', senha)}>Gravar senha</button>
    <button onClick={()=>ver_senha('keyPass', senha)}>Ver senha</button>
    <button onClick={()=>deletar_senha('keyPass', senha)}>Deletar senha</button>
    </main>
   
    
    </>
    
 )

  
}

