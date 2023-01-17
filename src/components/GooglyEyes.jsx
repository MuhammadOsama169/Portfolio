import React from 'react';
import useMightyMouse from 'react-hook-mighty-mouse';

export const GooglyEyes = () => {
    const {
        selectedElement: {
          position: { angle: angleLeftEye },
        },
      } = useMightyMouse(true, 'left-eye', { x: 20, y: 20 });
      const {
        selectedElement: {
          position: { angle: angleRightEye },
        },
      } = useMightyMouse(true, 'right-eye', { x: 20, y: 20 });
    
      const rotateLeftEye = `rotate(${-angleLeftEye}deg)`;
      const rotateRightEye = `rotate(${-angleRightEye}deg)`;
  return (
    <div className="flex flex-col items-center justify-center w-[50px] h-[50px] bg-gradient-rainblue border-solid border-white rounded-[50%]">
        <div className="flex flex-col justify-center items-center relative">

          {/* EYES */}
          <div className="absolute flex flex-row justify-center items-center">
            {/* EYE */}
            <div id="left-eye" style={{ transform: rotateLeftEye }} className="h-[25px] w-[25px] bg-[#f3efef] rounded-[50%]">
                  {/* pupil */}
                <div className="absolute h-[9px] w-[9px] left-[10px] top-[10px] rounded-[50%] bg-redhot"/>
            </div>

            <div id="right-eye" style={{ transform: rotateRightEye }} className="h-[25px] w-[25px] bg-[#f3efef] rounded-[50%]">
                <div className="absolute h-[9px] w-[9px] left-[10px] top-[10px] rounded-[50%]  bg-redhot "/>
            </div>

          </div>


        </div>
    </div>
  )
}
