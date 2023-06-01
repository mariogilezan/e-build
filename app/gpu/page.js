import ComponentsLayout from '@/components/ComponentsLayout';
import { getLocalData } from '@/lib/localdata';

export const metadata = {
  title: 'EBuild - Video Card',
  openGraph: {
    title: 'Video Card',
  },
};

export default async function GpuPage() {
  const data = await getLocalData();

  return (
    <>
      <ComponentsLayout
        componentList={data.gpu}
        componentName='gpu'
        title='Video Card'
      />
    </>
  );
}
