import data from '../../data/components.json';

import ComponentsLayout from '@/components/ComponentsLayout';

export default function PsuPage() {
  return (
    <>
      <ComponentsLayout componentList={data.psu} title='PSU' />
    </>
  );
}
