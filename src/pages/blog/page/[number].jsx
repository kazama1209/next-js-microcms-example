import CommonLayout from "components/layouts/CommonLayout";
import Posts from "components/blog/Posts";

import { getAllPosts } from "lib/api/posts";

export async function getStaticPaths() {
  const res = await getAllPosts();
  const allPosts = res.data.contents;

  const per_page = 8;

  const range = (start, end) => {
    return [...Array(end - start + 1)].map((_, i) => start + i);
  };

  const paths = range(1, Math.ceil(allPosts.length / per_page)).map(
    (number) => `/blog/page/${number}`
  );

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  const res = await getAllPosts();
  const posts = res.data.contents;

  return {
    revalidate: 1,
    props: {
      posts,
    },
  };
}

export default function BlogPage({ posts }) {
  return (
    <CommonLayout>
      <div className="my-3 mx-5">
        <Posts posts={posts} />
      </div>
    </CommonLayout>
  );
}
