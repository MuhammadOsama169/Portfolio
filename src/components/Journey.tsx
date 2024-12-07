import React from 'react'
import Img1 from '../assets/meeting.jpg'
import Img2 from '../assets/code.jpeg'
import Img3 from '../assets/engineer.jpg'
import block from '../assets/object.png'

export const Journey = () => {
  return (
    <div className="flex flex-col">

        <div className="flex md:flex-row flex-col gap-5 mt-10">
            <div className="basis-[50%]  mt-[10px]">
                <div className="flex flex-col relative " >
                    <img className="h-[80px] w-[200px]  left-0 md:mb-10 mb-10" alt='' src={block}/>
                    <img alt='' src={Img1}/>
                    <img alt='' src={Img3}/>
                </div>

            </div>
            <div className="basis-[50%]">
                <div className="flex flex-col relative">
                    <img className="" alt='' src={Img2}/>
                    <div className="absolute h-[100px] w-[250px] bottom-0 right-0  dark:bg-[#27232C] bg-[#e8eef1]"></div>
                    <img className="absolute h-[80px] w-[200px] bottom-0 right-0 rotate-180" alt='' src={block}/>
                </div>
            </div>
        </div>
        <div className="mt-10 pt-5 mb-7 text-2xl text-center md:text-start font-opensans dark:text-[#BEE0D6] text-[#30475E]">
            I am an experienced Engineer turned Frontend Developer. My strong foundation in technical principles and proficiency in cutting-edge technologies allow me to create functonal, responsive and beutiful web applications. I am eager to apply my skills to create visually stunning and intuitive web applications.
        </div>
    </div>
  )
}
