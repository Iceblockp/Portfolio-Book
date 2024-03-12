import React from "react";
import projectImage from "../assets/img/project.png";

const LatestProject = ({thirdPageChange}) => {
  return (
    <div>
      <h1 className=" font-heading font-[900] text-lg text-center text-black ">
         Project 2{" "}
      </h1>

      <div style={{backgroundImage: `url(${projectImage})` }} className={` bg-center bg-cover w-full h-[130px] `}></div>
      <div className=" flex justify-between mt-2 ">
        <div className=" font-heading font-bold text-sm ">Disyuting</div>
        <a href="https://devdisyuting.netlify.app/" target="_black" className=" flex justify-center items-center gap-2 ">
          <div className=" text-xs text-sky-500 ">Live Preview </div>
          <span className=" text-sky-500 ">
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
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </span>
        </a>
      </div>
      <div className=" mt-1">
        <h1 className=" text-xs font-bold font-heading">Tech Used:</h1>
        <p className=" line-clamp-3 text-xs text-gray-600 leading-3 text-justify ">
         <span className=" text-black ">HTML, </span>
         <span className=" text-black ">Tailwind css, </span>
         <span>React and its various  libraries . </span>
         </p>
      </div>
      <div className=" w-full flex justify-around mt-2 ">
                  <a href="https://github.com/Iceblockp/disyuting.git" target="_blank"
                    
                    className=" text-xs py-2 px-5 inline-flex items-center gap-x-2 font-semibold rounded-md border border-transparent bg-sky-600 text-white hover:bg-sky-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Source Code
                  </a>

                  <button
                    type="button"
                    className=" py-2 px-5 inline-flex items-center gap-x-2 text-xs font-semibold rounded-md border border-sky-200 text-sky-500 hover:border-sky-600 hover:text-sky-600 disabled:opacity-50 disabled:pointer-events-none "
                  >
                    More Projects
                  </button>
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
