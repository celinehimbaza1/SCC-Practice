import { useState } from "react";

export function Toy(){
const [toi,setToi]= useState('zoe')
const [number,setNumber]= useState(0)

// const ChangeToy= (toi) => setToi('tokyo')
const checkNumber= () => {
    if (number>0){
setNumber(number-1) 
    }
    else {
        console.log('not allowed')
        alert('The number must be greather than 0')
    }
}
return(
    <div>
        <h1>My Toy is {toi}</h1>
        <button className="bg-green-600 text-white" onClick={() => setToi('tokyo')}>Change Toy</button>
    <h1 className="pt-6">Count:{number}</h1>
    <button className="bg-pink-800 text-white" onClick={()=>setNumber(number+1)}>
Increase
    </button>
  <button className="bg-green-700 text-white" onClick={checkNumber}>Decrease</button>
    </div>
)   
}
