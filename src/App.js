import { useState } from 'react'
import './App.css';

function App() {
  const [ buttonColor, setButtonColor ] = useState('red')
  const [ checkbox, setCheckbox ] = useState(false) 
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'

  return (
    <div >
      <button 
        style={{background: buttonColor}} 
        onClick={()=>{setButtonColor(newButtonColor)}}
        disabled={checkbox}
      >
        Change to {newButtonColor}
      </button>
      <input type='checkbox' checked={checkbox} onClick={()=>setCheckbox(!checkbox)}/>
    </div>
  );
}

export default App;
