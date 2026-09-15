<template>
  <q-page class="q-pb-xl bg-grey-1 text-grey-9">
    <!-- Hero Banner de Categoría -->
    <div class="category-hero q-py-xl text-white relative overflow-hidden" style="background-color: #0E0E11;">
      <div class="q-container q-px-md max-w-7xl mx-auto relative z-10">
        <q-breadcrumbs class="text-caption text-grey-5 q-mb-sm">
          <q-breadcrumbs-el label="Inicio" to="/" />
          <q-breadcrumbs-el label="Perros Calientes Gourmet" class="text-amber-5" />
        </q-breadcrumbs>
        <h1 class="text-h3 text-weight-bolder font-bebas text-uppercase q-my-xs text-white">
          PERROS CALIENTES <span class="text-amber-5">GOURMET</span>
        </h1>
        <p class="text-body1 text-grey-4 max-w-xl">
          Salchichas premium jumbo, tocineta crujiente, queso gratinado al soplete y lluvia de papa fosforito artesanal.
        </p>
      </div>
    </div>

    <!-- Lista de Perros -->
    <div class="q-container q-px-md max-w-7xl mx-auto q-mt-lg">
      <div class="row items-center justify-between q-mb-lg">
        <div>
          <div class="text-h5 text-weight-bolder text-grey-10">Especialidades Hot Dog</div>
          <div class="text-caption text-grey-6">Tradición callejera elevada a nivel gourmet</div>
        </div>
      </div>

      <div class="row q-col-gutter-lg">
        <div
          v-for="item in dogList"
          :key="item.id"
          class="col-12 col-sm-6 col-md-4"
        >
          <ProductCard :product="item" />
        </div>
      </div>

      <!-- Banner de salsas artesanales -->
      <div class="q-mt-xl q-pa-lg rounded-borders text-white bg-dark shadow-2" style="border-radius: 18px; background: linear-gradient(135deg, #18181D 0%, #0E0E11 100%);">
        <div class="row items-center justify-between">
          <div class="col-12 col-md-8">
            <div class="text-h6 text-weight-bolder font-bebas text-amber-5">SALSAS ARTESANALES ILIMITADAS</div>
            <p class="text-caption text-grey-4 q-mb-none">
              Todos nuestros perros calientes incluyen nuestras salsas de la casa: Ajo confitado, Piña ahumada, Tártara de cilantro, Mostaza miel y BBQ Bourbon sin costo adicional.
            </p>
          </div>
          <div class="col-12 col-md-4 text-center text-md-right q-mt-md q-mt-md-none">
            <q-badge color="amber-8" text-color="black" label="100% Caseras" class="text-weight-bold q-pa-sm" />
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

const dogList = computed(() => products.filter(p => p.category === 'perros' || p.categoryName === 'Perros'));
</script>

<style scoped>
.font-bebas {
  font-family: 'Bebas Neue', 'Montserrat', sans-serif;
  letter-spacing: 0.5px;
}
</style>
