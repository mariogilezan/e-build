import data from '../../data/components.json';

import ComponentsLayout from '@/components/ComponentsLayout';

export default function MemoryPage() {
  return (
    <>
      <ComponentsLayout componentList={data.memory} title='Memory' />
    </>
  );
}
