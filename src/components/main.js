'use client';

import React, { useState, useEffect} from "react";
import styles from "../styles/main.module.css"; 
import Link from "next/link";

const Main = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchData = async () => { 
      try {
        const response = await fetch('api/handler');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className={`container ${styles.main}`}>
      <h1 className={`mb-4 ${styles.heading}`}>Traveling Round Croatia</h1>
      <div className={`row ${styles.blogRow}`}>
        {posts && posts.map((post) => (
          <div className={`col-md-4 ${styles.blogColumn}`} key={post.id}>
            <div className={`card mb-4 ${styles.postCard}`}>
              <div className="card-body">
                <Link href={`/blog/${post.id}`} passHref>
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
