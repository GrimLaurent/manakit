import Link from 'next/link';

export default function Welcome() {
  return (
    <>
      <h1>Homepage</h1>
      <Link href="/en">Documentation</Link>
    </>
  );
}
