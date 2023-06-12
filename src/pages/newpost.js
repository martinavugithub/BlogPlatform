import React from "react";
import NewBlogForm from "../components/newblogform";
import styles from "../styles/newpostpage.module.css";

const NewPostPage = () => {
  return (
    <div className={`${styles.container} `}>
      <h1 className={`${styles.h1} `}>Add New Blog</h1>
      <NewBlogForm />
    </div>
  );
};

export default NewPostPage;
