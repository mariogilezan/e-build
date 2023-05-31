import ComponentsLayout from '@/components/ComponentsLayout';

export const metadata = {
  title: 'EBuild - Video Card',
  openGraph: {
    title: 'Video Card',
  },
};

export default async function GpuPage() {
  const res = await fetch('http://127.0.0.1:3000/api/componentsList');
  const data = await res.json();
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
