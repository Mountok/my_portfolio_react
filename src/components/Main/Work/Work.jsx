import React from 'react'
import Slider from './Slider/Slider'
import { SliderData } from './Slider/SliderData'
import './Work.css'
import PageChanger from '../../PageChanger/PageChanger'
const Work = () => {
  return (
    <>
        <p className='workpage_title'>
          My works
        </p>
        <Slider slides={SliderData}/>
        <PageChanger />
    </>

  )
}

export default Work