import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0)
    const handleAdd =()=>{
        const newCount = count + 1 ;
        setCount(newCount)
    }

    const handleAbuse =()=>{
        const newAbuse = count -1 ;
        setCount(newAbuse)
    }
    return(
        <div style={{border:'1px solid green',padding:'10px',borderRadius:'8px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAbuse}>Abuse</button>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}