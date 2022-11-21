import React from 'react'
import NextBtn from '../btn/NextBtn'
import DropdownSvg from '../svg/DropdownSvg'
import LogoSvg from '../svg/LogoSvg'
import { navigationData } from './navigationData'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center my-5">
            {/* logo */}
            <div className="flex justify-center items-center space-x-8">
                <LogoSvg />
                <p className="text-lg md:text-xl font-bold text-[#FFFF78]">Myanmar Cyber Youth</p>
            </div>
            {/* navigation container */}
            <div className="lg:flex hidden justify-end space-x-10">
                {/* nav */}
                <ul className="flex items-center space-x-3">
                    {navigationData.map(({ id, name }) => (
                        <li key={id} className="flex justify-center items-center cursor-pointer">
                            <p className="text-[#6F9AC7] hover:text-[#74ABDB] capitalize">{name}</p>
                            <DropdownSvg />
                        </li>
                    ))}
                </ul>
                {/* team portal */}
                <NextBtn title={'Team Portal'} />
            </div>
        </div>
    )
}

export default Navbar
