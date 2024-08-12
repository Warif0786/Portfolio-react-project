import React from 'react'
import html from '../../public/html-logo.png'
import css from '../../public/css-logo.png'
import javascript from '../../public/JavaScript-logo.png'
import bootstrap from '../../public/Bootstrap-logo.png'
import reactjs from '../../public/react-logo.png'
import wordpress from '../../public/wordpress.png'


function Experience() {
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
    <div name="Experience" className='container max-w-screen-2xl mx-auto px-4 md:px-20 my-16'>
        <div>
        <h1 className='text-3xl font-bold mb-5'>Experience</h1>
        <p className=''>I've 6 months of experience in below technologies</p>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-8 my-3'>
        {
            cardItem.map(({id, logo, name}) => (
                <div className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                    <img src={logo} className='md:w-[150px] md:h-[150px] w-[100px] h-[100px] rounded-full' alt="" />
                    <div>
                        <div className=''>{name}</div>
                    </div>
                </div>
            ))
        }
        </div>
        </div>
        </div>
  )
}

export default Experience
