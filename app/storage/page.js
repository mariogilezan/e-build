import ComponentsLayout from '@/components/ComponentsLayout';
import { getLocalData } from '@/lib/localdata';

export const metadata = {
  title: 'EBuild - Storage',
  openGraph: {
    title: 'Storage',
  },
};

export default async function StoragePage() {
  const data = await getLocalData();

  return (
    <>
      <ComponentsLayout
        componentList={data.storage}
        componentName='storage'
        title='Storage'
      />
    </>
  );
}
