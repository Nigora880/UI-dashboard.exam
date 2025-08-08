import React from 'react'

const Button = ({children, classList, type}) => {
  return (
    <button type={type} className={`mt-[36px] mb-[23px] w-[350px] py-[11px] rounded-xl bg-[#0075FF] text-[#FFFFFF] ${classList}`}>{children}</button>
  )
}

export default Button
