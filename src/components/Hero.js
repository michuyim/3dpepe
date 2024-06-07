import React from 'react';
import './hero.css';
import { Button } from 'react-bootstrap';

const Hero = () => {

  return (
   <>
   <div className="hero-section text-center">
      <img src='/images/p3d-5.png' className='hero-img' alt="Pepe looking at the moon" />

      <div className='text-center tes'>
        <h1 className='display-5 fw-bolder img-fluid'>PEPE 3D</h1>
        <p className='text-center fs-6'>You've all seen the 2D pepe do its runs, how's about adding another dimension to that! 3D PEPE. LFG 🐸🐸🐸</p>
        <Button className='btn hbtn btn-sm mt-4'  href="https://t.me/Pepe3Dmemes" target="_blank" rel="noopener noreferrer" type='button'>Join Us</Button>
      </div>

   </div>
   </>
  )
}

export default Hero;