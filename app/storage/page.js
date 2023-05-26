import ComponentsLayout from '@/components/ComponentsLayout';

export const metadata = {
  title: 'EBuild - Storage',
  openGraph: {
    title: 'Storage',
  },
};

export default async function StoragePage() {
  const req = await fetch('http://localhost:3000/api/componentsList');
  const data = await req.json();
  return (
    <>
      <ComponentsLayout componentList={data.storage} title='Storage' />
    </>
  );
}
