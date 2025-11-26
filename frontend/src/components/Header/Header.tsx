import styles from "./Header.module.css";

const Header = () => (
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
      <a className={styles.link} href="/add">
        Add Recipe
      </a>
      {/* Add more links as you grow */}
    </nav>
  </header>
);

export default Header;
