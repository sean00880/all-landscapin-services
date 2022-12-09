import Link from "next/link";
import type { PostMeta } from "@/src/api";
import styles from "@/styles/Articles.module.css";
import Image from "next/dist/client/image";

export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
    <div className={styles.container}>
    <ul className={styles.list}>
      {posts.map((post) => (
        <li key={post.slug}>
          <div className={styles.title}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </div>
          <Image src='https://i.ibb.co/Rbgfgbz/social.png' width={100} height={100}></Image>
          <p>{post.excerpt}</p>
          <p className={styles.tags}>
            {post.tags.map((tag) => (
              <Link key={tag} href={`/tags/${tag}`}>
                {tag}
              </Link>
            ))}
          </p>
          <hr />
        </li>
        
      ))}
    </ul>
    </div>
  );
}
