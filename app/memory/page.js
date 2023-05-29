import ComponentsLayout from '@/components/ComponentsLayout';

export const metadata = {
  title: 'EBuild - Memory',
  openGraph: {
    title: 'Memory',
  },
};

export default async function MemoryPage() {
  const req = await fetch('http://localhost:3000/api/componentsList');
  const data = await req.json();
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
