import React from "react";
import projectImage from "../../assets/img/project.png";
import HtmlIcon from "../icons/HtmlIcon";
import CssIcon from "../icons/CssIcon";
import TailwindIcon from "../icons/TailwindIcon";
import ReactIcon from "../icons/ReactIcon";
import { projects } from "../data/projectData";
import { useDispatch } from "react-redux";
import { open } from "../../store/slice/dialogSlice";

const LatestProject = ({ thirdPageChange }) => {
  const dispatch = useDispatch()
  return (
    <div>
      <h1 className=" font-heading font-[900] text-lg text-center text-black ">
        Projects
      </h1>


      <div className=' w-full grid grid-cols-2 gap-4 '>

        {projects.filter((el) => el.id > 4).map((project) => (
          <div key={project.id} onClick={() => dispatch(open(project.id))} style={{ boxShadow: "0px 0px 5px #6B7280" }} className=' cursor-pointer ' >
            <img className=' aspect-video ' src={project.image} alt="" />
            <h2 className=' tracking-tighter font-[900] text-black text-sm px-2 '>{project.title}</h2>
            <p className=' text-[10px] mb-2 tracking-tighter px-2 font-bold '>{project.page} landing page</p>
          </div>

        ))}

      </div>

      {/* page No  */}
      <div className=" flex justify-around text-xs absolute bottom-3 w-full text-center">
        <div></div>
        <div>5</div>
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
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LatestProject;
