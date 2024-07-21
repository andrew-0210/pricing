import Image from 'next/image';
import checkmark from '../assets/checkmark.svg';

const Tier1 = () => {
  return (
    <div className='p-[1px] bg-gradient-to-r from-[#2b2b2b] to-[#525252] rounded-xl hover:scale-105 hover:transition hover:ease-in-out hover:delay-100 cursor-pointer hover:shadow-lg hover:shadow-[#525252]/40'>
      <div className='bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] to-[#1a1a1a] from-[#41a9fd]/50 via-[#1a1a1a] p-5 rounded-xl'>
        <h2 className='text-xl font-normal'>Turquoise Trek</h2>
        <p className='text-[0.75rem] text-[#b8b8b8]'>
          Seamless Web 3.0 integration. Enhanced privacy. Decentralized apps.
        </p>
        <p className='text-2xl font-medium mt-3 bg-gradient-to-r from-[#00c3dd] via-[#004ddd] to-[#780cdd] text-transparent bg-clip-text'>
          $4,200
          <span className='text-[#949494] text-[0.75rem]'>/month</span>
        </p>
        <button className='text-white text-[0.75rem] font-medium bg-[#363636] w-full py-[0.5rem] rounded-lg mt-3 border-[0.5px] border-[#414141]'>
          Choose this plan
        </button>
        <ul className='mt-[0.75rem] text-[0.75rem] text-[#b8b8b8] flex flex-col gap-[0.5rem]'>
          <li>
            <span className='text-white'>2 free</span> seats available
          </li>
          <li>
            <span className='text-white'>250MB</span> of cloud storage
          </li>
        </ul>
        <div className='bg-[#363636] w-full h-[1px] mt-3' />
        <ul className='mt-[0.75rem] text-[0.75rem] text-[#b8b8b8] flex flex-col gap-[0.5rem]'>
          <li className='flex  items-center gap-[0.5rem]'>
            <Image src={checkmark} className='w-[1rem]'></Image>Seamless
            integration
          </li>
          <li className='flex  items-center gap-[0.5rem]'>
            <Image src={checkmark} className='w-[1rem]'></Image>Enhanced privacy
          </li>
          <li className='flex  items-center gap-[0.5rem]'>
            <Image src={checkmark} className='w-[1rem]'></Image>Decentralized
            applications
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tier1;
