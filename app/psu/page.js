import data from '../../data/components.json';

import ComponentsLayout from '@/components/ComponentsLayout';

export const metadata = {
  title: 'EBuild - PSU',
  openGraph: {
    title: 'PSU',
  },
};

export default function PsuPage() {
  return (
    <>
      <ComponentsLayout componentList={data.psu} title='PSU' />
    </>
  );
}
