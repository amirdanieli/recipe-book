import type { Recipe } from "../../models/Recipe";
import styles from "./RecipeCard.module.css";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{recipe.title}</h2>
      <div className={styles.container}>
        <strong className={styles.detail}>Difficulty:</strong>
        {recipe.difficulty}
        <strong className={styles.detail}>Prep time: </strong>
        {recipe.prepTimeMinutes}
      </div>
      <p className={styles["truncate-multi-line"]}>{recipe.story}</p>
    </div>
  );
};

export default RecipeCard;
