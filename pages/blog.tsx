import { getAllPosts, PostMeta } from "@/src/api";
import Articles from "@/src/components/articles";

export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <div className="container">
      <h1 className='heading'>Our Blog</h1>
      <hr />
      <Articles posts={posts} />
      <hr />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);
    

  return { props: { posts } };
}
