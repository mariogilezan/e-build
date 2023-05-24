import data from '../../data/components.json';

import ComponentsLayout from '@/components/ComponentsLayout';

export const metadata = {
  title: 'EBuild - Case',
  openGraph: {
    title: 'Case',
  },
};

export default function CasePage() {
  return (
    <>
      <ComponentsLayout componentList={data.case} title='Case' />
    </>
  );
}
