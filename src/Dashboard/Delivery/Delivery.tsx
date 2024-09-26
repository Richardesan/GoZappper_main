import React, { useState } from 'react'
import HeaderText from '../components/headerText'
import DeliveryComponent from './component/deliveryComponent'

const Delivery = () => {
  const [simulatedDelivery, setSimulateDelivery] = useState(true) 

  function handleDelivery() {
    setSimulateDelivery(false)
  }
  
  return (
    <main className='w-full'>
       <HeaderText 
        headerText={`Set up and manage simulated deliveries
          to support and streamline the development process.`}
        headerTitle='Delivery Simulator'
        buttonText='Create Delivery'
        img='/Plus.svg'
        handleDelivery={handleDelivery} 
      />
     {simulatedDelivery? <p className="h-full text-center text-base p-40 text-lightText ">
      No simulated delivery yet
     </p> : 
     <DeliveryComponent />}
    </main>
  )
}

export default Delivery
