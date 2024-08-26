import React from 'react'
import projectImage from "../../assets/img/card.png"
import ReactIcon from '../icons/ReactIcon'
import CssIcon from '../icons/CssIcon'
import TailwindIcon from '../icons/TailwindIcon'
import HtmlIcon from '../icons/HtmlIcon'

const ProjectFour = ({ fourthPageChange }) => {
    return (
        <div>
            <h1 className=" font-heading font-[900] text-lg text-center text-black ">

            </h1>



            {/* page No  */}
            <div className=" flex justify-around text-xs absolute bottom-3 w-full text-center">
                <div></div>
                <div>7</div>
                <button onClick={fourthPageChange} >
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
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default ProjectFour