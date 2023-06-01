import ComponentsLayout from '@/components/ComponentsLayout';
import { getLocalData } from '@/lib/localdata';

export const metadata = {
  title: 'EBuild - CPU Cooler',
  openGraph: {
    title: 'CPU Cooler',
  },
};

export default async function CpuCoolerPage() {
  const data = await getLocalData();

  return (
    <>
      <ComponentsLayout
        componentList={data.cpuCooler}
        componentName='cpuCooler'
        title='CPU Cooler'
      />
    </>
  );
}
