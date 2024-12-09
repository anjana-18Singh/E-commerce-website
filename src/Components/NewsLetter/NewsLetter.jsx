import React from 'react'
import './NewLetter.css'

const NewLetter = () => {
  return (
    <div className='newsletter'>
       <h1>Get Exclusive Offers on Your Email</h1> 
       <p>Subcribe to our newsletter and stay updated</p>
       <div>
        <input type="email" placeholder='Your Email id'></input>
        <button>Subcribe</button>
       </div>

    </div>
  )
}

export default NewLetter
