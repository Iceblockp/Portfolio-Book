import React from 'react'

const LastCover = ({ firstTurn }) => {



  return (
    <div className=' w-full h-full flex flex-col justify-around items-center '>
      <div attr="thank." className=' thank font-heading uppercase text-[#3f61b6] font-bold text-7xl animated-text'>
        thank.
      </div>
      <button onClick={firstTurn} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Restart Page</button>
    </div>
  )
}

export default LastCover