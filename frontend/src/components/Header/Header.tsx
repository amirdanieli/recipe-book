import { useAuth } from "../../context/AuthContext";
import styles from "./Header.module.css";

const Header = () => {
  const { isAdmin, logout } = useAuth();

  return (
    <header className={styles.container}>
      <h1>
        <a href="/" className={styles.title}>
          Danieli's Recipe Book
        </a>
      </h1>
      <nav className={styles.nav}>
        <a className={styles.link} href="/">
          Home
        </a>
        <a className={styles.link} href="/categories">
          Categories
        </a>
        {isAdmin && (
          <a className={styles.link} href="/add">
            Add Recipe
          </a>
        )}
        {!isAdmin && (
          <a className={styles.link} href="/admin/login">
            Admin Login
          </a>
        )}
        {isAdmin && <button onClick={logout}>Logout</button>}
      </nav>
    </header>
  );
};

export default Header;
