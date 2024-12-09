import React from 'react'

export const LineGradient = ({width="w-full"}:{width?:string}) => {
  return (
    <div className={`h-0.5 ${width} bg-gradient-rainblue dark:bg-gradient-redish`}></div>
  )
}
