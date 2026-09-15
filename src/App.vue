<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1 text-grey-9">
    <!-- ============================================== -->
    <!-- ANNOUNCEMENT BAR SUPERIOR (BARRA NARANJA FIJA) -->
    <!-- ============================================== -->
    <div
      class="announcement-bar text-black text-center q-py-xs q-px-md row items-center justify-between no-wrap"
      style="background-color: #FF9F0D; font-size: 13px; z-index: 2001; min-height: 38px;"
    >
      <div class="col text-center row items-center justify-center no-wrap">
        <q-icon name="campaign" size="18px" class="q-mr-xs text-dark" />
        <span class="text-weight-bolder tracking-wide text-uppercase" style="letter-spacing: 0.5px;">
          ¡PARA DISEÑO WEB MODERNO, CONTÁCTANOS!
        </span>
      </div>

      <q-btn
        unelevated
        dense
        rounded
        class="text-weight-bolder text-white q-px-md q-py-none shadow-2 hover:scale-105 transition"
        style="background-color: #0E0E11; font-size: 11px; height: 26px; border-radius: 9999px;"
        @click="isContactModalOpen = true"
      >
        <div class="row items-center no-wrap">
          <span>HABLEMOS</span>
          <q-icon name="arrow_forward" size="14px" class="q-ml-xs" />
        </div>
      </q-btn>
    </div>

    <!-- ============================================== -->
    <!-- MAIN HEADER (Q-HEADER) CON FONDO NEGRO CARBÓN -->
    <!-- ============================================== -->
    <q-header
      elevated
      class="text-white relative-position"
      style="background-color: #0E0E11; border-bottom: 1px solid rgba(255, 255, 255, 0.08);"
    >
      <q-toolbar class="q-py-sm q-px-md max-w-7xl mx-auto full-width">
        <!-- Botón Menú Móvil -->
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Abrir menú"
          class="lt-md q-mr-sm"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <!-- LOGO BURGERBYTE -->
        <router-link to="/" class="row items-center no-wrap text-decoration-none text-white q-mr-lg">
          <div class="brand-badge q-pa-xs rounded q-mr-xs flex flex-center" style="background-color: #FF9F0D; border-radius: 8px;">
            <q-icon name="lunch_dining" size="24px" color="dark" />
          </div>
          <div class="brand-text">
            <span class="text-h6 text-weight-bolder tracking-tighter" style="font-family: 'Montserrat', sans-serif;">
              BURGER<span style="color: #FF9F0D;">BYTE</span>
            </span>
          </div>
        </router-link>

        <!-- NAVEGACIÓN DESKTOP -->
        <div class="gt-sm row items-center q-gutter-x-md text-weight-bold" style="font-size: 14px;">
          <router-link
            to="/"
            class="nav-link text-white hover:text-amber-5 transition"
            :class="{ 'text-amber-5': $route.path === '/' }"
          >
            Inicio
          </router-link>

          <!-- Dropdown Menú -->
          <q-btn-dropdown
            flat
            dense
            no-caps
            label="Menú"
            class="nav-link text-weight-bold text-white hover:text-amber-5"
            content-class="bg-dark text-white rounded-borders shadow-8 border border-grey-8"
          >
            <q-list style="min-width: 190px; background-color: #16161A;">
              <q-item clickable v-close-popup to="/hamburguesas">
                <q-item-section avatar>
                  <q-icon name="lunch_dining" color="amber-8" />
                </q-item-section>
                <q-item-section class="text-white text-weight-bold">Hamburguesas</q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="/perros">
                <q-item-section avatar>
                  <q-icon name="ramen_dining" color="amber-8" />
                </q-item-section>
                <q-item-section class="text-white text-weight-bold">Perros Calientes</q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="/pizzas">
                <q-item-section avatar>
                  <q-icon name="local_pizza" color="amber-8" />
                </q-item-section>
                <q-item-section class="text-white text-weight-bold">Pizzas a la Piedra</q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="/bebidas">
                <q-item-section avatar>
                  <q-icon name="local_cafe" color="amber-8" />
                </q-item-section>
                <q-item-section class="text-white text-weight-bold">Bebidas & Malteadas</q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="/postres">
                <q-item-section avatar>
                  <q-icon name="icecream" color="amber-8" />
                </q-item-section>
                <q-item-section class="text-white text-weight-bold">Postres & Waffles</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <router-link
            to="/promociones"
            class="nav-link text-white hover:text-amber-5 transition"
            :class="{ 'text-amber-5': $route.path === '/promociones' }"
          >
            Combos
          </router-link>

          <router-link
            to="/promociones"
            class="nav-link text-white hover:text-amber-5 transition row items-center"
          >
            <span>Ofertas</span>
            <q-badge color="negative" text-color="white" label="¡Top!" class="q-ml-xs text-caption" style="font-size: 10px;" />
          </router-link>

          <router-link
            to="/nosotros"
            class="nav-link text-white hover:text-amber-5 transition"
            :class="{ 'text-amber-5': $route.path === '/nosotros' }"
          >
            Nosotros
          </router-link>

          <router-link
            to="/contacto"
            class="nav-link text-white hover:text-amber-5 transition"
            :class="{ 'text-amber-5': $route.path === '/contacto' }"
          >
            Contacto
          </router-link>
        </div>

        <q-space />

        <!-- CAMPO DE BÚSQUEDA (Q-INPUT CON ÍCONO) -->
        <div class="search-box gt-xs q-mr-sm" style="width: 220px; max-width: 28vw;">
          <q-input
            v-model="searchQuery"
            dense
            dark
            outlined
            rounded
            placeholder="Buscar delicias..."
            class="search-input"
            bg-color="grey-10"
            @keyup.enter="handleSearch"
          >
            <template v-slot:prepend>
              <q-icon name="search" size="18px" color="amber-8" />
            </template>
            <template v-if="searchQuery" v-slot:append>
              <q-icon name="close" size="16px" class="cursor-pointer" @click="searchQuery = ''" />
            </template>
          </q-input>
        </div>

        <!-- BOTÓN DE FAVORITOS -->
        <q-btn
          flat
          round
          dense
          icon="favorite"
          color="red-5"
          aria-label="Ver favoritos"
          class="q-mr-xs gt-xs"
          @click="showFavoritesNotification"
        >
          <q-badge v-if="favorites.size > 0" color="red-7" floating rounded>
            {{ favorites.size }}
          </q-badge>
        </q-btn>

        <!-- BOTÓN DE CARRITO CON BADGE -->
        <q-btn
          flat
          round
          dense
          icon="shopping_bag"
          color="white"
          aria-label="Abrir carrito"
          class="q-mr-sm hover:text-amber-8"
          @click="isCartOpen = true"
        >
          <q-badge v-if="cartCount > 0" color="amber-9" text-color="dark" floating rounded class="text-weight-bolder">
            {{ cartCount }}
          </q-badge>
        </q-btn>

        <!-- BOTÓN CTA DORADO "PEDIR AHORA" -->
        <q-btn
          unelevated
          rounded
          class="order-now-btn text-weight-bolder shadow-3 q-px-md q-py-xs"
          style="background-color: #FF9F0D; color: #0E0E11; border-radius: 9999px; font-size: 13px;"
          @click="isCartOpen = true"
        >
          <div class="row items-center no-wrap">
            <span>Pedir Ahora</span>
            <q-icon name="arrow_forward" size="16px" class="q-ml-xs" />
          </div>
        </q-btn>
      </q-toolbar>
    </q-header>

    <!-- ============================================== -->
    <!-- MENU DRAWER LATERAL PARA DISPOSITIVOS MÓVILES -->
    <!-- ============================================== -->
    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      elevated
      class="bg-dark text-white q-pa-md"
      style="background-color: #0E0E11; width: 280px;"
    >
      <div class="row items-center justify-between q-mb-md">
        <div class="brand-text">
          <span class="text-h6 text-weight-bolder text-white">
            BURGER<span style="color: #FF9F0D;">BYTE</span>
          </span>
        </div>
        <q-btn flat round dense icon="close" color="white" aria-label="Cerrar menú" @click="leftDrawerOpen = false" />
      </div>

      <div class="q-mb-md">
        <q-input
          v-model="searchQuery"
          dense
          dark
          outlined
          rounded
          placeholder="Buscar platos..."
          bg-color="grey-10"
        >
          <template v-slot:prepend>
            <q-icon name="search" color="amber-8" />
          </template>
        </q-input>
      </div>

      <q-list class="text-weight-bold">
        <q-item clickable v-ripple to="/" @click="leftDrawerOpen = false">
          <q-item-section avatar><q-icon name="home" color="amber-8" /></q-item-section>
          <q-item-section>Inicio</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/hamburguesas" @click="leftDrawerOpen = false">
          <q-item-section avatar><q-icon name="lunch_dining" color="amber-8" /></q-item-section>
          <q-item-section>Hamburguesas</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/perros" @click="leftDrawerOpen = false">
          <q-item-section avatar><q-icon name="ramen_dining" color="amber-8" /></q-item-section>
          <q-item-section>Perros Calientes</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/pizzas" @click="leftDrawerOpen = false">
          <q-item-section avatar><q-icon name="local_pizza" color="amber-8" /></q-item-section>
          <q-item-section>Pizzas</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/bebidas" @click="leftDrawerOpen = false">
          <q-item-section avatar><q-icon name="local_cafe" color="amber-8" /></q-item-section>
          <q-item-section>Bebidas & Malteadas</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/postres" @click="leftDrawerOpen = false">
          <q-item-section avatar><q-icon name="icecream" color="amber-8" /></q-item-section>
          <q-item-section>Postres</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/promociones" @click="leftDrawerOpen = false">
          <q-item-section avatar><q-icon name="local_offer" color="amber-8" /></q-item-section>
          <q-item-section>Combos & Ofertas</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/nosotros" @click="leftDrawerOpen = false">
          <q-item-section avatar><q-icon name="group" color="amber-8" /></q-item-section>
          <q-item-section>Sobre Nosotros</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/contacto" @click="leftDrawerOpen = false">
          <q-item-section avatar><q-icon name="chat" color="amber-8" /></q-item-section>
          <q-item-section>Contacto</q-item-section>
        </q-item>
      </q-list>

      <div class="q-mt-xl">
        <q-btn
          unelevated
          rounded
          class="full-width text-weight-bold"
          style="background-color: #25D366; color: white;"
          icon="chat"
          label="Pedir por WhatsApp"
          @click="openWhatsAppContact"
        />
      </div>
    </q-drawer>

    <!-- ============================================== -->
    <!-- CONTENEDOR PRINCIPAL DE PÁGINAS (ROUTER VIEW) -->
    <!-- ============================================== -->
    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>

    <!-- ============================================== -->
    <!-- FOOTER GLOBAL COMPLETO -->
    <!-- ============================================== -->
    <AppFooter />

    <!-- ============================================== -->
    <!-- DRAWER / MODAL DEL CARRITO DE COMPRAS -->
    <!-- ============================================== -->
    <CartDrawer />

    <!-- ============================================== -->
    <!-- MODAL DE DETALLE DE PRODUCTO -->
    <!-- ============================================== -->
    <ProductDetailDialog />

    <!-- ============================================== -->
    <!-- MODAL "HABLEMOS" / CONTACTO DIRECTO -->
    <!-- ============================================== -->
    <q-dialog v-model="isContactModalOpen" @hide="closeContactModal">
      <q-card class="bg-white text-grey-9 q-pa-lg rounded-borders" style="width: 480px; max-width: 95vw; border-radius: 20px;">
        <div class="row items-center justify-between q-mb-md">
          <div class="row items-center">
            <q-avatar size="38px" color="amber-8" text-color="dark" icon="chat" class="q-mr-sm" />
            <div class="text-h6 text-weight-bolder text-grey-10 font-bebas leading-none">
              CONTACTO BURGERBYTE
            </div>
          </div>
          <!-- Botón X de Cierre con acción directa garantizada -->
          <q-btn
            flat
            round
            dense
            icon="close"
            aria-label="Cerrar contacto"
            class="hover:bg-grey-2"
            v-close-popup
            @click="closeContactModal"
          />
        </div>

        <p class="text-body2 text-grey-7 q-mb-md leading-relaxed">
          ¿Tienes una propuesta especial, evento corporativo, sugerencia o deseas ponerte en contacto con nuestro equipo?
        </p>

        <div class="column q-gutter-y-sm q-mb-md text-body2">
          <div class="row items-center text-grey-8">
            <q-icon name="place" color="amber-9" size="20px" class="q-mr-sm" />
            <span>{{ restaurantInfo.address }}</span>
          </div>
          <div class="row items-center text-grey-8">
            <q-icon name="phone" color="amber-9" size="20px" class="q-mr-sm" />
            <span>{{ restaurantInfo.phone }}</span>
          </div>
          <div class="row items-center text-grey-8">
            <q-icon name="email" color="amber-9" size="20px" class="q-mr-sm" />
            <span>{{ restaurantInfo.email }}</span>
          </div>
        </div>

        <div class="row q-gutter-sm">
          <q-btn
            unelevated
            rounded
            class="col text-weight-bold"
            style="background-color: #25D366; color: white;"
            icon="chat"
            label="Chatear en WhatsApp"
            @click="openWhatsAppContact"
          />
          <q-btn
            outline
            rounded
            class="col text-weight-bold"
            color="dark"
            label="Cerrar"
            v-close-popup
            @click="closeContactModal"
          />
        </div>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Notify } from 'quasar';
import { useCart } from './composables/useCart';
import { restaurantInfo } from './data/products';
import AppFooter from './components/AppFooter.vue';
import CartDrawer from './components/CartDrawer.vue';
import ProductDetailDialog from './components/ProductDetailDialog.vue';

const router = useRouter();
const leftDrawerOpen = ref(false);
const isContactModalOpen = ref(false);

const {
  cartCount,
  isCartOpen,
  searchQuery,
  favorites
} = useCart();

const handleSearch = () => {
  if (router.currentRoute.value.path !== '/') {
    router.push('/#menu-section');
  }
};

const closeContactModal = () => {
  isContactModalOpen.value = false;
};

const showFavoritesNotification = () => {
  Notify.create({
    message: `Tienes ${favorites.value.size} productos en tus favoritos guardados ❤️`,
    color: 'red-7',
    icon: 'favorite',
    position: 'top',
    timeout: 2000
  });
};

const openWhatsAppContact = () => {
  window.open(`https://wa.me/${restaurantInfo.whatsapp}?text=Hola%20BurgerByte,%20estoy%20interesado%20en%20contactarles!`, '_blank');
  closeContactModal();
};
</script>

<style>
/* Estilos globales y reset */
body {
  font-family: 'Montserrat', sans-serif;
  color: #1A1A1A;
  background-color: #F9FAFB;
}

.font-bebas {
  font-family: 'Bebas Neue', 'Montserrat', sans-serif;
  letter-spacing: 0.5px;
}

.nav-link {
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.order-now-btn:hover {
  background-color: #f09205 !important;
}

.text-decoration-none {
  text-decoration: none;
}

/* Transiciones de ruta suaves */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
