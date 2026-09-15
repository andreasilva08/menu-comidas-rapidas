<template>
  <q-page class="q-pb-xl bg-grey-1 text-grey-9">
    <!-- Hero Banner de Categoría -->
    <div class="category-hero q-py-xl text-white relative overflow-hidden" style="background-color: #0E0E11;">
      <div class="q-container q-px-md max-w-7xl mx-auto relative z-10">
        <q-breadcrumbs class="text-caption text-grey-5 q-mb-sm">
          <q-breadcrumbs-el label="Inicio" to="/" />
          <q-breadcrumbs-el label="Postres & Waffles" class="text-amber-5" />
        </q-breadcrumbs>
        <h1 class="text-h3 text-weight-bolder font-bebas text-uppercase q-my-xs text-white">
          POSTRES & <span class="text-amber-5">DULCES</span>
        </h1>
        <p class="text-body1 text-grey-4 max-w-xl">
          El final dulce que tu antojo se merece. Volcanes tibios de chocolate belga, waffles crujientes con Nutella y helados artesanales.
        </p>
      </div>
    </div>

    <!-- Lista de Postres -->
    <div class="q-container q-px-md max-w-7xl mx-auto q-mt-lg">
      <div class="row items-center justify-between q-mb-lg">
        <div>
          <div class="text-h5 text-weight-bolder text-grey-10">Tentaciones Dulces</div>
          <div class="text-caption text-grey-6">Horneados frescos en nuestro taller de repostería</div>
        </div>
      </div>

      <div class="row q-col-gutter-lg">
        <div
          v-for="dessert in dessertList"
          :key="dessert.id"
          class="col-12 col-sm-6 col-md-4"
        >
          <ProductCard :product="dessert" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { computed } from 'vue';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard.vue';

const dessertList = computed(() => products.filter(p => p.category === 'desserts'));
</script>

<style scoped>
.font-bebas {
  font-family: 'Bebas Neue', 'Montserrat', sans-serif;
  letter-spacing: 0.5px;
}
</style>
