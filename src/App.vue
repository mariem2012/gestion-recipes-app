<script setup>
import { RouterView }  from 'vue-router' 
</script>

<template>
   <div class="page-background">
      
  <header>
    <nav class="navbar navbar-expand-lg custom-navbar bg-dark">
    <div class="container">
      <a class="navbar-brand fw-bold bib" >
        <RouterLink class="list text-decoration-none text-white me-5 fw-bold" to="/">Accueil</RouterLink>
      </a>
      
      <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <i class="fas fa-bars text-white"></i> 
</button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page">
              <RouterLink class="list text-decoration-none text-white me-5 fw-bold" to="/list">Recettes</RouterLink>            
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
           
  <RouterView />
  </header>
   </div>
</template>

<style scoped>
/* .custom-navbar {
  background-image: url('assets\navbar.jpg'); 
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat; 
  border-radius: 0 0 10px 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
} */

</style>
