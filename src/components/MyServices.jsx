import React from "react";

const MyServices = ({SecondPageChange}) => {
  return (
    <div>
      <h1>My Services</h1>
      <div className=" grid grid-cols-2 w-full gap-3  ">
        <div className=" border border-sky-500 p-[5px] ">
          <div className="icon flex justify-center text-sky-500">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>
          </div>
          <h2 className=" text-xs text-black font-bold text-center tracking-[0.1px] ">
            Web Development
          </h2>
          <p className=" text-center text-xs ">
            Lorem ipsum, folor sit aget consecteur adipisicing.eit.
          </p>
        </div>

        <div className=" border border-sky-500 p-[5px] ">
          <div className="icon flex justify-center text-sky-500">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>
          </div>
          <h2 className=" text-xs text-black font-bold text-center tracking-[0.1px] ">
            Web Development
          </h2>
          <p className=" text-center text-xs ">
            Lorem ipsum, folor sit aget consecteur adipisicing.eit.
          </p>
        </div>

        <div className=" border border-sky-500 p-[5px] ">
          <div className="icon flex justify-center text-sky-500">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>
          </div>
          <h2 className=" text-xs text-black font-bold text-center tracking-[0.1px] ">
            Web Development
          </h2>
          <p className=" text-center text-xs ">
            Lorem ipsum, folor sit aget consecteur adipisicing.eit.
          </p>
        </div>

        <div className=" border border-sky-500 p-[5px] ">
          <div className="icon flex justify-center text-sky-500">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>
          </div>
          <h2 className=" text-xs text-black font-bold text-center tracking-[0.1px] ">
            Web Development
          </h2>
          <p className=" text-center text-xs ">
            Lorem ipsum, folor sit aget consecteur adipisicing.eit.
          </p>
        </div>
       
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

export default MyServices;
