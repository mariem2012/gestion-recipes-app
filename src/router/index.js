import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import AjoutRecipe from '@/components/Recipes/AjoutRecipe.vue'
import ListRecipe from '@/components/Recipes/ListRecipe.vue'
import ModifiRecipe from '@/components/Recipes/ModifiRecipe.vue'
import RecipeView from '@/views/RecipeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/recipe',
      component: RecipeView
    },
    {
      path: '/ajout',
      component: AjoutRecipe
    },
    {
      path: '/list',
      component: ListRecipe
    },
    {
      path: '/modifie/:id', 
      component: ModifiRecipe,
      props: true  
    }
    
  ]
})

export default router
