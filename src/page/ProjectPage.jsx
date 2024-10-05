import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { close } from '../store/slice/dialogSlice';
import { projects } from '../components/data/projectData';
import CodeIcon from '../components/icons/CodeIcon';

const ProjectPage = () => {
    const view = useSelector((state) => state.dialoger.value);
    const dispatch = useDispatch();
    console.log(view);
    const data = projects.find((project => project.id == view))
    console.log(data)

    return (
        <>
            {view && (
                <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} className=' bg-white fixed w-[90vw] md:w-[70vw] h-[90vh] top-[5vh] md:left-[15vw] left-[5vw] overflow-auto '>
                    <button onClick={() => dispatch(close())} className=' absolute top-2 right-2 size-5 border rounded-full border-gray-400 flex justify-center items-center text-red-400 '>
                        x
                    </button>

                    <div className=" p-4 flex flex-col gap-3 ">
                        <img src={data.image} className=' w-full aspect-video ' alt="" />
                        <div className=" flex justify-between mt-2 px-5 ">
                            <div className=" font-heading font-bold text-[32px] ">{data.title}</div>
                            <a href={data.preview} target="_black" className=" flex justify-center items-center gap-2 ">
                                <div className=" text-lg text-sky-500 ">Live Preview </div>
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

                        <div className=" flex w-full items-center justify-between mt-[-20px] px-5 ">
                            <div className=' flex gap-2  '>
                                {data.tech.map((Icon, index) => (
                                    <div key={index} className=' size-8 border-2 border-sky-600 flex justify-center items-center rounded-full '>
                                        <Icon className=" size-6 fill-sky-600 " />
                                    </div>
                                ))}
                            </div>


                            <div className=" mt-2 ">
                                {data.source ? (

                                    <a href={data.source} target="_blank"

                                        className=" text-xs py-2 px-5 inline-flex items-center gap-x-2 font-semibold rounded-md border border-transparent bg-sky-600 text-white hover:bg-sky-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    >
                                        Source Code
                                        <CodeIcon className=" size-5 stroke-white " />
                                    </a>
                                ) : (
                                    <div className=" text-xs py-2 px-5 inline-flex items-center gap-x-2 font-semibold rounded-md border border-transparent bg-sky-600 text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Sorry, Can't get source code</div>
                                )}
                            </div>
                        </div>

                        <div className=' flex px-5 items-center '>
                            <h3 className=' w-[100px] text-lg font-bold '>Total Page:</h3>
                            <p className=' font-bold text-lg '>{data.page}</p>
                        </div>

                        <div className=" px-5 ">
                            <h1 className=' font-bold text-xl '>Features</h1>
                            {data.feature.map((text, index) => (
                                <div key={index} className=' flex'>
                                    <span className=' font-bold me-2 '>{index + 1}. </span>
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>




                    {/* <img src={data.image} width={100} height={100} alt="" />
                    {data.tech.map((Icon) => (<Icon className=" size-4 fill-sky-600 " />))} */}

                </div>
            )}
        </>
    )
}

export default ProjectPage