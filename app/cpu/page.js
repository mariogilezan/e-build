import data from '../../data/components.json';

import ComponentsLayout from '@/components/ComponentsLayout';

export const metadata = {
  title: 'EBuild - CPU',
  openGraph: {
    title: 'CPU',
  },
};

export default function CpuPage() {
  return (
    <>
      <ComponentsLayout componentList={data.cpu} title='CPU' />
    </>
  );
}
