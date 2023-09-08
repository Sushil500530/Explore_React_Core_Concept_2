import { useState } from "react"

export default function Team(){
    const [count,setTeam] = useState(11)

    const handleAdd =()=>{
        const newTeam = count + 1 ;
        setTeam(newTeam)
    }

    const handleRemove =()=>{
        const newRemove = count - 1 ;
        setTeam(newRemove)
    }
    const teamStyle = {
        border:'2px solid tomato',
        margin:'15px',
        padding:'15px',
        borderRadius:'8px'
        
    }
    return(
        <div style={teamStyle}>
            <h3>Players: {count}</h3>
            <button onClick={handleRemove}>Remove</button>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}