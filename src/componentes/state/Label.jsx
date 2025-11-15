import React,{useState} from 'react';

export default function Labelln({texto}){
//hook
const[valor, setValor] = useState(texto)
//=========================
  return (
    <>
         {valor}
    </>
  );
}