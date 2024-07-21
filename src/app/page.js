'use client';
import Tier1 from './components/Tier1';
import Tier2 from './components/Tier2';
import Tier3 from './components/Tier3';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Home() {
  useGSAP(() => {
    gsap.from('h1', {
      opacity: 0,
      y: 50,
      duration: 2,
      delay: 1,
    });
    gsap.from('section', {
      opacity: 0,
      y: 50,
      duration: 2,
      delay: 1,
    });
  });
  return (
    <main className='flex flex-col justify-center items-center max-w-[1400px] m-auto h-full sm:h-[100vh] px-[1rem]  lg:px-[4rem]'>
      <h1 className='text-[2.5rem] font-semibold bg-gradient-to-t from-[#646464] to-[#ffffff] text-transparent bg-clip-text'>
        Pricing
      </h1>
      <section className='grid grid-cols-1 sm:grid-cols-3 items-center justify-center py-10 gap-3'>
        <Tier1 />
        <Tier2 />
        <Tier3 />
      </section>
    </main>
  );
}
