import data from '../../data/components.json';

import ComponentsLayout from '@/components/ComponentsLayout';

export default function MotherboardPage() {
  return (
    <>
      <ComponentsLayout componentList={data.motherboard} title='Motherboard' />
    </>
  );
}
