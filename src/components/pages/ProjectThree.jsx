import React from 'react'
import dashboard from "../../assets/img/dashboard.png"
import HtmlIcon from '../icons/HtmlIcon'
import CssIcon from '../icons/CssIcon'
import TailwindIcon from '../icons/TailwindIcon'
import ReactIcon from '../icons/ReactIcon'

const ProjectThree = ({ thirdPageChange }) => {
    return (
        <div>
            <h1 className=" font-heading font-[900] text-lg text-center text-black ">
                More projects are in progress...
            </h1>



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

export default ProjectThree