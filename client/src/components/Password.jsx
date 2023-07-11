import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/avatar.png'
import styles from '../styles/Username.module.css'
import { Toaster, toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { passwordValidate } from '../helper/validate'

function Password() {

  const formik = useFormik({
    initialValues: {
      password: 'admin@123'
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values)
    }
  })

  return (
    <>
      <div className="container mx-auto">
        <Toaster position='top-center' reverseOrder={false}></Toaster>

        <div className="flex justify-center items-center  h-screen">
          <div className={styles.glass}>
            <div className="title flex flex-col items-center">
              <h4 className='text-4xl font-bold'>Hello Again!</h4>
              <span className="py-4 text-l w-2/3 text-center text-grey-5">
                Explore more by connecting with us.
              </span>
            </div>
            <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                <img src={avatar} className={styles.profile_img} alt='avatar' />
              </div>
              <div className='textbox flex flex-col items-center gap-6'>
                <input {...formik.getFieldProps('password')} className={styles.textbook} type='password' placeholder='Password' />
                <button className={styles.btn} type='submit'>sign In</button>
              </div>
              <div className="text-center py-8">
                <span className=''> Forgot Password<Link className='text-red-500 pl-3' to='/recovery'>Recover Now</Link></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Password