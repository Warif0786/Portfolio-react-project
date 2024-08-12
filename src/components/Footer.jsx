import React from 'react'
import { FaSquareFacebook, FaSquareWhatsapp, FaLinkedin, FaTelegram } from "react-icons/fa6";

function Footer() {
  return (
    <React.Fragment>
        <hr />
        <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
            <div className='flex flex-col items-center justify-center'>
                <ul className='flex space-x-4'>
                    <li><a href="https://www.facebook.com/" target='_blank'>
                    <FaSquareFacebook size={24} className='text-2xl hover:scale-110 duration-200 cursor-pointer'/>
                    </a></li>
                    <li><a href="https://web.whatsapp.com/" target='_blank'>
                    <FaSquareWhatsapp size={24} className='text-2xl hover:scale-110 duration-200 cursor-pointer'/>
                    </a></li>
                    <li><a href="https://in.linkedin.com/" target='_blank'>
                    <FaLinkedin size={24} className='text-2xl hover:scale-110 duration-200 cursor-pointer'/>
                    </a></li>
                    <li><a href="https://web.telegram.org/" target='_blank'>
                    <FaTelegram size={24} className='text-2xl hover:scale-110 duration-200 cursor-pointer'/>
                    </a></li>
                </ul>
                <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                    <p className='text-sm px-12'>&copy; 2024 Your Company. All rights reserved.</p>
                    <p className='text-sm'>Supportive Partner ❤️ Warif</p>
                </div>
            </div>
        </div>
        </footer>
      
    </React.Fragment>
  )
}

export default Footer
