import React from 'react'
import styles from './ContactPage.module.css'
import ContactInfo from './ContactComponents/ContactInfo.jsx'
import ContactForm from './ContactComponents/ContactForm'
const ContactPage = () => {
  return (
    <div className={styles.contact_page}>
        <ContactInfo />
        <ContactForm />
        <p className={styles.teg}>
          by <span>Mountok</span>
        </p>
    </div>
  )
}

export default ContactPage