import ComponentsLayout from '@/components/ComponentsLayout';
import { getLocalData } from '@/lib/localdata';

export const metadata = {
  title: 'EBuild - Motherboard',
  openGraph: {
    title: 'Motherboard',
  },
};

export default async function MotherboardPage() {
  const data = await getLocalData();

  return (
    <>
      <ComponentsLayout
        componentList={data.motherboard}
        componentName='motherboard'
        title='Motherboard'
      />
    </>
  );
}
