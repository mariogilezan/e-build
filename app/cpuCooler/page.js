import data from '../../data/components.json';

import ComponentsLayout from '@/components/ComponentsLayout';

export const metadata = {
  title: 'EBuild - CPU Cooler',
  openGraph: {
    title: 'CPU Cooler',
  },
};

export default function CpuCoolerPage() {
  return (
    <>
      <ComponentsLayout componentList={data.cpuCooler} title='CPU Cooler' />
    </>
  );
}
