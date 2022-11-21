import MemberCard from './MemberCard'
import { memberData } from './memberData'

const Team = () => (
    <section className="px-4 xs:px-8 md:px-16 py-8 md:py-10 bg-[#405783]">
        <div className="max-w-7xl mx-auto">
            {/* header */}
            <header className="text-center">
                <h2 className="text-xl text-[#D1E6F5] mb-4 font-bold">
                    Meet The <span className="text-[#FFFF78]">Myanmar Cyber Youth</span> Team
                </h2>

                <p className="text-[#ABB8D5] leading-sm max-w-lg mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </header>

            {/* body */}
            <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {memberData.map((data) => (
                    <MemberCard {...data} key={data.id} />
                ))}
            </div>
        </div>
    </section>
)

export default Team
