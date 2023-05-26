import ComponentsLayout from '@/components/ComponentsLayout';

export const metadata = {
  title: 'EBuild - CPU',
  openGraph: {
    title: 'CPU',
  },
};

export default async function CpuPage() {
  const req = await fetch('http://localhost:3000/api/componentsList');
  const data = await req.json();
  return (
    <>
      <ComponentsLayout componentList={data.cpu} title='CPU' />
    </>
  );
}
