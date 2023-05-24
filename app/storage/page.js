import data from '../../data/components.json';

import ComponentsLayout from '@/components/ComponentsLayout';

export const metadata = {
  title: 'EBuild - Storage',
  openGraph: {
    title: 'Storage',
  },
};

export default function StoragePage() {
  return (
    <>
      <ComponentsLayout componentList={data.storage} title='Storage' />
    </>
  );
}
