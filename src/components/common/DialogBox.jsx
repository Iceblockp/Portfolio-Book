import React, { useState } from 'react'

const DialogBox = ({ children }) => {
    const [show, setShow] = useState(false);
    const open = () => {
        setShow(true);
    }
    const close = () => {
        setShow(false);
    }
    return (
        <>
            <div onClick={open}>
                {children}
            </div>
            {show && (

                <div className="  top-0 bg-white w-screen h-screen ">
                    <button onClick={close} className=' absolute top-3 right-3 '>X</button>

                </div>
            )}
        </>
    )
}

export default DialogBox