import React, { useState } from 'react'
import NextArrowSvg from '../svg/NextArrowSvg'

const NextBtn = ({ title }) => {
    const [isHover, setIsHover] = useState(false)

    const changeHoverState = () => setIsHover(!isHover)

    return (
        <button onMouseEnter={changeHoverState} onMouseLeave={changeHoverState} className={'bg-[#0E2137] w-[200px] h-[48px] rounded-sm relative'}>
            <span className={`absolute left-10 top-3 ${isHover ? 'text-[#6F9AC7]' : 'text-[#74ABDB] font-share'}`}>{title}</span>
            <NextArrowSvg isHover={isHover} />
        </button>
    )
}

export default NextBtn
