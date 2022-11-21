import React from 'react'

const NextArrowSvg = ({ isHover }) => {
    return !isHover ? (
        <svg className="absolute top-[17.9px] right-[50px]" width={14} height={12} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 11L12 6L7 1" stroke="#6F9AC7" strokeWidth="2" />
            <path d="M1 11L6 6L1 1" stroke="#6F9AC7" strokeWidth="2" />
        </svg>
    ) : (
        <svg className="absolute top-2 right-10" width={34} height={32} viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_28_127)">
                <path d="M17 21L22 16L17 11" stroke="#74ABDB" strokeWidth="2" />
            </g>
            <g filter="url(#filter1_d_28_127)">
                <path d="M11 21L16 16L11 11" stroke="#74ABDB" strokeWidth="2" />
            </g>
            <defs>
                <filter id="filter0_d_28_127" x="6.29297" y="0.292969" width="27.1211" height="31.4141" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.305882 0 0 0 0 0.482353 0 0 0 0 0.690196 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_28_127" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_28_127" result="shape" />
                </filter>
                <filter id="filter1_d_28_127" x="0.292969" y="0.292969" width="27.1211" height="31.4141" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.305882 0 0 0 0 0.482353 0 0 0 0 0.690196 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_28_127" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_28_127" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}

export default NextArrowSvg
