import data from '../../data/components.json';

import ComponentsLayout from '@/components/ComponentsLayout';

export const metadata = {
  title: 'EBuild - Motherboard',
  openGraph: {
    title: 'Motherboard',
  },
};

export default function MotherboardPage() {
  return (
    <>
      <ComponentsLayout componentList={data.motherboard} title='Motherboard' />
    </>
  );
}
