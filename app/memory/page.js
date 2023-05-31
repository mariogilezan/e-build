import ComponentsLayout from '@/components/ComponentsLayout';

export const metadata = {
  title: 'EBuild - Memory',
  openGraph: {
    title: 'Memory',
  },
};

export default async function MemoryPage() {
  const req = await fetch('http://127.0.0.1:3000/api/componentsList', {
    cache: 'no-store',
  });
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
