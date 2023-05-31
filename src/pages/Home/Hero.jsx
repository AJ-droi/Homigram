import React from 'react'
import heroBg from '../../assets/hero.jpg'
import {heroData} from '../../data/hero.js'
import Carousel from 'react-grid-carousel'





const Hero = () => {

    

  return (
    <div className='h-[100vh] text-[#fff]'>
        <img src={heroBg} alt="hero" className='opacity-[0.2] absolute'></img>
        <div className='w-[50%]'>
            <Carousel cols={1} rows={1} gap={10} loop >
            {heroData.map((item, index) => {
                return (
                    <Carousel.Item key={index}>
                        <HeroCard logo={item.logo} text={item.text} heading={item.heading} />
                    </Carousel.Item>
                )
            }
            )}
            </Carousel>

            <p>You dont have to arrive! Find a place to live on the go!</p>
            <div className='w-[100%] flex justify-between'>
                <HeroCardd text='Residential' count='1000' />
                <HeroCardd text='Residential' count='1000' />
                <HeroCardd text='Residential' count='1000' />

            </div>
         
        </div>
    </div>
  )
}

export default Hero

const HeroCard = ({logo, text, heading}) => {
    return (
        <div className='text-[#fff] text-left '>
            <img src={logo} alt="logo" className='h-[30vh]' />
            <div className='pl-[2%]'>
                <p >{text}</p>
                <h3 className='text-[2.5rem] font-bold'>{heading}</h3>  
            </div>
            
        </div>
    )
}

const HeroCardd = ({text, count}) => {
    return (
    <div className='w-[200px] h-[200px] bg-[#0A0A0A85] flex flex-col justify-center relative z-[2]' >
        <button className='bg-[#f13439] rounded-md py-[2%] w-[40%] ml-[50%]'>{count}M+</button>
        <p>{text}</p>

    </div>
    )
}