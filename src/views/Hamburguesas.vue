<template>
  <q-page class="q-pb-xl bg-grey-1 text-grey-9">
    <!-- Hero Banner de Categoría -->
    <div class="category-hero q-py-xl text-white relative overflow-hidden" style="background-color: #0E0E11;">
      <div class="q-container q-px-md max-w-7xl mx-auto relative z-10">
        <div class="row items-center justify-between">
          <div class="col-12 col-md-8">
            <q-breadcrumbs class="text-caption text-grey-5 q-mb-sm">
              <q-breadcrumbs-el label="Inicio" to="/" />
              <q-breadcrumbs-el label="Hamburguesas Artesanales" class="text-amber-5" />
            </q-breadcrumbs>
            <h1 class="text-h3 text-weight-bolder font-bebas text-uppercase q-my-xs text-white">
              HAMBURGUESAS <span class="text-amber-5">ARTESANALES</span>
            </h1>
            <p class="text-body1 text-grey-4 max-w-xl">
              100% carne de res Angus certificada, ahumada al carbón de roble, pan brioche horneado diariamente y salsas de autor. Cada bocado es pura felicidad.
            </p>
          </div>
          <div class="col-12 col-md-4 text-center text-md-right q-mt-md q-mt-md-none">
            <q-chip outline color="amber-5" icon="verified" class="text-weight-bold text-subtitle2">
              Garantía de Sabor 100%
            </q-chip>
          </div>
        </div>
      </div>
    </div>

    <!-- Lista y Filtros -->
    <div class="q-container q-px-md max-w-7xl mx-auto q-mt-lg">
      <div class="row items-center justify-between q-mb-lg">
        <div>
          <div class="text-h5 text-weight-bolder text-grey-10">Nuestras Creaciones</div>
          <div class="text-caption text-grey-6">{{ burgerList.length }} opciones gourmet disponibles</div>
        </div>

        <!-- Filtro secundario -->
        <q-btn-toggle
          v-model="subfilter"
          rounded
          dense
          unelevated
          toggle-color="amber-8"
          toggle-text-color="dark"
          color="white"
          text-color="grey-8"
          class="shadow-1 border border-grey-200"
          :options="[
            { label: 'Todas', value: 'all' },
            { label: 'Más Vendidas', value: 'bestseller' },
            { label: 'Con Tocineta', value: 'bacon' }
          ]"
        />
      </div>

      <!-- Grid de Hamburguesas -->
      <div class="row q-col-gutter-lg">
        <div
          v-for="burger in filteredBurgers"
          :key="burger.id"
          class="col-12 col-sm-6 col-md-4"
        >
          <ProductCard :product="burger" />
        </div>
      </div>

      <!-- Sección de Adiciones y Toppings -->
      <div class="q-mt-xl q-pa-lg rounded-borders bg-white shadow-1 border border-grey-200" style="border-radius: 18px;">
        <div class="row items-center justify-between q-mb-md">
          <div>
            <div class="text-h6 text-weight-bolder text-grey-10 font-bebas">PERSONALIZA TU EXPERIENCIA</div>
            <div class="text-caption text-grey-6">Agrega toppings extra a cualquiera de tus hamburguesas favoritas</div>
          </div>
          <q-badge color="amber-9" text-color="black" label="Toppings Extra" class="text-weight-bold" />
        </div>

        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-6 col-md-3">
            <div class="q-pa-sm rounded-borders bg-grey-1 border border-grey-200 row items-center justify-between">
              <span class="text-weight-bold text-caption">Tocineta Ahumada Extra</span>
              <span class="text-caption text-weight-bolder text-amber-9">+$4.500 COP</span>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <div class="q-pa-sm rounded-borders bg-grey-1 border border-grey-200 row items-center justify-between">
              <span class="text-weight-bold text-caption">Doble Queso Cheddar</span>
              <span class="text-caption text-weight-bolder text-amber-9">+$3.900 COP</span>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <div class="q-pa-sm rounded-borders bg-grey-1 border border-grey-200 row items-center justify-between">
              <span class="text-weight-bold text-caption">Carne Angus Extra 150g</span>
              <span class="text-caption text-weight-bolder text-amber-9">+$9.900 COP</span>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <div class="q-pa-sm rounded-borders bg-grey-1 border border-grey-200 row items-center justify-between">
              <span class="text-weight-bold text-caption">Aros de Cebolla (x4)</span>
              <span class="text-caption text-weight-bolder text-amber-9">+$4.900 COP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard.vue';

const subfilter = ref('all');
const burgerList = computed(() => products.filter(p => p.category === 'burgers'));

const filteredBurgers = computed(() => {
  if (subfilter.value === 'bestseller') {
    return burgerList.value.filter(p => p.badge === 'Más Vendido' || p.rating >= 4.9);
  }
  if (subfilter.value === 'bacon') {
    return burgerList.value.filter(p => p.description.toLowerCase().includes('tocineta'));
  }
  return burgerList.value;
});
</script>

<style scoped>
.font-bebas {
  font-family: 'Bebas Neue', 'Montserrat', sans-serif;
  letter-spacing: 0.5px;
}
</style>
