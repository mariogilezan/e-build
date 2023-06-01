import ComponentsLayout from '@/components/ComponentsLayout';
import { getLocalData } from '@/lib/localdata';

export const metadata = {
  title: 'EBuild - Memory',
  openGraph: {
    title: 'Memory',
  },
};

export default async function MemoryPage() {
  const data = await getLocalData();

  return (
    <>
      <ComponentsLayout
        componentList={data.memory}
        componentName='memory'
        title='Memory'
      />
    </>
  );
}
