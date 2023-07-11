import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/avatar.png'
import styles from '../styles/Username.module.css'
import { Toaster, toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { passwordValidate } from '../helper/validate'

function Recovery() {


  return (
    <>
      <div className="container mx-auto">
        <Toaster position='top-center' reverseOrder={false}></Toaster>

        <div className="flex justify-center items-center  h-screen">
          <div className={styles.glass}>
            <div className="title flex flex-col items-center">
              <h4 className='text-4xl font-bold'>Recovery</h4>
              <span className="pt-2 text-l w-2/3 text-center text-grey-5">
                Enter OTP to recover password.
              </span>
            </div>
            <form className='pt-20' >
             
              <div className='textbox flex flex-col items-center gap-5'>
                <div className="input text-center ">
                  <span className=' text-sm text-left text-gray-500'> Enter 6 digit OTP sent to your email address.</span>
                  <input className={styles.textbook} type='password' placeholder='OTP' />
                </div>
                
                <button className={styles.btn} type='submit'>sign In</button>
              </div>
              <div className="text-center py-8">
                <span className=''> Can't get OTP<button className='text-red-500 pl-3'>Resend OTP</button></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Recovery