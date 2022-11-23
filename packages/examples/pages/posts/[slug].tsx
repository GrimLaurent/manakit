import Head from 'next/head';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import markdownToHtml from '../../lib/markdownToHtml';
import PostBody from '../../components/post-body';

import Layout from '../templates/view';

type Props = {
  post: any;
  morePosts: any;
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      {/* //   <Container>
    //     <Header />
    //     {router.isFallback ? (
    //       <PostTitle>Loading…</PostTitle>
    //     ) : (
    //       <> */}
      <article className="mb-32">
        <Head>
          <title>Next.js Blog Example with</title>
          {/* <meta property="og:image" content={post.ogImage.url} /> */}
        </Head>
        {/* <div title={post.title} coverImage={post.coverImage} date={post.date} author={post.author} /> */}
        {/* <div>{post.content}</div> */}
        <PostBody content={post.content} />
      </article>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  console.log('getStaticProps', params);
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage']);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  console.log('getStaticPaths', posts);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
