import { query } from '.keystone/api';
import OutreachPostLayout from "@/layouts/outreach";
import { componentBlockRenderers } from '@/lib/renderers';
import { DocumentRenderer } from "@keystone-next/document-renderer";
import { GetStaticPropsContext } from "next";

export default function Post({ post }) {

  return (
    <OutreachPostLayout frontMatter={post}>
      <DocumentRenderer document={post.content.document} componentBlocks={componentBlockRenderers} />
    </OutreachPostLayout>
  );
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext) {
  const post = await query.Program.findOne({
    where: { slug: params!.slug as string },
    query: 'id title content { document } image { width height src }',
  });
  return { props: { post } };
}

export async function getStaticPaths() {
  const posts = await query.Program.findMany({
    query: `slug`,
  });

  const paths = posts
    .map(post => post.slug)
    .filter((slug): slug is string => !!slug)
    .map(slug => `/outreach/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
