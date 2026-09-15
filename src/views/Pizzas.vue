<template>
  <q-page class="q-pb-xl bg-grey-1 text-grey-9">
    <!-- Hero Banner de Categoría -->
    <div class="category-hero q-py-xl text-white relative overflow-hidden" style="background-color: #0E0E11;">
      <div class="q-container q-px-md max-w-7xl mx-auto relative z-10">
        <q-breadcrumbs class="text-caption text-grey-5 q-mb-sm">
          <q-breadcrumbs-el label="Inicio" to="/" />
          <q-breadcrumbs-el label="Pizzas a la Piedra" class="text-amber-5" />
        </q-breadcrumbs>
        <h1 class="text-h3 text-weight-bolder font-bebas text-uppercase q-my-xs text-white">
          PIZZAS <span class="text-amber-5">A LA PIEDRA</span>
        </h1>
        <p class="text-body1 text-grey-4 max-w-xl">
          Fermentación lenta de 48 horas con masa madre viva, salsa de tomates San Marzano y queso mozzarella hilado a mano.
        </p>
      </div>
    </div>

    <!-- Lista de Pizzas -->
    <div class="q-container q-px-md max-w-7xl mx-auto q-mt-lg">
      <div class="row items-center justify-between q-mb-lg">
        <div>
          <div class="text-h5 text-weight-bolder text-grey-10">Pizzas Gourmet</div>
          <div class="text-caption text-grey-6">Horneadas a 400°C para una corteza crujiente e inflada</div>
        </div>
      </div>

      <div class="row q-col-gutter-lg">
        <div
          v-for="pizza in pizzaList"
          :key="pizza.id"
          class="col-12 col-sm-6 col-md-4"
        >
          <ProductCard :product="pizza" />
        </div>
      </div>

      <!-- Cuadro de Proceso de Masa Madre -->
      <div class="q-mt-xl q-pa-lg rounded-borders bg-white shadow-1 border border-grey-200" style="border-radius: 18px;">
        <div class="row q-col-gutter-md items-center">
          <div class="col-12 col-md-4">
            <div class="text-h6 text-weight-bolder text-grey-10 font-bebas">EL SECRETO DE NUESTRA MASA</div>
            <div class="text-caption text-grey-6">Ligera, digestible y con un aroma inconfundible</div>
          </div>
          <div class="col-12 col-md-8">
            <div class="row q-col-gutter-sm">
              <div class="col-12 col-sm-4 text-center">
                <q-icon name="hourglass_empty" color="amber-9" size="32px" />
                <div class="text-weight-bold text-subtitle2">48 Horas</div>
                <div class="text-caption text-grey-6">De fermentación en frío</div>
              </div>
              <div class="col-12 col-sm-4 text-center">
                <q-icon name="local_fire_department" color="negative" size="32px" />
                <div class="text-weight-bold text-subtitle2">400°C</div>
                <div class="text-caption text-grey-6">Horno de piedra volcánica</div>
              </div>
              <div class="col-12 col-sm-4 text-center">
                <q-icon name="spa" color="green-8" size="32px" />
                <div class="text-weight-bold text-subtitle2">Masa Madre</div>
                <div class="text-caption text-grey-6">Sin levaduras industriales</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { computed } from 'vue';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard.vue';

const pizzaList = computed(() => products.filter(p => p.category === 'pizzas'));
</script>

<style scoped>
.font-bebas {
  font-family: 'Bebas Neue', 'Montserrat', sans-serif;
  letter-spacing: 0.5px;
}
</style>
