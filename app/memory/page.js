import data from '../../data/components.json';

import ComponentsLayout from '@/components/ComponentsLayout';

export const metadata = {
  title: 'EBuild - Memory',
  openGraph: {
    title: 'Memory',
  },
};

export default function MemoryPage() {
  return (
    <>
      <ComponentsLayout componentList={data.memory} title='Memory' />
    </>
  );
}
