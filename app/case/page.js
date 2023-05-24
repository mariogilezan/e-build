import data from '../../data/components.json';

import ComponentsLayout from '@/components/ComponentsLayout';

export default function CasePage() {
  return (
    <>
      <ComponentsLayout componentList={data.case} title='Case' />
    </>
  );
}
