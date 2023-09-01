import React, { useState } from 'react'
import {SliderData} from './SliderData'
import {FaGithub} from 'react-icons/fa'
import { BsBrowserChrome } from 'react-icons/bs'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill  } from 'react-icons/bs'



const Slider = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    console.log(current)

    if(!Array.isArray(slides) || slides.length <=0){
        return null
    }
    return (
        <>
        <section className='slider'>
            <BsArrowLeftSquareFill className='left-arrow' onClick={prevSlide}/>
            <BsArrowRightSquareFill className='right-arrow' onClick={nextSlide}/>
            {SliderData.map((slide,index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <>
                           

                            <img src={slide.image} alt='projects image' className='image'></img>
                            <div className="image_info">
                                <p className='image_info_title'>
                                    {slide.title}
                                </p>
                                <p className='image_info_links'>
                                    {slide.github !== 'null' && (
                                        <a href={slide.github} > <FaGithub className='image_info_links_item'/> </a>
                                    )}

                                    {slide.browser !== 'null' && (
                                        <a href={slide.browser}> <BsBrowserChrome className='image_info_links_item'/> </a>
                                    )}
                                </p>
                            </div>
                            </>
                            
                        )}
                        
                    </div>
                )

            })}
        </section>
        </>
    )
}

export default Slider