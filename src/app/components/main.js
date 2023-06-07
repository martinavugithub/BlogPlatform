import React from "react";
import blogPosts from "../data/apii/blog";
import styles from "../styles/main.module.css"; 
import Link from "next/link";

const Main = () => {
    return (
      <main className={`container ${styles.main}`}>
        <h1 className={`mb-4 ${styles.heading}`}>Traveling Round Croatia</h1>
        <div className={`row ${styles.blogRow}`}>
          {blogPosts.map((post) => (
            <div className={`col-md-4 ${styles.blogColumn}`} key={post.id}>
              <div className={`card mb-4 ${styles.postCard}`}>
                <div className="card-body">
                  <Link href={`/blog/${post.id}`}>
                    <span className={styles.postLink}>
                      <h2 className={`card-title ${styles.postTitle}`}>
                        {post.title}
                      </h2>
                    </span>
                  </Link>
                  <p className={`card-text ${styles.postContent}`}>
                    {post.content.substring(0, 250)}...
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  };
  
  export default Main;