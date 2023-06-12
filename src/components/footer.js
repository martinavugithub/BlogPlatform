import React from "react";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={`footer mt-auto py-3 ${styles.footer}`}>
      <div className={`container text-center ${styles.container}`}>
        <span className={`text-muted ${styles.textMuted}`}>My Blog &copy; 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
