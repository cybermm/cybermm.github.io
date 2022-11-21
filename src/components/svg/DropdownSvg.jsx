import React from 'react'

const DropdownSvg = () => {
    return (
        <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1_14)">
                <path d="M11 11.5L16 16.5L21 11.5" stroke="#74ABDB" strokeWidth="2" />
            </g>
            <defs>
                <filter id="filter0_d_1_14" x="0.292969" y="0.792908" width="31.4141" height="27.1213" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.305882 0 0 0 0 0.482353 0 0 0 0 0.690196 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_14" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_14" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}

export default DropdownSvg
