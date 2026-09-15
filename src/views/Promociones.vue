<template>
  <q-page class="q-pb-xl bg-grey-1 text-grey-9">
    <!-- Hero Banner de Categoría -->
    <div class="category-hero q-py-xl text-white relative overflow-hidden" style="background-color: #0E0E11;">
      <div class="q-container q-px-md max-w-7xl mx-auto relative z-10">
        <q-breadcrumbs class="text-caption text-grey-5 q-mb-sm">
          <q-breadcrumbs-el label="Inicio" to="/" />
          <q-breadcrumbs-el label="Combos & Promociones" class="text-amber-5" />
        </q-breadcrumbs>
        <div class="row items-center justify-between">
          <div>
            <q-badge color="negative" text-color="white" label="HASTA 30% DE AHORRO" class="text-weight-bold q-mb-xs" />
            <h1 class="text-h3 text-weight-bolder font-bebas text-uppercase q-my-xs text-white">
              COMBOS & <span class="text-amber-5">PROMOCIONES</span>
            </h1>
            <p class="text-body1 text-grey-4 max-w-xl">
              Los mejores combos para compartir con amigos o familia. Gran sabor a precios insuperables.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Lista de Combos -->
    <div class="q-container q-px-md max-w-7xl mx-auto q-mt-lg">
      <div class="row items-center justify-between q-mb-lg">
        <div>
          <div class="text-h5 text-weight-bolder text-grey-10">Combos Especiales de Ahorro</div>
          <div class="text-caption text-grey-6">Incluyen acompañamientos y bebidas con descuento integrado</div>
        </div>
      </div>

      <div class="row q-col-gutter-lg">
        <div
          v-for="combo in promoList"
          :key="combo.id"
          class="col-12 col-sm-6 col-md-6"
        >
          <ProductCard :product="combo" />
        </div>
      </div>

      <!-- Cupón Especial -->
      <div class="q-mt-xl q-pa-lg rounded-borders bg-white shadow-2 border-2 border-dashed border-amber-500" style="border-radius: 18px;">
        <div class="row items-center justify-between">
          <div class="col-12 col-md-8">
            <div class="row items-center q-mb-xs">
              <q-icon name="confirmation_number" color="amber-9" size="28px" class="q-mr-sm" />
              <span class="text-h6 text-weight-bolder text-grey-10 font-bebas">CUPÓN EXCLUSIVO: BYTE10</span>
            </div>
            <p class="text-caption text-grey-7 q-mb-none">
              Menciona el código <strong>BYTE10</strong> al enviar tu pedido por WhatsApp y recibe un 10% de descuento directo en cualquier compra superior a $50.000 COP.
            </p>
          </div>
          <div class="col-12 col-md-4 text-center text-md-right q-mt-md q-mt-md-none">
            <q-btn
              outline
              rounded
              color="amber-9"
              icon="content_copy"
              label="Copiar Cupón"
              class="text-weight-bold"
              @click="copyCoupon"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { computed } from 'vue';
import { products } from '../data/products';
import { Notify } from 'quasar';
import ProductCard from '../components/ProductCard.vue';

const promoList = computed(() => products.filter(p => p.category === 'promociones'));

const copyCoupon = () => {
  navigator.clipboard.writeText('BYTE10');
  Notify.create({
    message: '¡Cupón BYTE10 copiado al portapapeles!',
    color: 'amber-9',
    textColor: 'black',
    icon: 'check',
    position: 'top'
  });
};
</script>

<style scoped>
.font-bebas {
  font-family: 'Bebas Neue', 'Montserrat', sans-serif;
  letter-spacing: 0.5px;
}
</style>
