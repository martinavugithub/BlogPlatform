import React from "react";
import { useRouter } from 'next/router';

import NewBlogForm from "../components/newblogform";
import styles from "../styles/newpostpage.module.css";

const NewPostPage = () => {
  const router = useRouter();

  const handleBlogAdded = () => {
    router.push('/');
  };

  return (
    <div className={`${styles.container} `}>
      <h1 className={`${styles.h1} `}>Add New Blog</h1>
      <NewBlogForm addBlogPost={handleBlogAdded} />
    </div>
  );
};

export default NewPostPage;
