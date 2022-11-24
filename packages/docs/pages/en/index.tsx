import { Fragment } from 'react';
import { getPages, PageMeta } from '../../routers';
import Articles from '../../components/articles';

import Layout from '../../components/templates/layout';

export default function Home({ page }: { page: PageMeta[] }) {
  return (
    <Fragment>
      <Layout>
        <h1>Articles</h1>
        <Articles posts={page} />
      </Layout>
    </Fragment>
  );
}

export async function getStaticProps() {
  const page = getPages('about')
    .slice(0, 9)
    .map((post: any) => post.meta);

  return { props: { page } };
}
