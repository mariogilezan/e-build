import ComponentsLayout from '@/components/ComponentsLayout';

export const metadata = {
  title: 'EBuild - Case',
  openGraph: {
    title: 'Case',
  },
};

export default async function CasePage() {
  const req = await fetch('http://localhost:3000/api/componentsList');
  const data = await req.json();
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
