<template>
  <q-page class="home-page bg-grey-1 text-grey-9">
    <!-- ============================================== -->
    <!-- 1. HERO SECTION (FONDO OSCURO #0E0E11) -->
    <!-- ============================================== -->
    <section class="hero-section relative-position overflow-hidden" style="background-color: #0E0E11; min-height: 86vh;">
      <!-- Luces de fondo sutiles -->
      <div class="hero-glow"></div>

      <div class="q-container q-px-md max-w-7xl mx-auto q-py-xl relative z-10 flex flex-center" style="min-height: 84vh;">
        <div class="row items-center justify-between full-width q-col-gutter-xl">
          <!-- Columna Izquierda: Copys y Botones CTA -->
          <div class="col-12 col-md-6 text-white text-center text-md-left">
            <!-- Badge superior "Hecho Fresco" -->
            <div class="inline-flex items-center q-mb-md">
              <div
                class="row items-center no-wrap q-py-xs q-px-md rounded-full shadow-2"
                style="background: rgba(255, 159, 13, 0.12); border: 1px solid rgba(255, 159, 13, 0.35); border-radius: 9999px;"
              >
                <q-icon name="local_fire_department" size="18px" style="color: #FF9F0D;" class="q-mr-xs" />
                <span class="text-caption text-weight-bolder tracking-widest text-uppercase" style="color: #FF9F0D;">
                  Hecho Fresco Cada Día
                </span>
              </div>
            </div>

            <!-- Título Principal Impactante en Español -->
            <h1 class="hero-title q-mt-none q-mb-sm text-white font-bebas leading-none">
              ¡NO ES SOLO COMIDA,<br>
              ES <span class="script-accent text-amber-5">Pura Felicidad!</span>
            </h1>

            <p class="text-body1 text-grey-4 q-mb-xl max-w-lg leading-relaxed font-sans">
              Hamburguesas artesanales con 100% carne angus certificada, ahumadas al carbón, en pan brioche esponjoso y con nuestras salsas secretas irresistibles.
            </p>

            <!-- Botones CTA estilo Pill -->
            <div class="row items-center q-gutter-md justify-center justify-md-start q-mb-xl">
              <!-- Botón Dorado Pill con flecha -->
              <q-btn
                unelevated
                rounded
                class="hero-cta-btn text-weight-bolder text-dark q-px-xl q-py-sm shadow-10"
                style="background-color: #FF9F0D; font-size: 16px; border-radius: 9999px;"
                to="/#menu-section"
                @click="scrollToMenu"
              >
                <div class="row items-center no-wrap">
                  <span>Ordenar en Línea</span>
                  <q-icon name="arrow_forward" size="20px" class="q-ml-sm" />
                </div>
              </q-btn>

              <!-- Botón Delineado Pill -->
              <q-btn
                outline
                rounded
                class="hero-outline-btn text-weight-bold text-white q-px-lg q-py-sm"
                style="font-size: 15px; border: 2px solid rgba(255, 255, 255, 0.4); border-radius: 9999px;"
                to="/hamburguesas"
              >
                Ver Menú
              </q-btn>
            </div>

            <!-- Badge Social flotante: "50K+ Clientes Felices" -->
            <div
              class="social-proof-card inline-flex items-center q-pa-sm rounded-borders shadow-4"
              style="background: rgba(25, 25, 30, 0.85); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px;"
            >
              <!-- Avatares agrupados -->
              <div class="row no-wrap -space-x-2 q-mr-md">
                <q-avatar size="36px" class="border-2 border-dark">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Cliente" />
                </q-avatar>
                <q-avatar size="36px" class="border-2 border-dark">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Cliente" />
                </q-avatar>
                <q-avatar size="36px" class="border-2 border-dark">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" alt="Cliente" />
                </q-avatar>
              </div>

              <!-- Rating y Texto -->
              <div class="text-left">
                <div class="row items-center no-wrap">
                  <q-rating
                    :model-value="5"
                    max="5"
                    size="13px"
                    color="amber-8"
                    icon="star"
                    readonly
                  />
                  <span class="text-weight-bolder text-caption text-white q-ml-xs">4.9 / 5.0</span>
                </div>
                <div class="text-caption text-weight-bold text-grey-4">
                  <strong class="text-amber-8">50K+</strong> Clientes Felices en Colombia
                </div>
              </div>
            </div>
          </div>

          <!-- Columna Derecha: Imagen Principal Hero con Badges Flotantes -->
          <div class="col-12 col-md-6 flex flex-center relative-position">
            <div class="hero-image-container relative">
              <!-- Halo de luz dorada -->
              <div class="hero-light-ring"></div>

              <!-- Imagen Principal (Hamburguesa Premium con papas y bebida) -->
              <img
                src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=1000&q=85"
                alt="BurgerByte Combo Premium"
                class="hero-main-burger rounded-3xl shadow-2xl relative z-10 transition-transform duration-700 hover:scale-105"
                style="max-width: 100%; max-height: 480px; object-fit: cover; border-radius: 28px; border: 2px solid rgba(255, 159, 13, 0.3);"
              />

              <!-- Floating Badge 1: "100% Carne Angus" -->
              <div
                class="floating-chip chip-top-left animate-float"
                style="position: absolute; top: -15px; left: -20px; z-index: 20;"
              >
                <div
                  class="q-py-xs q-px-md text-white text-caption text-weight-bolder row items-center no-wrap shadow-5"
                  style="background-color: #0E0E11; border: 1.5px solid #FF9F0D; border-radius: 50px;"
                >
                  <q-icon name="stars" color="amber-8" size="18px" class="q-mr-xs" />
                  <span>100% Carne Angus</span>
                </div>
              </div>

              <!-- Floating Badge 2: "Entrega en 28 min" -->
              <div
                class="floating-chip chip-bottom-right animate-float-delayed"
                style="position: absolute; bottom: -10px; right: -15px; z-index: 20;"
              >
                <div
                  class="q-py-xs q-px-md text-dark text-caption text-weight-bolder row items-center no-wrap shadow-8"
                  style="background-color: #FF9F0D; border-radius: 50px;"
                >
                  <q-icon name="local_shipping" color="dark" size="18px" class="q-mr-xs" />
                  <span>Entrega en 28 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================== -->
    <!-- 2. FEATURE STRIP (PROPUESTA DE VALOR) -->
    <!-- ============================================== -->
    <section class="feature-strip bg-white text-grey-9 py-8 border-y border-grey-200 shadow-xs">
      <div class="q-container q-px-md max-w-7xl mx-auto">
        <div class="row q-col-gutter-lg items-center">
          <!-- Feature 1: Ingredientes Frescos -->
          <div class="col-12 col-sm-6 col-md-3">
            <div class="feature-card row items-center no-wrap q-pa-sm rounded-borders hover:bg-grey-1 transition">
              <q-avatar size="52px" font-size="26px" color="amber-1" text-color="amber-10" icon="eco" class="q-mr-md" />
              <div>
                <div class="text-weight-bolder text-subtitle2 text-grey-10">Ingredientes Frescos</div>
                <div class="text-caption text-grey-6">Ingredientes frescos y locales cada día</div>
              </div>
            </div>
          </div>

          <!-- Feature 2: Higiénico y Seguro -->
          <div class="col-12 col-sm-6 col-md-3">
            <div class="feature-card row items-center no-wrap q-pa-sm rounded-borders hover:bg-grey-1 transition">
              <q-avatar size="52px" font-size="26px" color="red-1" text-color="red-9" icon="verified_user" class="q-mr-md" />
              <div>
                <div class="text-weight-bolder text-subtitle2 text-grey-10">Higiénico y Seguro</div>
                <div class="text-caption text-grey-6">Máxima bioseguridad en cocina</div>
              </div>
            </div>
          </div>

          <!-- Feature 3: Entrega Súper Rápida -->
          <div class="col-12 col-sm-6 col-md-3">
            <div class="feature-card row items-center no-wrap q-pa-sm rounded-borders hover:bg-grey-1 transition">
              <q-avatar size="52px" font-size="26px" color="amber-2" text-color="dark" icon="electric_moped" class="q-mr-md" />
              <div>
                <div class="text-weight-bolder text-subtitle2 text-grey-10">Entrega Súper Rápida</div>
                <div class="text-caption text-grey-6">Empaques térmicos anti-humedad</div>
              </div>
            </div>
          </div>

          <!-- Feature 4: Fácil Pedido en Línea -->
          <div class="col-12 col-sm-6 col-md-3">
            <div class="feature-card row items-center no-wrap q-pa-sm rounded-borders hover:bg-grey-1 transition">
              <q-avatar size="52px" font-size="26px" color="green-1" text-color="green-9" icon="touch_app" class="q-mr-md" />
              <div>
                <div class="text-weight-bolder text-subtitle2 text-grey-10">Fácil Pedido en Línea</div>
                <div class="text-caption text-grey-6">Ordena en segundos vía WhatsApp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================== -->
    <!-- 3. PESTAÑAS DE FILTRADO Y GRID ("LOS PLATOS MÁS QUERIDOS") -->
    <!-- ============================================== -->
    <section id="menu-section" class="q-py-xl bg-grey-1">
      <div class="q-container q-px-md max-w-7xl mx-auto">
        <!-- Encabezado de Sección -->
        <div class="text-center q-mb-lg">
          <div class="inline-flex items-center text-weight-bolder text-caption text-uppercase tracking-widest text-amber-9 q-mb-xs">
            <q-icon name="restaurant_menu" size="16px" class="q-mr-xs" />
            NUESTRA CARTA
          </div>
          <h2 class="text-h3 text-weight-bolder text-grey-10 font-bebas q-mt-none q-mb-xs tracking-tight">
            LOS PLATOS MÁS QUERIDOS
          </h2>
          <p class="text-body2 text-grey-7 max-w-md mx-auto">
            Preparados al instante con las recetas maestras de nuestro Chef. Elige tu categoría favorita.
          </p>
        </div>

        <!-- Filtros por categoría usando q-tabs estilo píldora -->
        <div class="flex flex-center q-mb-xl">
          <q-tabs
            v-model="activeCategory"
            dense
            active-color="dark"
            indicator-color="transparent"
            class="pill-tabs q-pa-xs rounded-full shadow-1 bg-white border border-grey-200"
            style="border-radius: 9999px;"
          >
            <q-tab
              name="all"
              label="Todos"
              icon="fastfood"
              class="pill-tab text-weight-bold"
            />
            <q-tab
              name="burgers"
              label="Hamburguesas"
              icon="lunch_dining"
              class="pill-tab text-weight-bold"
            />
            <q-tab
              name="perros"
              label="Perros Calientes"
              icon="ramen_dining"
              class="pill-tab text-weight-bold"
            />
            <q-tab
              name="pizzas"
              label="Pizzas"
              icon="local_pizza"
              class="pill-tab text-weight-bold"
            />
            <q-tab
              name="drinks"
              label="Bebidas"
              icon="local_cafe"
              class="pill-tab text-weight-bold"
            />
            <q-tab
              name="desserts"
              label="Postres"
              icon="icecream"
              class="pill-tab text-weight-bold"
            />
          </q-tabs>
        </div>

        <!-- Grid de Tarjetas de Producto (q-card) -->
        <div v-if="filteredProducts.length > 0" class="row q-col-gutter-lg">
          <div
            v-for="prod in filteredProducts"
            :key="prod.id"
            class="col-12 col-sm-6 col-md-4 col-lg-3"
          >
            <ProductCard :product="prod" />
          </div>
        </div>

        <!-- Estado si no hay productos con búsqueda -->
        <div v-else class="text-center q-py-xl">
          <q-avatar size="64px" color="grey-3" icon="search_off" class="q-mb-md" />
          <div class="text-h6 text-grey-8">No encontramos productos en esta búsqueda</div>
          <q-btn
            flat
            color="amber-9"
            label="Ver Todo el Menú"
            class="q-mt-sm"
            @click="resetFilter"
          />
        </div>
      </div>
    </section>

    <!-- ============================================== -->
    <!-- 4. BANNERS PROMOCIONALES DIVIDIDOS (2 COLUMNAS) -->
    <!-- ============================================== -->
    <section class="promos-section q-py-lg bg-white">
      <div class="q-container q-px-md max-w-7xl mx-auto">
        <div class="row q-col-gutter-lg">
          <!-- Banner 1: COMBO HAMBURGUESA -->
          <div class="col-12 col-md-6">
            <div
              class="promo-banner relative overflow-hidden q-pa-lg text-white shadow-3 flex justify-between items-center"
              style="background: linear-gradient(135deg, #18181D 0%, #0E0E11 100%); border-radius: 20px; min-height: 240px; border: 1px solid rgba(255, 159, 13, 0.2);"
            >
              <div class="col-7 z-10">
                <q-badge
                  color="negative"
                  text-color="white"
                  class="text-weight-bolder text-uppercase q-px-sm q-py-xs q-mb-sm"
                  style="border-radius: 6px;"
                >
                  OFERTA ESPECIAL
                </q-badge>
                <h3 class="text-h4 text-weight-bolder font-bebas q-my-none text-uppercase leading-none">
                  COMBO HAMBURGUESA
                </h3>
                <div class="text-subtitle2 text-amber-5 text-weight-bold q-mb-sm">
                  ¡Gran Sabor, Mayor Ahorro!
                </div>
                <p class="text-caption text-grey-4 q-mb-md">
                  2 Hamburguesas Byte Royale + Papas Rústicas + 2 Bebidas heladas.
                </p>

                <!-- Precio tachado y precio especial -->
                <div class="row items-baseline q-gutter-x-sm q-mb-md">
                  <span class="text-caption text-strike text-grey-5">$89.000 COP</span>
                  <span class="text-h5 text-weight-bolder text-amber-5">$64.900 COP</span>
                </div>

                <q-btn
                  unelevated
                  rounded
                  color="amber-8"
                  text-color="dark"
                  label="Pedir Combo ->"
                  class="text-weight-bold"
                  to="/promociones"
                />
              </div>

              <!-- Imagen del combo -->
              <div class="col-5 flex flex-center">
                <img
                  src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=500&q=80"
                  alt="Combo Hamburguesa"
                  class="rounded-xl shadow-4 hover:scale-105 transition-transform duration-300"
                  style="width: 170px; height: 170px; object-fit: cover; border-radius: 16px;"
                />
              </div>
            </div>
          </div>

          <!-- Banner 2: FESTIVAL DE PIZZA -->
          <div class="col-12 col-md-6">
            <div
              class="promo-banner relative overflow-hidden q-pa-lg text-white shadow-3 flex justify-between items-center"
              style="background: linear-gradient(135deg, #A8201A 0%, #7D1510 100%); border-radius: 20px; min-height: 240px;"
            >
              <div class="col-7 z-10">
                <q-badge
                  color="amber-9"
                  text-color="dark"
                  class="text-weight-bolder text-uppercase q-px-sm q-py-xs q-mb-sm"
                  style="border-radius: 6px;"
                >
                  FESTIVAL PIZZA
                </q-badge>
                <h3 class="text-h4 text-weight-bolder font-bebas q-my-none text-uppercase leading-none">
                  FESTIVAL DE PIZZA
                </h3>
                <div class="text-subtitle2 text-amber-3 text-weight-bold q-mb-sm">
                  ¡20% DE DESCUENTO En Todas Las Pizzas!
                </div>
                <p class="text-caption text-grey-2 q-mb-md">
                  Masa madre fermentada 48 horas, mozzarella importada y borde crujiente a la leña.
                </p>

                <div class="row items-baseline q-gutter-x-sm q-mb-md">
                  <span class="text-h5 text-weight-bolder text-white">20% DE DESCUENTO</span>
                </div>

                <q-btn
                  unelevated
                  rounded
                  color="white"
                  text-color="red-10"
                  label="Ver Pizzas ->"
                  class="text-weight-bold"
                  to="/pizzas"
                />
              </div>

              <!-- Imagen de la pizza -->
              <div class="col-5 flex flex-center">
                <img
                  src="https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500&q=80"
                  alt="Pizza Pepperoni"
                  class="rounded-xl shadow-4 hover:scale-105 transition-transform duration-300"
                  style="width: 170px; height: 170px; object-fit: cover; border-radius: 16px;"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';
import { products } from '../data/products';
import { useCart } from '../composables/useCart';
import ProductCard from '../components/ProductCard.vue';

const { searchQuery } = useCart();
const activeCategory = ref('all');

const filteredProducts = computed(() => {
  let list = products;

  // Filtro por categoría seleccionada
  if (activeCategory.value !== 'all') {
    list = list.filter(item => item.category === activeCategory.value);
  }

  // Filtro por búsqueda global
  if (searchQuery.value && searchQuery.value.trim() !== '') {
    const q = searchQuery.value.toLowerCase().trim();
    list = list.filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.categoryName.toLowerCase().includes(q)
    );
  }

  return list;
});

const resetFilter = () => {
  activeCategory.value = 'all';
  searchQuery.value = '';
};

const scrollToMenu = () => {
  const el = document.getElementById('menu-section');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.font-bebas {
  font-family: 'Bebas Neue', 'Montserrat', sans-serif;
  letter-spacing: 1px;
}

.script-accent {
  font-family: 'Caveat', cursive;
  font-weight: 700;
  display: inline-block;
  letter-spacing: 0.5px;
}

.hero-title {
  font-size: clamp(2.4rem, 5.5vw, 4.2rem);
}

.hero-glow {
  position: absolute;
  top: -20%;
  right: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255, 159, 13, 0.12) 0%, rgba(14, 14, 17, 0) 70%);
  pointer-events: none;
}

.hero-light-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  height: 380px;
  background: radial-gradient(circle, rgba(255, 159, 13, 0.2) 0%, rgba(255, 159, 13, 0) 65%);
  border-radius: 50%;
  z-index: 1;
}

.pill-tabs :deep(.q-tab--active) {
  background-color: #FF9F0D !important;
  color: #0E0E11 !important;
  border-radius: 9999px;
  box-shadow: 0 4px 12px rgba(255, 159, 13, 0.35);
}

.pill-tab {
  border-radius: 9999px;
  min-height: 42px;
  padding: 4px 18px;
  margin: 0 3px;
  transition: all 0.25s ease;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 4s ease-in-out infinite;
  animation-delay: 2s;
}
</style>
