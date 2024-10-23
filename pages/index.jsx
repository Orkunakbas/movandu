import React from 'react'
import { Link, Button } from "@nextui-org/react";

const index = () => {
  return (
    <div className="container mx-auto text-center h-[32rem] flex justify-center items-center">
      <div className="text">
        <h1>Forget Everything You <br></br>Know About Insurance</h1>
        <p className='mb-[75px]'>Instant everything. Incredible prices. Big heart.</p>
        <Button
          className='p-5 header-button text-white'
          variant="shadow"
        >
          Check Our Prices
        </Button>
      </div>
      
    </div>
  )
}

export default index