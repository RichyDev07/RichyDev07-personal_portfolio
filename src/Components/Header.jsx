import React from 'react'
import RichyImage from '../resources/images/Richy.jpg'


const Header =() =>{
  return (
    <div className='bg-primary'>
  <div>
  <img src={RichyImage} alt='Richy' className='img-fluid rounded-full w-45' />

  </div>
    </div>
  )
}

export default Header 