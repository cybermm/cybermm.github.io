import React, { useState } from 'react'

const LinkBtn = ({ title }) => {
    const [isHover, setIsHover] = useState(false)

    const changeHoverState = () => setIsHover((prev) => !prev)

    return (
        <button onMouseEnter={changeHoverState} onMouseLeave={changeHoverState} className={'flex h-[48px] flex space-x-3 items-center'}>
            {isHover ? (
                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_130_66)">
                        <rect y="18.3848" width="26" height="26" transform="rotate(-45 0 18.3848)" fill="#0E2137"/>
                        <g filter="url(#filter0_d_130_66)">
                            <path d="M17.5859 23.5859L22.5859 18.5859L17.5859 13.5859" stroke="#4B7ABC" strokeWidth="2"/>
                        </g>
                    </g>
                    <rect x="0.707107" y="18.3848" width="25" height="25" transform="rotate(-45 0.707107 18.3848)" stroke="#4B7ABC"/>
                    <defs>
                        <filter id="filter0_d_130_66" x="10.8789" y="6.87891" width="19.1211" height="23.4141" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="3"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.478431 0 0 0 0 0.737255 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_130_66"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_130_66" result="shape"/>
                        </filter>
                        <clipPath id="clip0_130_66">
                            <rect y="18.3848" width="26" height="26" transform="rotate(-45 0 18.3848)" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            ) : (
                <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.707107" y="18.7988" width="25" height="25" transform="rotate(-45 0.707107 18.7988)" fill="#0E2137" />
                    <path d="M17.5859 24L22.5859 19L17.5859 14" stroke="#4B7ABC" strokeWidth="2" />
                    <rect x="0.707107" y="18.7988" width="25" height="25" transform="rotate(-45 0.707107 18.7988)" stroke="#4B7ABC" />
                </svg>
            )}
            <p className={`${isHover ? 'text-[#5A98EB]' : 'text-[#4B7ABC]'} leading-sm transition-colors duration-300 ease-linear `}>{title}</p>
        </button>
    )
}

export default LinkBtn
