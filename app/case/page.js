import ComponentsLayout from '@/components/ComponentsLayout';

export const metadata = {
  title: 'EBuild - Case',
  openGraph: {
    title: 'Case',
  },
};

export default async function CasePage() {
  const res = await fetch('http://127.0.0.1:3000/api/componentsList');
  const data = await res.json();
  return (
    <>
      <ComponentsLayout
        componentList={data.case}
        componentName='case'
        title='Case'
      />
    </>
  );
}
