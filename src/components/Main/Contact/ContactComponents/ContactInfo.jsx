import React from 'react'
import styles from './ContactInfo.module.css'
const ContactInfo = () => {
  return (
    <div className={styles.contact_info}>
        <p className={styles.heading}>
            Contact
        </p>
        <p className={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Tempora laudantium reiciendis, aperiam, 
            saepe accusamus illo natus eaque excepturi illum delectus 
            corporis iusto voluptates quaerat ex explicabo a commodi quae voluptate 
            esse distinctio corrupti rem tempore quasi. 
            Velit, culpa?
        </p>
        <p className={styles.title}>Address</p>
        <p className={styles.text}>Russian, Grozny</p>
        <p className={styles.title}>Phone</p>
        <p className={styles.text}>+7 (334) 354-35-75</p>
        <p className={styles.title}>E-mail</p>
        <p className={styles.text}>themountok@gmail.com</p>

    </div>
  )
}

export default ContactInfo