import React from 'react'
import touche from "../../assets/img/touche.png"
import HtmlIcon from '../icons/HtmlIcon'
import TailwindIcon from '../icons/TailwindIcon'
import CssIcon from '../icons/CssIcon'
import ReactIcon from '../icons/ReactIcon'
import DialogBox from '../common/DialogBox'
import { useDispatch } from 'react-redux'
import { open } from '../../store/slice/dialogSlice'
import { projects } from '../data/projectData'

const ProjectOne = ({ SecondPageChange }) => {
    const dispatch = useDispatch();

    return (
        <div className=' flex flex-col h-full pb-8'>
            <h1 className=" font-heading mb-3 font-[900] text-lg text-center text-black ">
                Projects
            </h1>

            <div className=' w-full grid grid-cols-2 gap-4 '>

                {projects.filter((el) => el.id < 5).map((project) => (
                    <div key={project.id} onClick={() => dispatch(open(project.id))} style={{ boxShadow: "0px 0px 5px #6B7280" }} className=' cursor-pointer ' >
                        <img className=' aspect-video ' src={project.image} alt="" />
                        <h2 className=' tracking-tighter font-[900] text-black text-sm px-2 '>{project.title}</h2>
                        <p className=' text-[10px] mb-2 tracking-tighter px-2 font-bold '>{project.page} landing page</p>
                    </div>

                ))}

            </div>

            {/* page No  */}
            <div className=" flex justify-between text-xs absolute bottom-3 w-full text-center">
                <button onClick={SecondPageChange} >
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
                <div>4</div>
                <div></div>

            </div>
        </div>
    )
}

export default ProjectOne