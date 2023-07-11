import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/avatar.png'
import styles from '../styles/Username.module.css'
import { Toaster, toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { profileValidation} from '../helper/validate'
import convertToBase64 from '../helper/convert'
import { registerValidation } from '../helper/validate'
import extend from '../styles/Profile.module.css'

function Profile() {
  const [file, setFile] = useState()

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      mobile:'',
      email: '',
      address: '',
    },
    validate: profileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values = await Object.assign(values, { profile: file || '' })
      console.log(values)
    }
  })
  //  formik doesn't support file upload so we need to create this handler

  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }

  return (
    <>
      <div className="container mx-auto">
        <Toaster position='top-center' reverseOrder={false}></Toaster>

        <div className="flex justify-center items-center  h-screen">
          <div className={styles.glass} style={{ height: '100%', width: '45%', paddingTop: '3em' }}>
            <div className="title flex flex-col items-center">
              <h4 className='text-4xl font-bold '>Profile</h4>
              <span className="py-4 text-l w-2/3 text-center text-grey-5">
               You can update the details.
              </span>
            </div>
            <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                <label htmlFor='profile'>
                  <img src={file || avatar} className={styles.profile_img} alt='avatar' />
                </label>
                <input onChange={onUpload} type='file' id='profile' name='profile' hidden />
              </div>
              <div className='textbox flex flex-col items-center gap-6'>
                <div className="name flex w-3/4 gap-10">
                  <input {...formik.getFieldProps('firstName')} className={styles.textbook} type='text' placeholder='First Name' />
                  <input {...formik.getFieldProps('lastName')} className={styles.textbook} type='email' placeholder='Last Name' />
                 

                </div>
                <div className="name flex w-3/4 gap-10">
                  <input {...formik.getFieldProps('mobile')} className={styles.textbook} type='text' placeholder='Mobile' />
                  <input {...formik.getFieldProps('email')} className={styles.textbook} type='email' placeholder='email' />

                </div>
                <input {...formik.getFieldProps('address')} className={styles.textbook} type='text' placeholder='Address' />
              
                <button className={styles.btn} type='submit'>Update</button>
              </div>
              <div className="text-center pt-3">
                <span className=''> Come back later<button className='text-red-500 pl-3'>Logout</button></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile