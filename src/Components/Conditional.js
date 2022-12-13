import React from 'react'

function Conditional() {
    const user = "mohamud"
    const handleClick = (user) =>{
        user ? console.log(`hello ${user}`) : console.log('nter your name')
    }
    

   
    
  return (
    <div>
       
       
        <button onClick={() => handleClick(user,'mohamud')}>click</button>
    </div>
  )
}

export default Conditional;