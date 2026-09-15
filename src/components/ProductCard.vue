<template>
  <q-card
    flat
    class="product-card cursor-pointer transition-all duration-300 relative overflow-hidden bg-white text-grey-9"
    style="border-radius: 16px; border: 1px solid rgba(0, 0, 0, 0.06);"
    @click="openProductDetail(product)"
  >
    <!-- Badge superior izquierdo -->
    <div v-if="product.badge" class="absolute-top-left z-10 q-pa-sm">
      <q-badge
        :color="product.badgeColor || 'negative'"
        text-color="white"
        class="text-weight-bolder text-uppercase q-px-sm q-py-xs shadow-2 rounded-borders"
        style="font-size: 11px; letter-spacing: 0.5px; border-radius: 8px;"
      >
        <q-icon
          v-if="product.badge === 'Más Vendido' || product.badge === '¡Popular!' || product.badge === '¡Picante!'"
          name="local_fire_department"
          size="14px"
          class="q-mr-xs"
        />
        {{ product.badge }}
      </q-badge>
    </div>

    <!-- Botón de Like / Favorito superior derecho -->
    <div class="absolute-top-right z-10 q-pa-sm" @click.stop>
      <q-btn
        flat
        round
        dense
        size="sm"
        :icon="isFavorite(product.id) ? 'favorite' : 'favorite_border'"
        :color="isFavorite(product.id) ? 'red-6' : 'grey-7'"
        class="bg-white/90 shadow-1 backdrop-blur hover:scale-110 transition-transform"
        aria-label="Añadir a favoritos"
        @click="toggleFavorite(product.id, product.name)"
      />
    </div>

    <!-- Imagen del producto con hover zoom -->
    <div class="image-wrapper overflow-hidden bg-grey-2 relative" style="height: 200px;">
      <q-img
        :src="product.image"
        :alt="product.name"
        loading="lazy"
        spinner-color="amber-8"
        class="full-height full-width product-img transition-transform duration-500"
        fit="cover"
      >
        <template v-slot:error>
          <div class="absolute-full flex flex-center bg-grey-3 text-grey-7 text-caption">
            <q-icon name="fastfood" size="32px" class="q-mb-xs" />
            <span>BurgerByte</span>
          </div>
        </template>
      </q-img>
    </div>

    <!-- Contenido de la tarjeta -->
    <q-card-section class="q-pa-md">
      <!-- Rating y Categoría -->
      <div class="row items-center justify-between no-wrap q-mb-xs">
        <span class="text-caption text-weight-bold text-amber-9 text-uppercase tracking-wider">
          {{ product.categoryName || 'Especial' }}
        </span>
        <div class="row items-center no-wrap text-caption text-grey-8">
          <q-rating
            :model-value="product.rating"
            max="5"
            size="14px"
            color="amber-8"
            icon="star"
            readonly
          />
          <span class="text-weight-bold text-caption q-ml-xs">
            {{ product.rating.toFixed(1) }}
          </span>
          <span class="text-grey-6 text-caption q-ml-xs">
            ({{ product.reviews }})
          </span>
        </div>
      </div>

      <!-- Nombre del producto -->
      <div class="text-weight-bolder text-subtitle1 q-mb-xs text-grey-10 leading-tight">
        {{ product.name }}
      </div>

      <!-- Descripción corta -->
      <p class="text-caption text-grey-7 line-clamp-2 q-mb-sm" style="min-height: 36px; line-height: 1.35;">
        {{ product.description }}
      </p>

      <!-- Precios y Botón Add + -->
      <div class="row items-center justify-between no-wrap q-mt-sm pt-2 border-t border-grey-100">
        <div>
          <div v-if="product.oldPrice" class="text-caption text-strike text-grey-5 leading-none">
            {{ formatCOP(product.oldPrice) }}
          </div>
          <div class="text-weight-bolder text-h6 text-grey-10 leading-tight">
            {{ formatCOP(product.price) }}
          </div>
        </div>

        <!-- Botón "Añadir +" destacado en dorado/naranja -->
        <q-btn
          unelevated
          rounded
          icon="add"
          label="Añadir"
          aria-label="Añadir al pedido"
          class="add-btn text-weight-bold shadow-2 transition-all hover:scale-105"
          style="background-color: #FF9F0D; color: #0E0E11; font-size: 13px; padding: 6px 16px;"
          @click.stop="addToCart(product)"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { useCart } from '../composables/useCart';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const {
  addToCart,
  toggleFavorite,
  isFavorite,
  openProductDetail,
  formatCOP
} = useCart();
</script>

<style scoped>
.product-card {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
}

.product-card:hover .product-img {
  transform: scale(1.06);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.add-btn:hover {
  background-color: #f09205 !important;
}
</style>
