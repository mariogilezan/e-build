import data from '../../data/components.json';

import ComponentsLayout from '@/components/ComponentsLayout';

export default function CpuPage() {
  return (
    <>
      <ComponentsLayout componentList={data.cpu} title='Cpu' />
    </>
  );
}
