'use client';

import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setComponent } from '@/store/componentsSlice';

export default function ComponentsLayout({
  componentList,
  componentName,
  title,
}) {
  const dispatch = useDispatch();

  return (
    <section className='container mx-auto min-h-screen flex flex-col gap-10 items-center text-center px-4 py-8'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <ul className='text-sm lg:text-base flex flex-col gap-2 w-full sm:w-4/5 md:w-3/4 lg:w-3/5'>
        <li className='grid grid-cols-4'>
          <p className='col-span-2 justify-self-start'>Name</p>
          <p className='justify-self-end'>Price</p>
        </li>
        {componentList.map((component) => (
          <li
            key={component.id}
            className='grid grid-cols-4 items-center gap-2 shadow-md pl-2'
          >
            <h5 className='col-span-2 justify-self-start text-left'>
              {component.name}
            </h5>
            <p className='justify-self-end'>{component.price}</p>
            <Link
              href='/'
              className='px-2 py-1 bg-slate-600 hover:bg-slate-500 text-white font-semibold justify-self-end rounded-sm'
              onClick={() => {
                const parsedPrice = Math.round(
                  parseFloat(component.price.slice(1))
                );

                dispatch(
                  setComponent({
                    name: componentName,
                    value: component,
                    price: parsedPrice,
                  })
                );
              }}
            >
              Add
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
