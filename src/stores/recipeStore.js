import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useRecipeStore = defineStore("recipeStore", {
  state: () => ({
    recipes: [
      {
        id : 1,
        titre: "Riz au poisson",
        ingredient: "riz, poisson, huile, legumes",
        type: "Plat",
      },
      {
        id : 2,
        titre: "Salade de fruits",
        ingredient: "kiwi, ananas, mangue, banane",
        type: "Entrée",
      },
      {
        id : 3,
        titre: "Crêpes au nutella",
        ingredient: "Oeuf, farine, beurre, lait",
        type: "Dessert",
      },
    ],
    
    nextId: 4,
    nextIdP :5
  }),

  actions: {
    addRecipe(recipe) {
      recipe.id = this.nextId++;
      this.recipes.push(recipe)
    },
    deleteRecipe(id) {
      this.recipes.splice(id, 1);
    },
    updatedRecipe(updatedRecipe) {
      const index = this.recipes.findIndex(recipe => recipe.id === updatedRecipe.id);
      if (index !== -1) {
        this.recipes[index] = updatedRecipe;
      }
    },
  }
})
