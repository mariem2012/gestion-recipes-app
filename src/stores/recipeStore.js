import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useRecipeStore = defineStore("recipeStore", {
  state: () => ({
    recipes: [
      {
        id : 1,
        titre: "README",
        ingredient: "redaction du fichier",
        type: "Plat",
      },
    ],
    
    nextId: 2,
    nextIdP :3
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
