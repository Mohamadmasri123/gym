import React from 'react'
import Navbar from './components/Navbar'
import bg from './assets/bg-BiCRh3MN.png'
import Hero from './components/Hero'
import  Equipment from './components/Equipment'

const bgStyle={
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  BackgroundAttachment: 'fixed',
}




const App = () => {
  return (
    <div className='overflow-hidden' >
    <div className='' style={bgStyle}>
      <Navbar />
      <Hero/>
    </div>
    <Equipment/>
    </div>
  )
}

export default App
