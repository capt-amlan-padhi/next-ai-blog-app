import React from 'react'
import Cards from 'app/(shared)/Cards'
import { Post } from '@prisma/client'

type Props = {
  travelPosts: Array<Post>;
}

const Travel = ({travelPosts}: Props) => {
  return (
    <section>
        <hr className='border-1'/>
        <div className='flex items-center gap-3 my-8'>
        <h4 className='bg-accent-green py-2 px-5 text-wh-900 text-sm font-bold'>
            TRAVEL
        </h4>
        <p className='font-bold text-2xl'>New Travel Experiences</p>
       </div>


       {/* Row of cards */}
       <div className='sm:flex justify-between gap-8'>
            <Cards className='basis-1/3  mt-5 sm:mt-0' imageHeight='h-80' post={travelPosts[0]} />
            <Cards className='basis-1/3  mt-5 sm:mt-0' imageHeight='h-80' post={travelPosts[1]} />
            <Cards className='basis-1/3  mt-5 sm:mt-0' imageHeight='h-80' post={travelPosts[2]} />
        </div>

        <Cards className=' sm:flex justify-between items-center gap-3 mt-7 mb-5' imageHeight='h-80' post={travelPosts[3]}/>
    </section>
  )
}

export default Travel