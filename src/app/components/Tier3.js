import Image from 'next/image';
import checkmark from '../assets/checkmark.svg';

const Tier3 = () => {
  return (
    <div className='p-[1px] bg-gradient-to-r from-[#2b2b2b] to-[#525252] rounded-xl hover:scale-105 hover:transition hover:ease-in-out hover:delay-100 cursor-pointer hover:shadow-lg hover:shadow-[#525252]/40'>
      <div className='bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] to-[#1a1a1a] from-[#ffffff]/30 via-[#1a1a1a] p-5 rounded-xl'>
        <h2 className='text-xl font-normal'>Off-white</h2>
        <p className='text-[0.75rem] text-[#b8b8b8]'>
          Own your data. Censorship-resistant. Decentralized social media.
        </p>
        <p className='text-2xl font-medium mt-3'>Contact us</p>
        <button className='text-white text-[0.75rem] font-medium bg-[#363636] w-full py-[0.5rem] rounded-lg mt-3 border-[0.5px] border-[#414141]'>
          Contact us
        </button>
        <ul className='mt-[0.75rem] text-[0.75rem] text-[#b8b8b8] flex flex-col gap-[0.5rem]'>
          <li>
            <span className='text-white'>Unlimited</span> seats available
          </li>
          <li>
            <span className='text-white'>1TB+</span> of cloud storage
          </li>
        </ul>
        <div className='bg-[#363636] w-full h-[1px] mt-3' />

        <ul className='mt-[0.75rem] text-[0.75rem] text-[#b8b8b8] flex flex-col gap-[0.5rem]'>
          <li className='flex  items-center gap-[0.5rem]'>
            <Image src={checkmark} className='w-[1rem]' alt='checkmark'></Image>
            Own your data
          </li>
          <li className='flex  items-center gap-[0.5rem]'>
            <Image src={checkmark} className='w-[1rem]' alt='checkmark'></Image>
            Censorship-resistant
          </li>
          <li className='flex  items-center gap-[0.5rem]'>
            <Image src={checkmark} className='w-[1rem]' alt='checkmark'></Image>
            Decentralized social media
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tier3;
