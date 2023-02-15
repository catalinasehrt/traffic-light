import React from "react";
import { useState } from "react";

export function Traffic(){
    const [luz, setLuz]=useState("")
    return <div className= "container">
     <div className="col-1 m-5 p-3 ">

     <button className={luz==="rojo"? "rojo encendido" : "rojo"
     } onClick={()=>{
        setLuz("rojo")
     }}></button>

     <button className={luz==="amarillo"? "amarillo encendido" : "amarillo"
     } onClick={()=>{
        setLuz("amarillo")
     }}>  </button>

     <button className={luz==="verde"? "verde encendido" : "verde"
     } onClick={()=>{
        setLuz("verde")
     }}></button>
    </div>
   </div>

}