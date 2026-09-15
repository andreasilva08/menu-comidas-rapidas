<template>
  <q-page class="q-pb-xl bg-grey-1 text-grey-9">
    <!-- Hero Banner de Categoría -->
    <div class="category-hero q-py-xl text-white relative overflow-hidden" style="background-color: #0E0E11;">
      <div class="q-container q-px-md max-w-7xl mx-auto relative z-10">
        <q-breadcrumbs class="text-caption text-grey-5 q-mb-sm">
          <q-breadcrumbs-el label="Inicio" to="/" />
          <q-breadcrumbs-el label="Bebidas & Malteadas" class="text-amber-5" />
        </q-breadcrumbs>
        <h1 class="text-h3 text-weight-bolder font-bebas text-uppercase q-my-xs text-white">
          BEBIDAS & <span class="text-amber-5">MALTEADAS</span>
        </h1>
        <p class="text-body1 text-grey-4 max-w-xl">
          El maridaje perfecto para tu comida. Malteadas extra espesas, sodas saborizadas naturales y cervezas artesanales bien frías.
        </p>
      </div>
    </div>

    <!-- Lista de Bebidas -->
    <div class="q-container q-px-md max-w-7xl mx-auto q-mt-lg">
      <div class="row items-center justify-between q-mb-lg">
        <div>
          <div class="text-h5 text-weight-bolder text-grey-10">Bebidas y Refrescos</div>
          <div class="text-caption text-grey-6">Refrescancia pura en cada sorbo</div>
        </div>
      </div>

      <div class="row q-col-gutter-lg">
        <div
          v-for="drink in drinkList"
          :key="drink.id"
          class="col-12 col-sm-6 col-md-4"
        >
          <ProductCard :product="drink" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { computed } from 'vue';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard.vue';

const drinkList = computed(() => products.filter(p => p.category === 'drinks'));
</script>

<style scoped>
.font-bebas {
  font-family: 'Bebas Neue', 'Montserrat', sans-serif;
  letter-spacing: 0.5px;
}
</style>
