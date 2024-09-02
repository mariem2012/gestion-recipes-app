<template>
  <div class="container mt-5">
    <RouterLink
      class="list text-decoration-none text-white me-5 fw-bold"
      to="/ajout"
      
    >
      <button
        class="clr btn text-white mt-5 mb-4 fw-bold bg-success"
        v-if="affichebtn"
        @click="maskBtn"
      >
        Ajouter une recette
      </button>
    </RouterLink>
    <div class="table-responsive">
      <table class="table table-striped table-bordered border-black">
        <thead class="table-success">
          <tr>
            <th>Id</th>
            <th>Titre</th>
            <th>Ingrédients</th>
            <th>Type</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(recipe, index) in store.recipes" :key="index">
            <td>{{ recipe.id }}</td>
            <td>{{ recipe.titre }}</td>
            <td>{{ recipe.ingredient }}</td>
            <td>{{ recipe.type }}</td>
            <td class="text-center">
              <button class="btn btn-sm" @click="openModal(recipe)">
                <i
                  class="fa-solid fa-eye"
                  style="color: #4596d3; font-size: 25px"
                ></i>
              </button>
              <RouterLink :to="{ path: `/modifie/${recipe.id}` }">
                <button class="btn btn-sm">
                  <i
                    class="fa-solid fa-pen-to-square"
                    style="color: #1ac163; font-size: 25px"
                  ></i>
                </button>
              </RouterLink>
              <button class="btn btn-sm" @click="destroyRecipe(recipe.id)">
                <i
                  class="fa-solid fa-trash"
                  style="color: #e30d0d; font-size: 25px"
                ></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="isModalVisible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-body">
          <h3>Détails du recette</h3>
          <p><strong>Titre :</strong> {{ selectedRecipe.titre }}</p>
          <p><strong>Ingrédients :</strong> {{ selectedRecipe.ingredient }}</p>
          <p><strong>Type :</strong> {{ selectedRecipe.type }}</p>
        </div>
        <button class="btn btn-secondary" @click="closeModal">Fermer</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRecipeStore } from "@/stores/recipeStore";
import { ref } from "vue";
const store = useRecipeStore();
let affichebtn = true;
const maskBtn = () => {
  affichebtn = false;
};
const isModalVisible = ref(false);
const selectedRecipe = ref(null);

const openModal = (recipe) => {
  selectedRecipe.value = recipe;
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};

const destroyRecipe = () => {
  store.deleteRecipe();
};
</script>

<style scoped>
.clr {
  background-color: #044e8f;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  position: relative;
}

.modal-body {
  padding: 20px;
}
</style>
