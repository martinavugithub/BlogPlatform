import React from "react";
import blogService from "../../services/blog";
import styles from '../../styles/id.module.css';
import Link from "next/link";

const BlogPage = ({ post }) => {
  return (
    <>
      <div className={`${styles.container} mt-4`}>
        <h1 className={`${styles.h1} ${styles.mb4}`}>{post.title}</h1>
        <p className={`${styles.p} ${styles.mb4}`}>{post.content}</p>
      </div>
      <div className={`${styles.backLink}`}>
        <Link href="/">Natrag na naslovnu</Link>
      </div>
    </>
  );
};

export async function getStaticPaths() {
 
  const paths = blogService.getPosts().map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {

  const postId = parseInt(params.id, 10);
  const post = blogService.getPosts().find((post) => post.id === postId);

  return {
    props: {
      post,
    },
  };
}

export default BlogPage;
