<template>
  <q-dialog v-model="isDetailOpen" @hide="closeDetail">
    <q-card v-if="selectedProduct" class="bg-white text-grey-9 overflow-hidden" style="width: 550px; max-width: 95vw; border-radius: 20px;">
      <!-- Imagen y botón de cerrar -->
      <div class="relative" style="height: 260px;">
        <q-img
          :src="selectedProduct.image"
          class="full-height full-width"
          fit="cover"
        />
        <div class="absolute-top-right q-pa-sm">
          <q-btn
            round
            dense
            icon="close"
            color="dark"
            aria-label="Cerrar detalle"
            class="bg-white/90 shadow-2 hover:bg-white"
            v-close-popup
            @click="closeDetail"
          />
        </div>
        <div v-if="selectedProduct.badge" class="absolute-bottom-left q-pa-md">
          <q-badge
            :color="selectedProduct.badgeColor || 'negative'"
            text-color="white"
            class="text-weight-bolder text-uppercase q-px-md q-py-xs shadow-3"
            style="border-radius: 8px; font-size: 12px;"
          >
            {{ selectedProduct.badge }}
          </q-badge>
        </div>
      </div>

      <!-- Contenido de Detalle -->
      <q-card-section class="q-pa-lg">
        <div class="row items-center justify-between q-mb-xs">
          <span class="text-caption text-weight-bolder text-amber-9 text-uppercase tracking-wider">
            {{ selectedProduct.categoryName }}
          </span>
          <div class="row items-center">
            <q-rating
              :model-value="selectedProduct.rating"
              max="5"
              size="16px"
              color="amber-8"
              icon="star"
              readonly
            />
            <span class="text-weight-bold q-ml-xs text-body2">
              {{ selectedProduct.rating.toFixed(1) }}
            </span>
            <span class="text-grey-6 text-caption q-ml-xs">
              ({{ selectedProduct.reviews }} opiniones)
            </span>
          </div>
        </div>

        <div class="text-h5 text-weight-bolder text-grey-10 q-mb-sm">
          {{ selectedProduct.name }}
        </div>

        <p class="text-body2 text-grey-8 q-mb-md leading-relaxed">
          {{ selectedProduct.description }}
        </p>

        <!-- Ingredientes y características -->
        <div v-if="selectedProduct.ingredients?.length" class="q-mb-md">
          <div class="text-caption text-weight-bold text-grey-6 text-uppercase q-mb-xs">
            Ingredientes Principales:
          </div>
          <div class="row q-gutter-xs">
            <q-chip
              v-for="ing in selectedProduct.ingredients"
              :key="ing"
              dense
              outline
              color="amber-10"
              icon="restaurant"
              class="text-weight-medium text-caption"
            >
              {{ ing }}
            </q-chip>
          </div>
        </div>

        <q-separator class="q-my-md" />

        <!-- Selector de cantidad y Botón de añadir -->
        <div class="row items-center justify-between no-wrap">
          <div>
            <div class="text-caption text-grey-6">Precio:</div>
            <div class="text-h5 text-weight-bolder text-grey-10">
              {{ formatCOP(selectedProduct.price * quantity) }}
            </div>
          </div>

          <div class="row items-center q-gutter-x-sm">
            <!-- Cantidad -->
            <div class="row items-center bg-grey-2 rounded-borders q-px-xs" style="border-radius: 24px;">
              <q-btn
                flat
                round
                dense
                size="sm"
                icon="remove"
                color="dark"
                aria-label="Disminuir cantidad"
                :disable="quantity <= 1"
                @click="quantity > 1 ? quantity-- : null"
              />
              <span class="q-px-sm text-weight-bolder text-body1 text-grey-10">
                {{ quantity }}
              </span>
              <q-btn
                flat
                round
                dense
                size="sm"
                icon="add"
                color="dark"
                aria-label="Aumentar cantidad"
                @click="quantity++"
              />
            </div>

            <!-- Botón Add -->
            <q-btn
              unelevated
              rounded
              class="text-weight-bolder shadow-2 q-px-lg"
              style="background-color: #FF9F0D; color: #0E0E11;"
              icon="add_shopping_cart"
              label="Agregar al Pedido"
              @click="addAndClose"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useCart } from '../composables/useCart';

const { isDetailOpen, selectedProduct, addToCart, formatCOP } = useCart();
const quantity = ref(1);

watch(selectedProduct, () => {
  quantity.value = 1;
});

const closeDetail = () => {
  isDetailOpen.value = false;
};

const addAndClose = () => {
  if (selectedProduct.value) {
    addToCart(selectedProduct.value, quantity.value);
    closeDetail();
  }
};
</script>
