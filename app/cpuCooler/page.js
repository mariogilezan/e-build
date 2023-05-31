import ComponentsLayout from '@/components/ComponentsLayout';

export const metadata = {
  title: 'EBuild - CPU Cooler',
  openGraph: {
    title: 'CPU Cooler',
  },
};

export default async function CpuCoolerPage() {
  const res = await fetch('http://127.0.0.1:3000/api/componentsList', {
    cache: 'force-cache',
  });
  const data = await res.json();
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
