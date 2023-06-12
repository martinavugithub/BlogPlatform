import React, { useState } from "react";
import styles from "../styles/newblogform.module.css";

const NewBlogForm = ({ addBlogPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/handler", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        const newBlogPost = await response.json();
        addBlogPost(newBlogPost);
        setTitle("");
        setContent("");
      } else {
        console.error("Error creating blog post:", response.status);
      }
    } catch (error) {
      console.error("Error creating blog post:", error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.formLabel}>
            Title:
          </label>
          <input
            type="text"
            className={styles.formControl}
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="content" className={styles.formLabel}>
            Content:
          </label>
          <textarea
            className={`${styles.formControl} ${styles.textareaControl}`}
            id="content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.btnSubmit}>
          Create
        </button>
      </form>
    </div>
  );
};

export default NewBlogForm;



