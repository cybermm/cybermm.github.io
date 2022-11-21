import React from 'react'
import SmallLogoSvg from '../svg/SmallLogoSvg'
import { footerNavigationData } from './navigationData'
import DynamicIcon from "../icons/DynamicIcon";

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <section className={'px-4 xs:px-8 md:px-16 py-8 md:py-10 bg-[#18314A]'}>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2">
                {/*copy right section*/}
                <section className="space-x-5 flex justify-start items-center w-full mb-5 lg:mb-0">
                    <SmallLogoSvg />
                    <div className="flex flex-col justify-center items-start">
                        <p className={'text-[#FFFF78] text-sm font-bold'}>&copy;{currentYear} Myanmar Cyber Youth.</p>
                        <p className="text-[#ffff78] text-sm font-bold">All rights reserved.</p>
                    </div>
                </section>
                {/*navigation link section */}
                <section className="flex flex-col space-y-6 items-start pt-8 md:flex-row md:space-x-20 md:items-start md:space-y-0 md:justify-end ">
                    {footerNavigationData.map((item) => (
                        <div key={item.id}>
                            <p className="font-bold text-[#74ABDB] text-lg capitalize mb-2 lg:mb-4">{item.title}</p>
                            <ul className={'flex flex-col space-y-1'}>
                                {item.nav.map(({ id, name, link, iconName, iconColor }) => (
                                    <li key={id} className={"flex items-center space-x-2"}>
                                        {iconName && <DynamicIcon name={iconName} color={iconColor} size={18} className={"bg-white rounded-full"} /> }
                                        <a className={'capitalize text-[#D1E6F5] font-bold'} href={link}>{name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            </div>
        </section>
    )
}

export default Footer
