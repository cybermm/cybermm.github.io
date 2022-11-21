import React from 'react'
import HeroSection from './HeroSection'
import Navbar from './Navbar'

const Header = () => {
    return (
        <section className="px-4 xs:px-8 md:px-16 pb-12 pt-3 bg-[#18314A]">
            <div className="max-w-7xl mx-auto">
                <Navbar />
                <HeroSection />
            </div>
        </section>
    )
}

export default Header
