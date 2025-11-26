import { useParams } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";
import mockRecipe from "../../models/MockRecipe";
import styles from "./Category.module.css";

const Category = () => {
  const { name } = useParams<{ name: string }>();
  const categoryName = name ? decodeURIComponent(name) : "Unkown";

  return (
    <>
      <h1>Category Filler Code - {categoryName}</h1>
      <div className={styles.container}>
        <RecipeCard recipe={mockRecipe}></RecipeCard>
      </div>
    </>
  );
};

export default Category;
