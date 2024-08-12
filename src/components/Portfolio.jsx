import React from 'react'
import html from '../../public/html-logo.png'
import css from '../../public/css-logo.png'
import javascript from '../../public/JavaScript-logo.png'
import bootstrap from '../../public/Bootstrap-logo.png'
import reactjs from '../../public/react-logo.png'
import wordpress from '../../public/wordpress.png'


function Portfolio() {
    const cardItem = [
        {
            id: 1,
            logo:html,
            name: "HTML5"
        },
        {
            id: 2,
            logo:css,
            name: "CSS3"
        },
        {
            id: 3,
            logo:javascript,
            name: "JavaScript"
        },
        {
            id: 4,
            logo:bootstrap,
            name: "Bootstrap"
        },
        {
            id: 5,
            logo:reactjs,
            name: "React Js"
        },
        {
            id: 6,
            logo:wordpress,
            name: "WordPress"
        },
    ]
  return (
    <div name="Portfolio" className='container max-w-screen-2xl mx-auto px-4 md:px-20 mt-10'>
        <div>
        <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
        <span className='underline font-semibold'>Featured Projects</span>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 my-5'>
        {
            cardItem.map(({id, logo, name}) => (
                <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                    <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
                    <div>
                        <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                        <p className='px-2 text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, quos?</p>
                    </div>
                    <div className='px-6 py-4 space-x-3 justify-arround'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                        <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
                    </div>
                </div>
            ))
        }
        </div>
        </div>
        </div>
  )
}

export default Portfolio
