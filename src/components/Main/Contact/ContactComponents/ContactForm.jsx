import React from 'react'
import styles from './ContactForm.module.css'

const ContactForm = () => {
  return (
    <div className={styles.contact_form}>
        <from className={styles.form}>
            <p className={styles.heading}>Contact Form</p>
            
            <div className={styles.inputs}>
            <input type="text" placeholder='your name' />
            <input type="text" placeholder='your number'/>
            <input type="text" placeholder='your number'/>
            <input type="text" placeholder='Message'/>
            </div>

            <button className={styles.submitBtn}>Send Message</button>
        </from>    
    </div>
    
  )
}

export default ContactForm