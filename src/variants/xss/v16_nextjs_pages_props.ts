import type { GetServerSideProps } from 'next';
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const q = String(ctx.query.q ?? ''); // SOURCE
  return { props: { html: q } }; // SINK CWE-79 — passed to page props unescaped
};
export default function Page({ html }: { html: string }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
