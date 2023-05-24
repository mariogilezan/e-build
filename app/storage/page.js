import data from '../../data/components.json';

import ComponentsLayout from '@/components/ComponentsLayout';

export default function StoragePage() {
  return (
    <>
      <ComponentsLayout componentList={data.storage} title='Storage' />
    </>
  );
}
