<template>
  <q-dialog
    v-model="isCartOpen"
    position="right"
    maximized
    transition-show="slide-left"
    transition-hide="slide-right"
    @hide="closeCart"
  >
    <q-card class="column no-wrap text-grey-9 bg-white" style="width: 440px; max-width: 95vw;">
      <!-- Header del Carrito -->
      <q-card-section class="row items-center justify-between q-py-md q-px-lg bg-dark text-white" style="background-color: #0E0E11;">
        <div class="row items-center">
          <q-avatar size="36px" font-size="20px" color="amber-8" text-color="dark" icon="shopping_bag" class="q-mr-sm" />
          <div>
            <div class="text-h6 text-weight-bolder leading-tight">Tu Pedido</div>
            <div class="text-caption text-grey-5">{{ cartCount }} {{ cartCount === 1 ? 'producto' : 'productos' }} seleccionados</div>
          </div>
        </div>
        <!-- Botón X de Cierre con acción directa y limpia -->
        <q-btn
          flat
          round
          dense
          icon="close"
          color="white"
          aria-label="Cerrar carrito"
          class="hover:bg-white/10"
          v-close-popup
          @click="closeCart"
        />
      </q-card-section>

      <q-separator />

      <!-- Banner de Entrega Rápida -->
      <div class="q-py-xs q-px-md row items-center justify-between" style="background-color: #FFF7E6; border-bottom: 1px solid #FFE4B5;">
        <div class="row items-center text-amber-10 text-caption text-weight-bold">
          <q-icon name="moped" size="18px" class="q-mr-xs text-amber-9" />
          <span>¡Envío GRATIS hoy por pedidos web!</span>
        </div>
        <q-badge color="green-8" label="Express 28 min" />
      </div>

      <!-- Lista de Productos o Estado Vacío -->
      <q-card-section class="col scroll q-pa-md">
        <div v-if="cartItems.length === 0" class="column items-center justify-center full-height text-center q-pa-xl">
          <q-avatar size="80px" font-size="44px" color="grey-3" text-color="grey-6" icon="remove_shopping_cart" class="q-mb-md" />
          <div class="text-h6 text-weight-bold text-grey-8 q-mb-xs">Tu carrito está vacío</div>
          <p class="text-caption text-grey-6 q-mb-md max-w-xs">
            Aún no has agregado ninguna hamburguesa o antojo. ¡Explora nuestro menú y añade felicidad!
          </p>
          <q-btn
            unelevated
            rounded
            label="Explorar Menú"
            icon-right="arrow_forward"
            color="amber-8"
            text-color="dark"
            class="text-weight-bold"
            @click="closeCartAndExplore"
          />
        </div>

        <div v-else class="q-gutter-y-sm">
          <div
            v-for="item in cartItems"
            :key="item.product.id"
            class="row items-center no-wrap q-pa-sm rounded-borders bg-grey-1 hover:bg-grey-2 transition"
            style="border: 1px solid #EEEEEE; border-radius: 12px;"
          >
            <!-- Miniatura del Producto -->
            <q-img
              :src="item.product.image"
              class="rounded-borders q-mr-sm"
              style="width: 64px; height: 64px; border-radius: 8px; flex-shrink: 0;"
              fit="cover"
            />

            <!-- Info y Precios -->
            <div class="col min-w-0 q-pr-xs">
              <div class="text-weight-bold text-body2 text-grey-10 ellipsis">
                {{ item.product.name }}
              </div>
              <div class="text-caption text-amber-9 text-weight-bold">
                {{ formatCOP(item.product.price) }}
              </div>

              <!-- Selector de Cantidad -->
              <div class="row items-center q-mt-xs">
                <q-btn
                  flat
                  round
                  dense
                  size="xs"
                  icon="remove"
                  color="grey-8"
                  class="bg-white shadow-1"
                  aria-label="Disminuir cantidad"
                  @click="updateQuantity(item.product.id, -1)"
                />
                <span class="q-px-sm text-caption text-weight-bolder text-grey-10">
                  {{ item.quantity }}
                </span>
                <q-btn
                  flat
                  round
                  dense
                  size="xs"
                  icon="add"
                  color="grey-8"
                  class="bg-white shadow-1"
                  aria-label="Aumentar cantidad"
                  @click="updateQuantity(item.product.id, 1)"
                />
              </div>
            </div>

            <!-- Subtotal y Eliminar -->
            <div class="column items-end justify-between self-stretch">
              <q-btn
                flat
                round
                dense
                size="sm"
                icon="delete"
                color="red-5"
                aria-label="Eliminar producto"
                @click="removeFromCart(item.product.id)"
              />
              <div class="text-weight-bolder text-caption text-grey-10">
                {{ formatCOP(item.product.price * item.quantity) }}
              </div>
            </div>
          </div>

          <!-- Formulario de Entrega Rápida -->
          <div class="q-mt-md q-pa-md rounded-borders bg-grey-1" style="border: 1px solid #E5E7EB; border-radius: 12px;">
            <div class="text-subtitle2 text-weight-bold text-grey-9 q-mb-xs row items-center">
              <q-icon name="place" color="amber-9" class="q-mr-xs" size="18px" />
              Datos de Envío o Recogida
            </div>

            <q-input
              v-model="customer.name"
              dense
              outlined
              label="Tu Nombre Completo"
              class="q-mb-xs"
              bg-color="white"
            />
            <q-input
              v-model="customer.phone"
              dense
              outlined
              label="Teléfono WhatsApp"
              class="q-mb-xs"
              bg-color="white"
            />
            <q-input
              v-model="customer.address"
              dense
              outlined
              label="Dirección de Entrega y Barrio"
              class="q-mb-xs"
              bg-color="white"
            />
            <q-select
              v-model="customer.paymentMethod"
              :options="['Efectivo contra entrega', 'Transferencia Nequi / Daviplata', 'Tarjeta Datáfono']"
              dense
              outlined
              label="Forma de Pago"
              class="q-mb-xs"
              bg-color="white"
            />
            <q-input
              v-model="customer.notes"
              dense
              outlined
              type="textarea"
              rows="2"
              label="Instrucciones especiales (sin cebolla, salsas extras...)"
              bg-color="white"
            />
          </div>
        </div>
      </q-card-section>

      <!-- Footer y Acciones de Compra -->
      <q-card-section v-if="cartItems.length > 0" class="q-pa-md bg-white border-t border-grey-200">
        <!-- Desglose de totales -->
        <div class="q-mb-sm">
          <div class="row justify-between text-caption text-grey-7 q-mb-xs">
            <span>Subtotal:</span>
            <span>{{ formatCOP(cartTotal) }}</span>
          </div>
          <div class="row justify-between text-caption text-grey-7 q-mb-xs">
            <span>Costo de Domicilio:</span>
            <span class="text-green-8 text-weight-bold">¡GRATIS!</span>
          </div>
          <q-separator class="q-my-xs" />
          <div class="row justify-between text-subtitle1 text-weight-bolder text-grey-10">
            <span>Total a Pagar:</span>
            <span class="text-amber-10">{{ formatCOP(cartTotal) }}</span>
          </div>
        </div>

        <!-- Botón de Confirmación por WhatsApp -->
        <q-btn
          unelevated
          rounded
          class="full-width text-weight-bold shadow-3 q-py-sm"
          style="background-color: #25D366; color: white; font-size: 15px;"
          icon="chat"
          label="Pedir por WhatsApp ->"
          @click="submitOrder"
        />

        <div class="row justify-center items-center q-mt-xs text-caption text-grey-6">
          <q-icon name="lock" size="13px" class="q-mr-xs" />
          Pedido directo y seguro sin comisiones
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useCart } from '../composables/useCart';

const router = useRouter();

const {
  cartItems,
  isCartOpen,
  cartCount,
  cartTotal,
  updateQuantity,
  removeFromCart,
  formatCOP,
  sendWhatsAppOrder
} = useCart();

const customer = reactive({
  name: '',
  phone: '',
  address: '',
  paymentMethod: 'Efectivo contra entrega',
  notes: ''
});

const closeCart = () => {
  isCartOpen.value = false;
};

const closeCartAndExplore = () => {
  closeCart();
  router.push('/#menu-section');
};

const submitOrder = () => {
  sendWhatsAppOrder(customer);
};
</script>
