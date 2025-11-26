import type { Recipe } from "../models/Recipe";
import type { Ingredient } from "../models/Ingredient";

export const mockRecipe: Recipe = {
  id: "r-001",
  title: "Classic Pancakes",
  slug: "classic-pancakes",
  story:
    "A simple, fluffy pancake recipe that's quick to make and perfect for weekend breakfasts. Adapted from a family recipe — works well with fresh berries or maple syrup.",
  ingredients: [
    { name: "All-purpose flour", quantity: "1 1/2", unit: "cups" } as Ingredient,
    { name: "Baking powder", quantity: "2", unit: "teaspoons" } as Ingredient,
    { name: "Sugar", quantity: "1", unit: "tablespoon" } as Ingredient,
    { name: "Salt", quantity: "1/2", unit: "teaspoon" } as Ingredient,
    { name: "Milk", quantity: "1 1/4", unit: "cups" } as Ingredient,
    { name: "Egg", quantity: "1", unit: "large" } as Ingredient,
    { name: "Unsalted butter", quantity: "3", unit: "tablespoons (melted)" } as Ingredient,
  ],
  steps: [
    "In a large bowl whisk together flour, baking powder, sugar, and salt.",
    "In another bowl whisk milk, egg, and melted butter until combined.",
    "Pour wet ingredients into dry and stir until just combined; some lumps are OK.",
    "Heat a non-stick skillet over medium and grease lightly. Pour 1/4 cup batter per pancake.",
    "Cook until bubbles form on the surface, flip, and cook until golden on the other side.",
    "Serve warm with butter and maple syrup or fresh fruit.",
  ],
  prepTimeMinutes: 15,
  prepTimeNote: "includes mixing; does not include optional resting",
  difficulty: "Easy",
  categoryId: "c-breakfast",
  imageUrl: "../assets/pancake.jpg",
  createdBy: "DemoUser",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export default mockRecipe;