import React from 'react'

const ContactMe = ({thirdPageChange}) => {
  return (
    <div>
      



       {/* page No  */}
       <div className=" flex justify-between text-xs absolute bottom-3 w-full text-center">
      <button onClick={thirdPageChange} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div>6</div>
        <div></div>
     
      </div>
    </div>
  )
}

export default ContactMe