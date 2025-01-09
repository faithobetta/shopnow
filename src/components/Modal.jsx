import { Children } from "react";

 

const Modal = ({isModelOpen, setIsModelOpen, children}) => {
    if(!isModelOpen) return null;
  return (
    <div className='fixed inset-0 bg-opacity-75 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md'>
        <button className='absolution top-4 right-4 text-black text-3xl' onClick={() => setIsModelOpen(false)}>&times;</button>
        <div>
            {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
