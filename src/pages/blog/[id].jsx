import CommonLayout from "components/layouts/CommonLayout";
import PostDetail from "components/blog/PostDetail";

import { getAllPosts, getPostById } from "lib/api/posts";

export async function getStaticPaths() {
  const res = await getAllPosts();
  const posts = res.data.contents;
  const paths = posts.map(({ id }) => `/blog/${id}`);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = String(params?.id);
  const res = await getPostById(id);
  const post = res.data;

  return {
    props: { post },
    revalidate: 1,
  };
}

export default function BlogId({ post }) {
  return (
    <CommonLayout>
      <div className="my-3 mx-5">
        <PostDetail post={post} />
      </div>
    </CommonLayout>
  );
}
