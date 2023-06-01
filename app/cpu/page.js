import ComponentsLayout from '@/components/ComponentsLayout';
import { getLocalData } from '@/lib/localdata';

export const metadata = {
  title: 'EBuild - CPU',
  openGraph: {
    title: 'CPU',
  },
};

export default async function CpuPage() {
  const data = await getLocalData();

  return (
    <>
      <ComponentsLayout
        componentList={data.cpu}
        componentName='cpu'
        title='CPU'
      />
    </>
  );
}
