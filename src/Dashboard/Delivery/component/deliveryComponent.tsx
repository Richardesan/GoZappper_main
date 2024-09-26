import React, {useState} from 'react'
import CustomSelect from '../../../Home/Auth/component/customSelect';

const DeliveryComponent = () => {
const history = [
    {
        name: "cancelled",
        time: "10:45AM",
        status: false
    },

    {
        name: "Delivery created",
        time: "10:45AM",
        status: true
    }
]

const [selectedValue, setSelectedValue] = useState('');

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  
];

  return (
    <div className='rounded-lg border-2 border-borderCol w-full mt-12 p-5'>
        <p className='font-bold'>Delivery</p>
        <p className='text-sm mt-1 text-lightText'>DEL-20230828-XY12345678-65738</p>
        <section className='flex items-start gap-20 mt-6'>

        <div className="flex-1">
            <p className='text-sm text-[#545454] font-bold mb-2'>Next Step</p>
           
<CustomSelect   options={options} onSelect={(value) => setSelectedValue(value)}/>
<p className="mt-4">Selected Value: {selectedValue}</p>

            <button className='bg-custom-gradient shadow-custom-combined py-2 px-8 text-white rounded-lg mt-6'>
Apply
            </button>
        </div>
        <div className='flex-1 mr-14 text-sm'>
            <p className='font-bold mb-4'>History</p>
            {history.map((data, index)=> {
                return(
                    <div key={index} className=' flex justify-between items-center font-[600] space-y-3'>
                        <div className="flex gap-2 items-center">
                        {data.status ? <img src='/Green.svg' />: <img src='/cancel.svg' width={17} height={17} />}
                        <p className='text-[#333333]'>{data.name}</p> 

                        </div>
                       <p className='text-lightText '>{data.time}</p> 
                    </div>
                )
            })}
        </div>
        </section>

    </div>
  )
}

export default DeliveryComponent