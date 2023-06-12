import React from "react";
import blogPosts from "../data/api/blog";
import styles from '../../styles/id.module.css';

const BlogPage = ({ post }) => {
  return (
    <div className={`${styles.container} mt-4`}>
      <h1 className={`${styles.h1} ${styles.mb4}`}>{post.title}</h1>
      <p className={`${styles.p} ${styles.mb4}`}>{post.content}</p>
    </div>
  );
};

export async function getStaticPaths() {
 
  const paths = blogPosts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {

  const postId = parseInt(params.id, 10);
  const post = blogPosts.find((post) => post.id === postId);

  return {
    props: {
      post,
    },
  };
}

export default BlogPage;
