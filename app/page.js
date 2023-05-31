'use client';

import { removeComponent } from '@/store/componentsSlice';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();
  const { components, totalPrice } = useSelector((state) => state);
  const {
    cpu,
    cpuCooler,
    motherboard,
    memory,
    storage,
    gpu,
    case: caseData,
    psu,
  } = components;

  const handleComponentRemove = (name, price) => {
    const parsedPrice = Math.round(parseFloat(price.slice(1)));
    dispatch(removeComponent({ name, price: parsedPrice }));
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
        {/* CPU */}
        <div className='grid grid-cols-1 gap-2 items-center'>
          <h2 className='font-bold md:text-xl'>
            <span className='text-red-600'>C</span>PU
          </h2>
          {cpu !== null ? (
            <div className='flex items-center justify-between gap-4'>
              <Link
                href='/cpu'
                className='truncate font-semibold hover:text-cyan-600 hover:underline'
                onClick={() => handleComponentRemove('cpu', cpu.price)}
              >
                {cpu.name} - {cpu.price}
              </Link>
              <button
                className='text-gray-400 hover:text-red-600 font-bold text-lg w-4 h-4 flex items-center justify-center'
                onClick={() => handleComponentRemove('cpu', cpu.price)}
              >
                &times;
              </button>
            </div>
          ) : (
            <Link
              href='/cpu'
              className='bg-slate-600 hover:bg-slate-500 text-white p-2 rounded justify-self-start'
            >
              Select CPU
            </Link>
          )}
        </div>
        {/* CPU Cooler */}
        <div className='grid grid-cols-1 gap-2 items-center'>
          <h2 className='font-bold md:text-xl'>
            <span className='text-red-600'>C</span>PU Cooler
          </h2>
          {cpuCooler !== null ? (
            <div className='flex items-center justify-between gap-4'>
              <Link
                href='/cpuCooler'
                className='truncate font-semibold hover:text-cyan-600 hover:underline'
                onClick={() =>
                  handleComponentRemove('cpuCooler', cpuCooler.price)
                }
              >
                {cpuCooler.name} - {cpuCooler.price}
              </Link>
              <button
                className='text-gray-400 hover:text-red-600 font-bold text-lg w-4 h-4 flex items-center justify-center'
                onClick={() =>
                  handleComponentRemove('cpuCooler', cpuCooler.price)
                }
              >
                &times;
              </button>
            </div>
          ) : (
            <Link
              href='/cpuCooler'
              className='bg-slate-600 hover:bg-slate-500 text-white p-2 rounded justify-self-start'
            >
              Select CPU Cooler
            </Link>
          )}
        </div>
        {/* Motherboard */}
        <div className='grid grid-cols-1 gap-2 items-center'>
          <h2 className='font-bold md:text-xl'>
            <span className='text-red-600'>M</span>otherboard
          </h2>
          {motherboard !== null ? (
            <div className='flex items-center justify-between gap-4'>
              <Link
                href='/motherboard'
                className='truncate font-semibold hover:text-cyan-600 hover:underline'
                onClick={() =>
                  handleComponentRemove('motherboard', motherboard.price)
                }
              >
                {motherboard.name} - {motherboard.price}
              </Link>
              <button
                className='text-gray-400 hover:text-red-600 font-bold text-lg w-4 h-4 flex items-center justify-center'
                onClick={() =>
                  handleComponentRemove('motherboard', motherboard.price)
                }
              >
                &times;
              </button>
            </div>
          ) : (
            <Link
              href='/motherboard'
              className='bg-slate-600 hover:bg-slate-500 text-white p-2 rounded justify-self-start'
            >
              Select Motherboard
            </Link>
          )}
        </div>
        {/* Memory */}
        <div className='grid grid-cols-1 gap-2 items-center'>
          <h2 className='font-bold md:text-xl'>
            <span className='text-red-600'>M</span>emory
          </h2>
          {memory !== null ? (
            <div className='flex items-center justify-between gap-4'>
              <Link
                href='/memory'
                className='truncate font-semibold hover:text-cyan-600 hover:underline'
                onClick={() => handleComponentRemove('memory', memory.price)}
              >
                {memory.name} - {memory.price}
              </Link>
              <button
                className='text-gray-400 hover:text-red-600 font-bold text-lg w-4 h-4 flex items-center justify-center'
                onClick={() => handleComponentRemove('memory', memory.price)}
              >
                &times;
              </button>
            </div>
          ) : (
            <Link
              href='/memory'
              className='bg-slate-600 hover:bg-slate-500 text-white p-2 rounded justify-self-start'
            >
              Select Memory
            </Link>
          )}
        </div>
        {/* Storage */}
        <div className='grid grid-cols-1 gap-2 items-center'>
          <h2 className='font-bold md:text-xl'>
            <span className='text-red-600'>S</span>torage
          </h2>
          {storage !== null ? (
            <div className='flex items-center justify-between gap-4'>
              <Link
                href='/storage'
                className='truncate font-semibold hover:text-cyan-600 hover:underline'
                onClick={() => handleComponentRemove('storage', storage.price)}
              >
                {storage.name} - {storage.price}
              </Link>
              <button
                className='text-gray-400 hover:text-red-600 font-bold text-lg w-4 h-4 flex items-center justify-center'
                onClick={() => handleComponentRemove('storage', storage.price)}
              >
                &times;
              </button>
            </div>
          ) : (
            <Link
              href='/storage'
              className='bg-slate-600 hover:bg-slate-500 text-white p-2 rounded justify-self-start'
            >
              Select Storage
            </Link>
          )}
        </div>
        {/* Video Card */}
        <div className='grid grid-cols-1 gap-2 items-center'>
          <h2 className='font-bold md:text-xl'>
            <span className='text-red-600'>V</span>ideo Card
          </h2>
          {gpu !== null ? (
            <div className='flex items-center justify-between gap-4'>
              <Link
                href='/gpu'
                className='truncate font-semibold hover:text-cyan-600 hover:underline'
                onClick={() => handleComponentRemove('gpu', gpu.price)}
              >
                {`${gpu.name} (${gpu.chipset})`} - {gpu.price}
              </Link>
              <button
                className='text-gray-400 hover:text-red-600 font-bold text-lg w-4 h-4 flex items-center justify-center'
                onClick={() => handleComponentRemove('gpu', gpu.price)}
              >
                &times;
              </button>
            </div>
          ) : (
            <Link
              href='/gpu'
              className='bg-slate-600 hover:bg-slate-500 text-white p-2 rounded justify-self-start'
            >
              Select Video Card
            </Link>
          )}
        </div>
        {/* Case */}
        <div className='grid grid-cols-1 gap-2 items-center'>
          <h2 className='font-bold md:text-xl'>
            <span className='text-red-600'>C</span>ase
          </h2>
          {caseData !== null ? (
            <div className='flex items-center justify-between gap-4'>
              <Link
                href='/case'
                className='truncate font-semibold hover:text-cyan-600 hover:underline'
                onClick={() => handleComponentRemove('case', caseData.price)}
              >
                {caseData.name} - {caseData.price}
              </Link>
              <button
                className='text-gray-400 hover:text-red-600 font-bold text-lg w-4 h-4 flex items-center justify-center'
                onClick={() => handleComponentRemove('case', caseData.price)}
              >
                &times;
              </button>
            </div>
          ) : (
            <Link
              href='/case'
              className='bg-slate-600 hover:bg-slate-500 text-white p-2 rounded justify-self-start'
            >
              Select Case
            </Link>
          )}
        </div>
        {/* PSU */}
        <div className='grid grid-cols-1 gap-2 items-center'>
          <h2 className='font-bold md:text-xl'>
            <span className='text-red-600'>P</span>ower Supply
          </h2>
          {psu !== null ? (
            <div className='flex items-center justify-between gap-4'>
              <Link
                href='/psu'
                className='truncate font-semibold hover:text-cyan-600 hover:underline'
                onClick={() => handleComponentRemove('psu', psu.price)}
              >
                {`${psu.name} (${psu.wattage})`} - {psu.price}
              </Link>
              <button
                className='text-gray-400 hover:text-red-600 font-bold text-lg w-4 h-4 flex items-center justify-center'
                onClick={() => handleComponentRemove('psu', psu.price)}
              >
                &times;
              </button>
            </div>
          ) : (
            <Link
              href='/psu'
              className='bg-slate-600 hover:bg-slate-500 text-white p-2 rounded justify-self-start'
            >
              Select Power Supply
            </Link>
          )}
        </div>
      </section>
      <div>
        <h2 className='font-bold md:text-xl'>
          Total Cost: {`$${totalPrice.toFixed(2)}`}
        </h2>
      </div>
    </main>
  );
}
