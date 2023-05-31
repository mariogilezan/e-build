import ComponentsLayout from '@/components/ComponentsLayout';

export const metadata = {
  title: 'EBuild - Motherboard',
  openGraph: {
    title: 'Motherboard',
  },
};

export default async function MotherboardPage() {
  const res = await fetch('http://127.0.0.1:3000/api/componentsList');
  const data = await res.json();
  return (
    <>
      <ComponentsLayout
        componentList={data.motherboard}
        componentName='motherboard'
        title='Motherboard'
      />
    </>
  );
}
