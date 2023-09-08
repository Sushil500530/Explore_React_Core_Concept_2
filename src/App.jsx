
import './App.css'
import Counter from './Counter'
import Team from './Team'
import User from './User'
import Friends from './Friends'



function App() {

  function handleClick(){
    alert('button clicked!')
  }

  const handleClick2 =()=>{
    alert('button 2 clicked!')
  }

  const addFive =(num) =>{
    alert(num + 5)
  }
  return (
    <>
      <h1> React Core Concept-2</h1>
        <Friends></Friends>

        <User></User>


      <Team></Team>
      <Counter></Counter>
     <button onClick={handleClick}>Click Me</button>
     <button onClick={handleClick2}>Click Me 2</button>
     <button onClick={()=>{alert('hellow tui ki paicis')}}>third clicked</button>
     <button onClick={()=>{addFive(5)}}>Four</button>
    </>
  )
}

export default App
