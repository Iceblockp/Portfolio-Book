import React from "react";
import LaravelIcon from "../icons/LaravelIcon";
import PhpIcon from "../icons/PhpIcon";
import TsIcon from "../icons/TsIcon";
import NextJsIcon from "../icons/NextJsIcon";
import ReactIcon from "../icons/ReactIcon";
import JsIcon from "../icons/JsIcon";
import CssIcon from "../icons/CssIcon";
import HtmlIcon from "../icons/HtmlIcon";

const MySkills = ({ SecondPageChange }) => {
  return (
    <div>
      <h1 className=" font-[900] font-heading text-center text-lg ">
        My Skills
      </h1>
      <div>
        <h3 className=" font-bold text-sm font-heading mt-3 ">Front-End</h3>
        <div className=" flex flex-wrap gap-2 ">
          <div className=" w-[52px] h-12 border-b-2 border-e-2 border border-sky-500 rounded-md ">
            <div className=" flex justify-center mt-1 ">
              <HtmlIcon className=" w-6 h-6" />
            </div>
            <div className=" font-heading text-center text-xs font-bold tracking-tighter ">
              HTML
            </div>
          </div>

          <div className=" w-[52px] h-12 border-b-2 border-e-2 border border-sky-500 rounded-md ">
            <div className=" flex justify-center mt-1 ">
              <CssIcon className=" h-6 w-6" />
            </div>
            <div className=" font-heading text-center text-xs font-bold tracking-tighter ">
              CSS
            </div>
          </div>

          <div className=" w-[52px] h-12 border-b-2 border-e-2 border border-sky-500 rounded-md ">
            <div className=" flex justify-center mt-1 ">
              <JsIcon className=" w-6 h-6" />
            </div>
            <div className=" font-heading text-center text-xs font-bold tracking-tighter ">
              JS
            </div>
          </div>

          <div className=" w-[52px] h-12 border-b-2 border-e-2 border border-sky-500 rounded-md ">
            <div className=" flex justify-center mt-1 ">
              <ReactIcon className=" w-6 h-6" />
            </div>
            <div className=" font-heading text-center text-xs font-bold tracking-tighter ">
              React
            </div>
          </div>

          <div className=" w-[52px] h-12 border-b-2 border-e-2 border border-sky-500 rounded-md ">
            <div className=" flex justify-center mt-1 ">
              <NextJsIcon className="size-6 fill-sky-500" />
            </div>
            <div className=" font-heading text-center text-xs font-bold tracking-tighter ">
              NextJs
            </div>
          </div>

          <div className=" w-[52px] h-12 border-b-2 border-e-2 border border-sky-500 rounded-md ">
            <div className=" flex justify-center mt-1 ">
              <TsIcon className="size-6 fill-sky-500" />
            </div>
            <div className=" font-heading text-center text-xs font-bold tracking-tighter ">
              TS
            </div>
          </div>

        </div>


        <h3 className=" font-heading font-bold text-sm mt-3 ">Back-End</h3>
        <div className=" flex flex-wrap gap-2">
          <div className=" w-[52px] h-12 border-b-2 border-e-2 border border-sky-500 rounded-md ">
            <div className=" flex justify-center mt-1 ">
              <PhpIcon className=" w-6 h-6" />
            </div>
            <div className=" font-heading text-center text-xs font-bold tracking-tighter ">
              PHP
            </div>
          </div>


          <div className=" w-[52px] h-12 border-b-2 border-e-2 border border-sky-500 rounded-md ">
            <div className=" flex justify-center mt-1 ">
              <LaravelIcon className=" w-6 h-6" />
            </div>
            <div className=" font-heading text-center text-xs font-bold tracking-tighter ">
              Laravel
            </div>
          </div>



        </div>
        {/* <h3 className=" font-bold font-heading text-sm mt-3 ">UI/UX Design</h3>
        <div>
        <div className=" w-[52px] h-12 border-b-2 border-e-2 border border-sky-500 rounded-md ">
            <div className=" flex justify-center mt-1 ">
            <svg className=" w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#0ea5e9" d="M14 95.8C14 42.9 56.9 0 109.8 0H274.2C327.1 0 370 42.9 370 95.8C370 129.3 352.8 158.8 326.7 175.9C352.8 193 370 222.5 370 256C370 308.9 327.1 351.8 274.2 351.8H272.1C247.3 351.8 224.7 342.4 207.7 326.9V415.2C207.7 468.8 163.7 512 110.3 512C57.5 512 14 469.2 14 416.2C14 382.7 31.2 353.2 57.2 336.1C31.2 319 14 289.5 14 256C14 222.5 31.2 193 57.2 175.9C31.2 158.8 14 129.3 14 95.8zM176.3 191.6H109.8C74.2 191.6 45.4 220.4 45.4 256C45.4 291.4 74 320.2 109.4 320.4C109.5 320.4 109.7 320.4 109.8 320.4H176.3V191.6zM207.7 256C207.7 291.6 236.5 320.4 272.1 320.4H274.2C309.7 320.4 338.6 291.6 338.6 256C338.6 220.4 309.7 191.6 274.2 191.6H272.1C236.5 191.6 207.7 220.4 207.7 256zM109.8 351.8C109.7 351.8 109.5 351.8 109.4 351.8C74 352 45.4 380.8 45.4 416.2C45.4 451.7 74.6 480.6 110.3 480.6C146.6 480.6 176.3 451.2 176.3 415.2V351.8H109.8zM109.8 31.4C74.2 31.4 45.4 60.2 45.4 95.8C45.4 131.4 74.2 160.2 109.8 160.2H176.3V31.4H109.8zM207.7 160.2H274.2C309.7 160.2 338.6 131.4 338.6 95.8C338.6 60.2 309.7 31.4 274.2 31.4H207.7V160.2z" /></svg>


            </div>
            <div className=" font-heading text-center text-xs font-bold tracking-tighter ">
              Figma
            </div>
          </div>
        </div> */}
      </div>

      {/* page No  */}
      <div className=" flex justify-around text-xs absolute bottom-3 w-full text-center">
        <div></div>
        <div>3</div>
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
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MySkills;
