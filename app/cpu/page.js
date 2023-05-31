import ComponentsLayout from '@/components/ComponentsLayout';

export const metadata = {
  title: 'EBuild - CPU',
  openGraph: {
    title: 'CPU',
  },
};

export default async function CpuPage() {
  const res = await fetch('http://127.0.0.1:3000/api/componentsList', {
    cache: 'force-cache',
  });
  const data = await res.json();
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
