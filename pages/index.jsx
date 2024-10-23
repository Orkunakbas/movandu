import React from 'react'
import { Link, Button } from "@nextui-org/react";

const index = () => {
  return (
    <div className="container mx-auto text-center h-[32rem] flex justify-center items-center">
      <div className="text">
        <h1 className='hero-title'> Für Einen Stressfreien <br></br>MOVANDU KI-ASSISTENT</h1>
        <p className='mb-[55px] mt-[15px] hero-text'>Vereinfachen Sie Ihren Transportprozess mit Künstlicher Intelligenz</p>
        <Button
          className='p-5 hero-button text-white'
          variant="shadow"
        >
          MIT KI UMZIEHEN
        </Button>
      </div>
      
    </div>
  )
}

export default index