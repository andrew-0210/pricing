import Image from 'next/image';
import checkmark from '../assets/checkmark.svg';

const Tier2 = () => {
  return (
    <div className='p-[1px] bg-gradient-to-r from-[#2b2b2b] to-[#525252] rounded-xl hover:scale-105 hover:transition hover:ease-in-out hover:delay-100 cursor-pointer hover:shadow-lg hover:shadow-[#525252]/40'>
      <div className='bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] to-[#1a1a1a] from-[#780cdd]/50 via-[#1a1a1a] p-5 rounded-xl'>
        <h2 className='text-xl font-normal'>Purple Lift</h2>
        <p className='text-[0.75rem] text-[#b8b8b8]'>
          Supercharged crypto tools. Personalized guidance. Market insights.
        </p>
        <p className='text-2xl font-medium mt-3 bg-gradient-to-r from-[#ff5420] via-[#dd006f] to-[#dd0c63] text-transparent bg-clip-text'>
          $10,500
          <span className='text-[#949494] text-[0.75rem]'>/month</span>
        </p>
        <button className='text-white text-[1rem] font-medium bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] to-[#ff7944] from-[#ff9f7a] via-[#ff7944] w-full py-[0.75rem] rounded-lg mt-3 border-[0.5px] border-[#414141]'>
          Choose this plan
        </button>
        <ul className='mt-[0.75rem] text-[0.75rem] text-[#b8b8b8] flex flex-col gap-[0.5rem]'>
          <li>
            <span className='text-white'>4 free</span> seats available
          </li>
          <li>
            <span className='text-white'>1GB</span> of cloud storage
          </li>
        </ul>
        <div className='bg-[#363636] w-full h-[1px] mt-3' />

        <ul className='mt-[0.75rem] text-[0.75rem] text-[#b8b8b8] flex flex-col gap-[0.5rem]'>
          <li className='flex  items-center gap-[0.5rem]'>
            <Image src={checkmark} className='w-[1rem]' alt='checkmark'></Image>
            Supercharged tools
          </li>
          <li className='flex  items-center gap-[0.5rem]'>
            <Image src={checkmark} className='w-[1rem]' alt='checkmark'></Image>
            Personalized guidance
          </li>
          <li className='flex  items-center gap-[0.5rem]'>
            <Image src={checkmark} className='w-[1rem]' alt='checkmark'></Image>
            Market insights
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tier2;
