import ComponentsLayout from '@/components/ComponentsLayout';

export const metadata = {
  title: 'EBuild - Storage',
  openGraph: {
    title: 'Storage',
  },
};

export default async function StoragePage() {
  const res = await fetch('http://127.0.0.1:3000/api/componentsList');
  const data = await res.json();
  return (
    <>
      <ComponentsLayout
        componentList={data.storage}
        componentName='storage'
        title='Storage'
      />
    </>
  );
}
