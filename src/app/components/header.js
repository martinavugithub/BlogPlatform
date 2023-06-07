import Link from "next/link";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <header className={`${styles.header} navbar navbar-expand-lg navbar-light bg-light`}>
      <div className="container">
        <Link href="/">
          <span className={`${styles.brand} navbar-brand`}>My Blog</span>
        </Link>
        <Link href="/new-post">
          <button className={`${styles.addButton} btn btn-outline-success`} type="button">
            Add new blog
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;

