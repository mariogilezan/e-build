import data from '../../data/components.json';

import ComponentsLayout from '@/components/ComponentsLayout';

export default function GpuPage() {
  return (
    <>
      <ComponentsLayout componentList={data.gpu} title='Video Card' />
    </>
  );
}
