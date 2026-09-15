<template>
  <q-page class="q-pb-xl bg-grey-1 text-grey-9">
    <!-- Hero Banner de Carrito -->
    <div class="category-hero q-py-xl text-white relative overflow-hidden" style="background-color: #0E0E11;">
      <div class="q-container q-px-md max-w-7xl mx-auto relative z-10">
        <div class="row items-center justify-between">
          <div>
            <q-breadcrumbs class="text-caption text-grey-5 q-mb-sm">
              <q-breadcrumbs-el label="Inicio" to="/" />
              <q-breadcrumbs-el label="Carrito de Compras" class="text-amber-5" />
            </q-breadcrumbs>
            <h1 class="text-h3 text-weight-bolder font-bebas text-uppercase q-my-xs text-white">
              TU <span class="text-amber-5">PEDIDO</span>
            </h1>
            <p class="text-body1 text-grey-4 max-w-xl">
              Revisa tus delicias seleccionadas y confirma tu orden directa a través de WhatsApp sin intermediarios.
            </p>
          </div>

          <!-- Botón de Cerrar y Volver -->
          <div class="q-mt-md q-mt-md-none">
            <q-btn
              unelevated
              rounded
              color="grey-9"
              text-color="white"
              icon="arrow_back"
              label="Volver al Menú"
              class="text-weight-bold"
              @click="goBack"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Contenido del Carrito -->
    <div class="q-container q-px-md max-w-7xl mx-auto q-mt-lg">
      <div v-if="cartItems.length === 0" class="column items-center justify-center text-center q-pa-xl bg-white rounded-borders shadow-1 border border-grey-200" style="border-radius: 20px;">
        <q-avatar size="90px" font-size="48px" color="grey-2" text-color="grey-6" icon="remove_shopping_cart" class="q-mb-md" />
        <div class="text-h5 text-weight-bolder text-grey-9 q-mb-xs">Tu carrito está vacío</div>
        <p class="text-body2 text-grey-6 q-mb-lg max-w-md">
          Aún no has agregado platos a tu pedido. ¡Visita nuestra carta y déjate tentar por el mejor sabor artesanal!
        </p>
        <q-btn
          unelevated
          rounded
          label="Explorar Menú"
          icon="restaurant_menu"
          color="amber-8"
          text-color="dark"
          class="text-weight-bold q-px-xl q-py-sm"
          to="/#menu-section"
        />
      </div>

      <div v-else class="row q-col-gutter-xl">
        <!-- Lista de Productos en el Carrito -->
        <div class="col-12 col-md-7">
          <q-card flat class="bg-white q-pa-lg rounded-borders shadow-1 border border-grey-200" style="border-radius: 20px;">
            <div class="row items-center justify-between q-mb-md">
              <div class="text-h5 text-weight-bolder text-grey-10 font-bebas">
                PRODUCTOS SELECCIONADOS ({{ cartCount }})
              </div>
              <q-btn
                flat
                round
                dense
                icon="close"
                color="grey-8"
                aria-label="Cerrar carrito y regresar"
                class="bg-grey-2 hover:bg-grey-3"
                @click="goBack"
              >
                <q-tooltip>Cerrar carrito y volver</q-tooltip>
              </q-btn>
            </div>

            <q-separator class="q-mb-md" />

            <div class="column q-gutter-y-md">
              <div
                v-for="item in cartItems"
                :key="item.product.id"
                class="row items-center justify-between q-pa-md rounded-borders bg-grey-1"
                style="border-radius: 12px; border: 1px solid #EEEEEE;"
              >
                <div class="row items-center col-12 col-sm-7 no-wrap">
                  <q-img
                    :src="item.product.image"
                    class="rounded-borders q-mr-md flex-shrink-0"
                    style="width: 72px; height: 72px; border-radius: 10px;"
                    fit="cover"
                  />
                  <div class="min-w-0">
                    <div class="text-weight-bold text-subtitle1 text-grey-10 ellipsis">
                      {{ item.product.name }}
                    </div>
                    <div class="text-caption text-grey-6">
                      Unitario: {{ formatCOP(item.product.price) }}
                    </div>
                    <div class="text-weight-bold text-amber-9 text-body2">
                      Subtotal: {{ formatCOP(item.product.price * item.quantity) }}
                    </div>
                  </div>
                </div>

                <!-- Controles de Cantidad y Eliminar -->
                <div class="row items-center justify-end col-12 col-sm-5 q-mt-sm q-mt-sm-none">
                  <div class="row items-center bg-white q-pa-xs rounded-borders shadow-1 q-mr-md" style="border-radius: 24px;">
                    <q-btn
                      flat
                      round
                      dense
                      size="sm"
                      icon="remove"
                      color="grey-8"
                      @click="updateQuantity(item.product.id, -1)"
                    />
                    <span class="text-weight-bold q-px-sm text-body1">{{ item.quantity }}</span>
                    <q-btn
                      flat
                      round
                      dense
                      size="sm"
                      icon="add"
                      color="grey-8"
                      @click="updateQuantity(item.product.id, 1)"
                    />
                  </div>

                  <q-btn
                    flat
                    round
                    dense
                    icon="delete_outline"
                    color="negative"
                    aria-label="Eliminar item"
                    @click="removeFromCart(item.product.id)"
                  >
                    <q-tooltip>Eliminar producto</q-tooltip>
                  </q-btn>
                </div>
              </div>
            </div>

            <div class="row justify-between items-center q-mt-lg pt-2 border-t border-grey-200">
              <q-btn
                flat
                rounded
                color="negative"
                icon="delete_sweep"
                label="Vaciar Carrito"
                @click="clearCart"
              />
              <q-btn
                outline
                rounded
                color="dark"
                icon="add"
                label="Seguir Comprando"
                to="/#menu-section"
              />
            </div>
          </q-card>
        </div>

        <!-- Resumen y Formulario de Envío -->
        <div class="col-12 col-md-5">
          <q-card flat class="bg-white q-pa-lg rounded-borders shadow-1 border border-grey-200" style="border-radius: 20px;">
            <div class="text-h5 text-weight-bolder text-grey-10 font-bebas q-mb-md">
              DATOS DE ENTREGA
            </div>

            <q-form @submit.prevent="submitOrder" class="q-gutter-y-sm">
              <q-input
                v-model="customer.name"
                label="Tu Nombre *"
                outlined
                dense
                lazy-rules
                :rules="[val => !!val || 'El nombre es obligatorio']"
              />

              <q-input
                v-model="customer.phone"
                label="Teléfono WhatsApp *"
                outlined
                dense
                lazy-rules
                :rules="[val => !!val || 'El teléfono es obligatorio']"
              />

              <q-input
                v-model="customer.address"
                label="Dirección de Entrega *"
                outlined
                dense
                lazy-rules
                :rules="[val => !!val || 'La dirección es obligatoria']"
              />

              <q-select
                v-model="customer.paymentMethod"
                :options="['Efectivo contra entrega', 'Transferencia Nequi / Daviplata', 'Datafono / Tarjeta en sitio']"
                label="Método de Pago"
                outlined
                dense
              />

              <q-input
                v-model="customer.notes"
                label="Notas para la cocina (opcional)"
                outlined
                dense
                placeholder="Sin cebolla, salsas aparte..."
              />

              <q-separator class="q-my-md" />

              <!-- Totales -->
              <div class="column q-gutter-y-xs text-body2">
                <div class="row justify-between text-grey-7">
                  <span>Subtotal productos:</span>
                  <span>{{ formatCOP(cartTotal) }}</span>
                </div>
                <div class="row justify-between text-grey-7">
                  <span>Envío a domicilio:</span>
                  <span class="text-positive text-weight-bold">¡GRATIS HOY!</span>
                </div>
                <q-separator class="q-my-xs" />
                <div class="row justify-between text-h6 text-weight-bolder text-grey-10">
                  <span>Total a Pagar:</span>
                  <span class="text-amber-10">{{ formatCOP(cartTotal) }}</span>
                </div>
              </div>

              <div class="q-mt-md">
                <q-btn
                  unelevated
                  rounded
                  class="full-width text-weight-bold q-py-sm"
                  style="background-color: #25D366; color: white; font-size: 16px;"
                  icon="chat"
                  label="Pedir por WhatsApp ->"
                  type="submit"
                />
              </div>

              <div class="text-center text-caption text-grey-6 q-mt-xs">
                Te atenderemos por WhatsApp para confirmar tiempo estimado
              </div>
            </q-form>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useCart } from '../composables/useCart';

const router = useRouter();

const {
  cartItems,
  cartCount,
  cartTotal,
  updateQuantity,
  removeFromCart,
  clearCart,
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

const goBack = () => {
  if (window.history.state && window.history.state.back) {
    router.back();
  } else {
    router.push('/');
  }
};

const submitOrder = () => {
  sendWhatsAppOrder(customer);
};
</script>

<style scoped>
.font-bebas {
  font-family: 'Bebas Neue', 'Montserrat', sans-serif;
  letter-spacing: 0.5px;
}
</style>
