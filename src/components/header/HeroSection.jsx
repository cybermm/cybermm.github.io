import React from 'react'
import AdmissionBtn from '../btn/AdmissionBtn'
import AllInOneSvg from "../svg/allInOneSvg";
import LinkBtn from "../btn/LinkBtn";

const HeroSection = () => {
    return (
        <div className="max-w-[1200px] pb-10 pt-24 mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="left-group pb-10 lg:pb-5">
                <div className="container mx-auto">
                    <AllInOneSvg />
                </div>
            </div>
            <div className="right-group flex flex-col justify-center pb-5">
                <p className="font-bold text-[#F9E0A9]">CYBER SECURITY & INFORMATION TECHNOLOGY</p>
                <p className="text-2xl my-2 text-[#D1E6F5]">Lorem ipsum dolor sit amet consectetur.</p>
                <p className="text-[#ABB8D5] my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</p>
                <div className="flex flex-start space-x-5">
                    <AdmissionBtn title={'Team Admission'} />
                    <LinkBtn title={"Lean More"} />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
