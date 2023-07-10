import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/avatar.png'
import styles from '../styles/Username.module.css'

function Username() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center items-center  h-screen">
          <div className={styles.glass}>
            <div className="title flex flex-col items-center">
              <h4 className='text-4xl font-bold'>Hello Again!</h4>
              <span className="py-4 text-l w-2/3 text-center text-grey-5">
                Explore more by connecting with us.
              </span>
            </div>
            <form className='py-1'>                   
              <div className='profile flex justify-center py-4'>
                <img src={avatar} className={styles.profile_img} alt='avatar'/>
              </div>
              <div className='textbox flex flex-col items-center gap-6'>
                <input className={styles.textbook} type='text' placeholder='username' />
                <button className={styles.btn} type='submit'>Let's Go</button>
              </div>
              <div className="text-center py-8">
                <span className=''> Not a member<Link className='text-red-500 pl-3' to='/register'>Register Now</Link></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Username