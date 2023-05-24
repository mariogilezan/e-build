import data from '../../data/components.json';

import ComponentsLayout from '@/components/ComponentsLayout';

export const metadata = {
  title: 'EBuild - Video Card',
  openGraph: {
    title: 'Video Card',
  },
};

export default function GpuPage() {
  return (
    <>
      <ComponentsLayout componentList={data.gpu} title='Video Card' />
    </>
  );
}
