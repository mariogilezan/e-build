import ComponentsLayout from '@/components/ComponentsLayout';
import { getLocalData } from '@/lib/localdata';

export const metadata = {
  title: 'EBuild - Case',
  openGraph: {
    title: 'Case',
  },
};

export default async function CasePage() {
  const data = await getLocalData();

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
