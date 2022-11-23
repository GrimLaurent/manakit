import { Fragment } from 'react';
import { getPages, PageMeta } from '../../routers';
import Articles from '../../src/components/articles';

export default function Home({ page }: { page: PageMeta[] }) {
  return (
    <Fragment>
      <h1>Articles</h1>
      <Articles posts={page} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const page = getPages('about')
    .slice(0, 9)
    .map((post: any) => post.meta);

  return { props: { page } };
}
