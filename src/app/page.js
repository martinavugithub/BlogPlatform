import React from "react";
import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
import blogPosts from "../pages/data/api/blog";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Main blogPosts={blogPosts} />
      <Footer />
    </div>
  );
};

export default HomePage;
