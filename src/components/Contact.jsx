import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo={
            name:data.name,
            email:data.email,
            message:data.message
        }
        try{
            await axios.post("https://getform.io/f/navvqoma", userInfo);
            toast.success("Your message has been sent")
        }catch (error){
            console.log(error)
            toast.error("Something went wrong")
        }
      }
  return (
    <React.Fragment>
    <div name="Contact" className='container max-w-screen-2xl mx-auto px-4 md:px-20 my-16'>
      <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
      <span>Please fill out the form below to contact me</span>
      <div className='flex flex-col items-center justify-center mt-5'>
        <form 
        // action="https://getform.io/f/navvqoma"  
        // method="POST" 
        onSubmit={handleSubmit(onSubmit)} 
        className='bg-slate-200 md:w-96 px-8 py-6 rounded-xl'>
            <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
            <div className="form-control flex flex-col mb-4"> 
                <label className='block text-gray-700'>Full Name</label>
                <input {...register("name", { required: true })}
                type="text" 
                name='name' 
                id='name'
                className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enter your full name' />
                {errors.name && <span>This field is required</span>}
            </div>
            <div className="form-control flex flex-col mb-4">
                <label className='block text-gray-700'>Email Address</label>
                <input {...register("email", { required: true })} 
                type="text" id='email' name='email' className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enter your email address' />
                {errors.email && <span>This field is required</span>}
            </div>
            <div className="form-control flex flex-col mb-4">
                <label className='block text-gray-700'>Email Address</label>
                <textarea {...register("message", { required: true })}
                type="text" id='message' name='message' className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus outline-none border-none' placeholder='Type your message' />
                {errors.message && <span>This field is required</span>}
            </div>
            <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
        </form>
      </div>
    </div>
    </React.Fragment>
  )
}

export default Contact