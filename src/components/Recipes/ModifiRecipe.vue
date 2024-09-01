<template>
  <div class="container">
    <form
      @submit.prevent="handleUpdateRecipe"
      class="formulaire form mb-5 mt-5 shadow p-3 mb-5 bg-body rounded"
    >
      <div class="mb-3">
        <label for="titre" class="form-label">Titre :</label>
        <input
          type="text"
          class="input form-control"
          v-model="titre"
          id="titre"
          required
        />
      </div>
      <div class="mb-3">
        <label for="ingredient" class="form-label">Ingrédients :</label>
        <input
          type="text"
          class="input form-control"
          v-model="ingredient"
          id="ingredient"
          required
        />
      </div>
      <div class="mb-3">
        <label for="type" class="form-label">Type :</label>
        <select class="input form-select" v-model="type" id="type" required>
          <option value="entre">Entrée</option>
          <option value="plat">Plat</option>
          <option value="dessert">Dessert</option>
        </select>
      </div>
      <button class="clr btn btn-success mt-3 mb-4 me-3">Enregistrer</button>
      <RouterLink
        class="list text-decoration-none text-white me-5 fw-bold"
        to="/list"
      >
        <button class="btn btn-danger mt-3 mb-4">Annuler</button>
      </RouterLink>
    </form>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { useRecipeStore } from "@/stores/recipeStore";

const store = useRecipeStore();
const router = useRouter();
const route = useRoute();

const titre = ref("");
const ingredient = ref("");
const type = ref("");

const id = Number(route.params.id);

onMounted(() => {
  const recipe = store.recipes.find((recipe) => recipe.id === id);
  if (recipe) {
    titre.value = recipe.titre;
    ingredient.value = recipe.ingredient;
    type.value = recipe.type;
  }
});

const handleUpdateRecipe = () => {
  const updatedRecipe = {
    id,
    titre: titre.value,
    ingredient: ingredient.value,
    type: type.value,
  };

  store.updatedRecipe(updatedRecipe);
  router.push("/list");
};
</script>

<style scoped>
.clr {
  background-color: #044e8f;
}
.clr:hover {
  background-color: #023e73;
}
.formulaire {
  width: 50%;
  border-radius: 10px;
  padding: 20px;
  margin: auto;
}
</style>
