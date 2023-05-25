'use client';

import { componentsListItems } from '@/data/componentListItems';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [totalCost, setTotalCost] = useState(0);
  const [componentData, setComponentData] = useState({});

  const getComponentData = (name, componentData) => {
    setComponentData((prevData) => ({
      ...prevData,
      [name]: componentData,
    }));
  };

  return (
    <main className='container mx-auto flex min-h-screen flex-col items-center gap-10 px-4 py-8'>
      <header className='flex flex-col items-center text-center gap-4'>
        <h1 className='text-4xl font-bold'>
          <span className='text-red-600'>E</span>Build
        </h1>
        <p className='text-lg leading-snug'>
          Build your new PC by choosing components from our database.
        </p>
      </header>

      <section className='w-full sm:w-4/5 md:w-3/4 lg:w-3/5 border-2 border-slate-600 p-4 rounded flex flex-col gap-4 text-sm sm:text-base'>
        {/* {componentsListItems.map((component) => (
          <div
            key={component.name}
            className='grid grid-cols-1 gap-2 items-center'
          >
            <div>{component.name}</div>
            <Link
              href={`/${component.href}`}
              className='bg-slate-600 hover:bg-slate-500 text-white p-2 rounded justify-self-start'
            >
              Select {component.name}
            </Link>
          </div>
        ))} */}
        {/* CPU */}
        <div className='grid grid-cols-1 gap-2 items-center'>
          <div>CPU</div>
          <Link
            href='/cpu'
            className='bg-slate-600 hover:bg-slate-500 text-white p-2 rounded justify-self-start'
          >
            Select CPU
          </Link>
        </div>
        {/* CPU Cooler */}
        <div className='grid grid-cols-1 gap-2 items-center'>
          <div>CPU Cooler</div>
          <Link
            href='/cpuCooler'
            className='bg-slate-600 hover:bg-slate-500 text-white p-2 rounded justify-self-start'
          >
            Select CPU Cooler
          </Link>
        </div>
        {/* Motherboard */}
        <div className='grid grid-cols-1 gap-2 items-center'>
          <div>Motherboard</div>
          <Link
            href='/motherboard'
            className='bg-slate-600 hover:bg-slate-500 text-white p-2 rounded justify-self-start'
          >
            Select Motherboard
          </Link>
        </div>
        {/* Memory */}
        <div className='grid grid-cols-1 gap-2 items-center'>
          <div>Memory</div>
          <Link
            href='/memory'
            className='bg-slate-600 hover:bg-slate-500 text-white p-2 rounded justify-self-start'
          >
            Select Memory
          </Link>
        </div>
        {/* Storage */}
        <div className='grid grid-cols-1 gap-2 items-center'>
          <div>Storage</div>
          <Link
            href='/storage'
            className='bg-slate-600 hover:bg-slate-500 text-white p-2 rounded justify-self-start'
          >
            Select Storage
          </Link>
        </div>
        {/* Video Card */}
        <div className='grid grid-cols-1 gap-2 items-center'>
          <div>Video Card</div>
          <Link
            href='/gpu'
            className='bg-slate-600 hover:bg-slate-500 text-white p-2 rounded justify-self-start'
          >
            Select Video Card
          </Link>
        </div>
        {/* Case */}
        <div className='grid grid-cols-1 gap-2 items-center'>
          <div>Case</div>
          <Link
            href='/case'
            className='bg-slate-600 hover:bg-slate-500 text-white p-2 rounded justify-self-start'
          >
            Select Case
          </Link>
        </div>
        {/* PSU */}
        <div className='grid grid-cols-1 gap-2 items-center'>
          <div>PSU</div>
          <Link
            href='/psu'
            className='bg-slate-600 hover:bg-slate-500 text-white p-2 rounded justify-self-start'
          >
            Select PSU
          </Link>
        </div>
      </section>
    </main>
  );
}
