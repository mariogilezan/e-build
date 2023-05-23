'use client';

import { componentsListItems } from '@/data/componentListItems';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [totalCost, setTotalCost] = useState(0);

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

      <section className='w-full border-2 border-slate-600 p-4 rounded flex flex-col gap-4 text-sm sm:text-base'>
        {componentsListItems.map((component) => (
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
        ))}
      </section>
    </main>
  );
}
