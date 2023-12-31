import React from 'react'



const Subscribe = () => {
  return (
    <div className='text-center bg-wh-10 px-5 py-10'>
        <h4 className='font-semibold text-base'>Subscribe to our newsletter</h4>
        <p className='text-wh-500 my-3 w-5/6 mx-auto'>
            Enter email address to get top news and great deals
        </p>
        <input className='w-5/6 text-center py-2 px-5 border-2 min-w-[100px]' placeholder='Enter email address' type='email' />
        <button className='bg-accent-red text-wh-10 font-semibold w-5/6'>SUBSCRIBE</button>
    
    </div>
  )
}

export default Subscribe 