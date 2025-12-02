import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={"content-container"}>
      <Link to="/categories">
        <button className={styles.button}>Recipe Categories</button>
      </Link>
      <Link to="/add">
        <button className={styles.button}>Add Recipe</button>
      </Link>
    </div>
  );
};
export default Home;
