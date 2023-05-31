import ComponentsLayout from '@/components/ComponentsLayout';

export const metadata = {
  title: 'EBuild - PSU',
  openGraph: {
    title: 'PSU',
  },
};

export default async function PsuPage() {
  const res = await fetch('http://127.0.0.1:3000/api/componentsList', {
    cache: 'force-cache',
  });
  const data = await res.json();
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
