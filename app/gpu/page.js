import ComponentsLayout from '@/components/ComponentsLayout';

export const metadata = {
  title: 'EBuild - Video Card',
  openGraph: {
    title: 'Video Card',
  },
};

export default async function GpuPage() {
  const req = await fetch('http://localhost:3000/api/componentsList');
  const data = await req.json();
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
