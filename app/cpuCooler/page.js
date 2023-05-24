import data from '../../data/components.json';

import ComponentsLayout from '@/components/ComponentsLayout';

export default function CpuCoolerPage() {
  return (
    <>
      <ComponentsLayout componentList={data.cpuCooler} title='Cpu Cooler' />
    </>
  );
}
