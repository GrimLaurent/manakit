import Link from 'next/link';
import type { PageMeta } from '../../routers';

export default function Articles({ posts }: { posts: PageMeta[] }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <div>
            <Link href={`/en/about/${post.slug}`}>{post.title}</Link>
          </div>
          <p>{post.excerpt}</p>
        </li>
      ))}
    </ul>
  );
}
