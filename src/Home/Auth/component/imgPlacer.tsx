import React from 'react'

const ImgPlacer = () => {
  return (
    <div className='-z-10'>
         <img src='/Vehicles.svg' width={45} height={45} className='fixed left-[15%] top-1/2'/>
        <img src="/Truck.svg" width={45} height={45} className='fixed bottom-10 left-14' />
        <img src="/Bike.svg" width={45} height={45} className='fixed right-[17%] top-[25%]' /> 
    </div>
  )
}

export default ImgPlacer