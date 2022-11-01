import verified from '../../assets/verified.svg';

const MemberCard = ({ profile, name, role, desc }) => (
   <div className='bg-[#2E4A7D] border border-1 border-[#4A6292] relative overflow-hidden'>
      {/* card header */}
      <header className='h-[78px] border-b border-b-[#4A6292] flex'>
         {/* avatar */}
         <div className='w-[78px] h-[78px] bg-[#435A87] flex justify-center items-center relative'>
            <div className='member-card_avatar__circle' />
            <div className='member-card_avatar__square' />
            <img
               src={profile}
               alt='profile'
               className='w-[48px] h-[48px] rounded-full absolute z-20'
            />
         </div>

         {/* name and role */}
         <div className='h-full flex flex-1 flex-col justify-center items-start ml-4 sm:ml-6'>
            <h3 className='text-[#C4E3F5] mb-2 text-bold capitalize'>{name}</h3>

            <div className='flex bg-[#48628D] pr-2 min-h-[25px] items-center'>
               <div className='w-[30px] h-full bg-[#2A9787] mr-2 flex justify-center items-center'>
                  <img src={verified} alt='verified_logo' />
               </div>
               <p className='text-[#7CFFD6] text-xs text-bold capitalize'>
                  {role}
               </p>
            </div>
         </div>
      </header>

      {/*card body */}
      <div className='py-6 px-8'>
         <p className='text-[#95BAE0] leading-sm'>{desc}</p>
      </div>

      {/* angles */}
      <div className='member-card__angle -top-2 -left-2 -rotate-45' />
      <div className='member-card__angle -bottom-2 -right-2 rotate-[135deg]' />
   </div>
);

export default MemberCard;
