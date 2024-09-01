<template>
  <div class="container">
    <form
      @submit.prevent="handleAddRecipe"
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
        <label for="ingredient" class="form-label">Ingrédient :</label>
        <input
          type="text"
          class="input form-control"
          v-model="ingredient"
          id="ingredient"
          required
        />
      </div>
      <div class="mb-3">
        <label for="type" class="form-label">Type de recette :</label>
        <select id="type" v-model="type" class="form-select" required>
          <option value="entre">Entrée</option>
          <option value="plat">Plat</option>
          <option value="dessert">Dessert</option>
        </select>
      </div>
      <button class="clr btn mt-3 mb-4 me-3 text-white">Ajouter</button>
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
import { useRecipeStore } from "@/stores/recipeStore";
import { useRouter } from "vue-router";
const router = useRouter();
import { ref } from "vue";
const store = useRecipeStore();
const titre = ref("");
const ingredient = ref("");
const type = ref("Plat");

const handleAddRecipe = () => {
  addRecipe();
  router.push("/list");
};
const addRecipe = () => {
  store.addRecipe({
    titre: titre.value,
    ingredient: ingredient.value,
    type: type.value
  });
  titre.value = "";
  ingredient.value = "";
  type.value = "";
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
