import ComponentsLayout from '@/components/ComponentsLayout';
import { getLocalData } from '@/lib/localdata';

export const metadata = {
  title: 'EBuild - PSU',
  openGraph: {
    title: 'PSU',
  },
};

export default async function PsuPage() {
  const data = await getLocalData();

  return (
    <>
      <ComponentsLayout
        componentList={data.psu}
        componentName='psu'
        title='PSU'
      />
    </>
  );
}
