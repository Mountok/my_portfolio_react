import React from 'react'
import {FaArrowLeft , FaArrowRight } from 'react-icons/fa'

const PageChanger = () => {
  return (
    <div className="navigator">
          <div className="last_page">
          <FaArrowLeft />
          <div className='arrow_line'></div>
          </div>
          <div className="next_page">
          <div className='arrow_line'></div>
          <FaArrowRight className='item'/>
          
          </div>
        </div>
  )
}

export default PageChanger