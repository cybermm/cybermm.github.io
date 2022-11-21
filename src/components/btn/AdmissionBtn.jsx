import React, { useState } from 'react'

const AdmissionBtn = ({ title }) => {
    const [isHover, setIsHover] = useState(false)

    const changeHoverState = () => setIsHover((prev) => !prev)
    return (
        <button onMouseEnter={changeHoverState} onMouseLeave={changeHoverState} className={`w-[234px] h-[48px] relative text-opacity-60 transition-colors duration-500 ease-linear ${isHover ? 'bg-[#4B7ABC] bg-opacity-60' : 'bg-[#4B7ABC]'}`}>
            {/* left side svg */}
            <svg className="absolute top-2 left-0" width="4" height="30" viewBox="0 0 4 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-7 1L2 15L-7 29" stroke={`${isHover ? '#5182C8' : '#5A98EB'}`} strokeWidth="2" />
            </svg>

            <svg className="absolute top-2 left-0" width="10" height="30" viewBox="0 0 10 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-1 1L8 15L-1 29" stroke={`${isHover ? '#5A98EB' : '#5182C8'}`} strokeWidth="2" />
            </svg>

            {/* right side svg */}
            <svg className="absolute top-2 right-0" width="4" height="30" viewBox="0 0 4 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 29L2 15L11 0.999993" stroke={`${isHover ? '#5182C8' : '#5A98EB'}`} strokeWidth="2" />
            </svg>
            <svg className="absolute top-2 right-0" width="10" height="30" viewBox="0 0 10 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 29L2 15L11 0.999993" stroke={`${isHover ? '#5A98EB' : '#5182C8'}`} strokeWidth="2" />
            </svg>

            {/* Bottom side svg */}
            <svg className="absolute bottom-0" width="234" height="2" viewBox="0 0 234 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1H234" stroke="#436FB2" strokeWidth="2" />
            </svg>

            {/* top side svg */}
            <svg className="absolute top-0" width="234" height="2" viewBox="0 0 234 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1H234" stroke="#436FB2" strokeWidth="2" />
            </svg>

            <p className={`transition-colors duration-700 ease-linear ${isHover ? 'text-[#D2EAEC] text-opacity-60' : 'text-[#D2EAEC]'} capitalize`}>{title}</p>
        </button>
    )
}

export default AdmissionBtn
