import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input type='text' className='p-2 m-2 col-span-9' placeholder='What would you like to watch today'/>
            <button className='py-2 px-2 m-2 bg-red-700 text-white rounded-lg col-span-3'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar;