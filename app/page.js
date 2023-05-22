'use client';

import { useState } from 'react';

export default function Home() {
  const [totalCost, setTotalCost] = useState(0);

  return (
    <main className='container mx-auto flex min-h-screen flex-col items-center justify-center gap-10 px-4 py-8'>
      <header className='flex flex-col items-center text-center gap-4'>
        <h1 className='text-4xl font-bold'>
          <span className='text-red-600'>E</span>Build
        </h1>
        <p className='text-lg leading-snug'>
          Build your new PC by choosing components from our database.
        </p>
      </header>

      <table className='table-auto w-full border-collapse'>
        <thead className='text-left hidden sm:table-header-group'>
          <tr className='border-b border-slate-500 grid grid-cols-4'>
            <th className='p-4'>Component</th>
            <th className='p-4 col-span-2'>Selection</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b border-slate-500'>
            <td className='p-4'>CPU</td>
            <td className='p-4'>Select CPU</td>
          </tr>
          <tr className='border-b border-slate-500'>
            <td className='p-4'>CPU Cooler</td>
            <td className='p-4'>Select CPU Cooler</td>
          </tr>
          <tr className='border-b border-slate-500'>
            <td className='p-4'>Motherboard</td>
            <td className='p-4'>Select Motherboard</td>
          </tr>
          <tr className='border-b border-slate-500'>
            <td className='p-4'>Memory</td>
            <td className='p-4'>Select Memory</td>
          </tr>
          <tr className='border-b border-slate-500'>
            <td className='p-4'>Storage</td>
            <td className='p-4'>Select Storage</td>
          </tr>
          <tr className='border-b border-slate-500'>
            <td className='p-4'>Video Card</td>
            <td className='p-4'>Select Video Card</td>
          </tr>
          <tr className='border-b border-slate-500'>
            <td className='p-4'>Case</td>
            <td className='p-4'>Select Case</td>
          </tr>
          <tr className='border-b border-slate-500'>
            <td className='p-4'>Power Supply</td>
            <td className='p-4'>Select Power Supply</td>
          </tr>
          {totalCost > 0 && (
            <tr className='border-b border-slate-500'>
              <td className='p-4'>Total:</td>
              <td className='p-4'>{`$${totalCost}`}</td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
}
