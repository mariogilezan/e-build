import ComponentsLayout from '@/components/ComponentsLayout';

export const metadata = {
  title: 'EBuild - PSU',
  openGraph: {
    title: 'PSU',
  },
};

export default async function PsuPage() {
  const req = await fetch('http://localhost:3000/api/componentsList');
  const data = await req.json();
  return (
    <>
      <ComponentsLayout
        componentList={data.psu}
        componentName='psu'
        title='PSU'
      />
    </>
  );
}
