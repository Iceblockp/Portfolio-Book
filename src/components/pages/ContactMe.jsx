import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"
import { messageError, messageSuccess } from '../alert/message-alert';

const ContactMe = ({ fourthPageChange }) => {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs.sendForm('service_fgixvrq', 'template_h8apjcn', form.current, { publicKey: 'SrPyRTuY5_30CUmSE' }).then(() => {
      console.log('success!');
      messageSuccess();
    }, (error) => {
      console.log('Failed...', error.text);
      messageError(error.text)
    })




  };


  return (
    <div>
      <div className=' font-bold text-xl text-center' >Contact Me!</div>
      <div>

        <form ref={form} className="max-w-sm mx-auto" onSubmit={handleSubmit} >
          <label htmlFor="website-admin" className="block text-sm font-medium text-gray-900 ">Username</label>
          <div className="flex mb-1">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md ">
              <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </span>
            <input type="text" name='user_name' className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  " placeholder="Your name" value={fullName} onChange={e => setFullName(e.target.value)} required />
          </div>

          <div className='mb-1'>
            <label htmlFor="email-address-icon" className="block text-sm font-medium text-gray-900 ">Your Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input type="text" value={email} onChange={e => setEmail(e.target.value)} name='user_email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  " placeholder="name@flowbite.com" required />
            </div>
          </div>

          <div className='mb-1'>
            <label htmlFor="message" className="block text-sm font-medium text-gray-900 ">Your message</label>
            <textarea value={message} onChange={e => setMessage(e.target.value)} name="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Send message..." />
          </div>
          <button type='submit' className='flex items-center px-2   gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-sky-600 text-white hover:bg-sky-500'><span>Send</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
            </span>
          </button>

        </form>


      </div>



      {/* page No  */}
      <div className=" flex justify-between text-xs absolute bottom-3 w-full text-center">
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
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div>8</div>
        <div></div>

      </div>
    </div>
  )
}

export default ContactMe