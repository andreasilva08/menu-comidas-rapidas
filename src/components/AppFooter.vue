<template>
  <div>
    <!-- SECCIÓN: GET THE BURGERBYTE APP -->
    <section class="app-banner q-py-xl relative-position overflow-hidden" style="background: linear-gradient(135deg, #18181D 0%, #0E0E11 100%);">
      <div class="q-container q-px-md max-w-7xl mx-auto">
        <div class="row items-center justify-between q-col-gutter-xl">
          <!-- Columna Texto y Botones de Descarga -->
          <div class="col-12 col-md-7 text-white">
            <div class="row items-center q-mb-sm">
              <q-badge color="amber-9" text-color="black" class="text-weight-bolder text-uppercase q-px-sm q-py-xs" style="border-radius: 6px;">
                <q-icon name="smartphone" size="14px" class="q-mr-xs" />
                Experiencia Móvil
              </q-badge>
            </div>
            <h2 class="text-h3 text-weight-bolder text-uppercase q-mt-none q-mb-sm font-condensed tracking-tight">
              Descarga la App de <span class="text-amber-8">BurgerByte</span>
            </h2>
            <p class="text-body1 text-grey-4 q-mb-lg max-w-xl leading-relaxed">
              Pide tus hamburguesas favoritas con 1 click, rastrea a tu repartidor en tiempo real, acumula BytePoints por cada compra y accede a descuentos exclusivos solo en la app.
            </p>

            <!-- Badges de App Store y Google Play -->
            <div class="row items-center q-gutter-md">
              <q-btn
                unelevated
                rounded
                class="bg-dark text-white q-py-xs q-px-md border border-grey-8 hover:border-amber-8 transition"
                style="border-radius: 12px; background-color: #1F1F24;"
                @click="notifyAppDownload('App Store')"
              >
                <div class="row items-center no-wrap">
                  <q-icon name="apple" size="32px" class="q-mr-sm" />
                  <div class="text-left">
                    <div class="text-caption text-grey-5 leading-none" style="font-size: 10px;">Descárgalo en el</div>
                    <div class="text-weight-bold text-subtitle2 leading-tight">App Store</div>
                  </div>
                </div>
              </q-btn>

              <q-btn
                unelevated
                rounded
                class="bg-dark text-white q-py-xs q-px-md border border-grey-8 hover:border-amber-8 transition"
                style="border-radius: 12px; background-color: #1F1F24;"
                @click="notifyAppDownload('Google Play')"
              >
                <div class="row items-center no-wrap">
                  <q-icon name="play_arrow" size="32px" class="q-mr-sm text-amber-8" />
                  <div class="text-left">
                    <div class="text-caption text-grey-5 leading-none" style="font-size: 10px;">DISPONIBLE EN</div>
                    <div class="text-weight-bold text-subtitle2 leading-tight">Google Play</div>
                  </div>
                </div>
              </q-btn>
            </div>
          </div>

          <!-- Columna Mockup / Imagen Visual -->
          <div class="col-12 col-md-5 text-center flex flex-center">
            <div class="relative inline-block">
              <!-- Glow decorativo -->
              <div
                class="absolute -inset-4 bg-amber-500/20 blur-2xl rounded-full"
                style="pointer-events: none;"
              ></div>
              <q-card
                flat
                class="bg-grey-10 text-white q-pa-sm shadow-24 border border-grey-8 relative z-10"
                style="border-radius: 32px; width: 280px;"
              >
                <div class="bg-black q-pa-md rounded-borders text-left" style="border-radius: 26px;">
                  <!-- Mockup pantalla app -->
                  <div class="row justify-between items-center q-mb-md">
                    <div class="row items-center">
                      <span class="text-weight-bolder text-amber-8 text-subtitle2">BurgerByte</span>
                    </div>
                    <q-badge color="amber-9" text-color="black" label="28 min" />
                  </div>
                  <q-img
                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80"
                    class="rounded-borders q-mb-sm shadow-2"
                    style="border-radius: 16px; height: 160px;"
                  />
                  <div class="text-weight-bold text-body2 text-white">Hamburguesa Byte Royale</div>
                  <div class="text-caption text-grey-5 q-mb-sm">En camino a tu dirección 🛵</div>
                  <q-linear-progress indeterminate color="amber-8" class="q-mb-xs rounded-borders" />
                </div>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER PRINCIPAL DE 4 COLUMNAS -->
    <footer class="text-white" style="background-color: #0A0A0D; border-top: 1px solid rgba(255, 255, 255, 0.08);">
      <div class="q-container q-px-md max-w-7xl mx-auto q-py-xl">
        <div class="row q-col-gutter-xl">
          <!-- Columna 1: Marca BurgerByte -->
          <div class="col-12 col-sm-6 col-md-3">
            <div class="row items-center q-mb-md">
              <div class="brand-logo row items-center no-wrap">
                <span class="text-h5 text-weight-bolder tracking-tighter text-white">
                  BURGER<span style="color: #FF9F0D;">BYTE</span>
                </span>
                <span class="q-ml-xs text-caption px-1.5 py-0.5 rounded text-black text-weight-bold" style="background-color: #FF9F0D; font-size: 10px;">EST. 2021</span>
              </div>
            </div>
            <p class="text-body2 text-grey-5 leading-relaxed q-mb-md">
              Amor a primera mordida. Creamos hamburguesas artesanales premium con carne angus fresca, panes brioche doraditos y salsas de autor.
            </p>
            <div class="row items-center q-gutter-sm">
              <q-btn flat round dense icon="facebook" color="grey-4" class="hover:text-amber-8" />
              <q-btn flat round dense icon="photo_camera" color="grey-4" class="hover:text-amber-8" />
              <q-btn flat round dense icon="tiktok" color="grey-4" class="hover:text-amber-8" />
              <q-btn flat round dense icon="chat" color="green-5" @click="openWhatsApp" />
            </div>
          </div>

          <!-- Columna 2: Quick Links -->
          <div class="col-12 col-sm-6 col-md-3">
            <div class="text-subtitle1 text-weight-bolder text-uppercase tracking-wider q-mb-md text-amber-8 font-condensed">
              Menú Rápido
            </div>
            <div class="column q-gutter-y-sm text-body2">
              <router-link to="/" class="text-grey-4 hover:text-amber-8 transition no-underline">
                Inicio
              </router-link>
              <router-link to="/hamburguesas" class="text-grey-4 hover:text-amber-8 transition no-underline">
                Hamburguesas Artesanales
              </router-link>
              <router-link to="/pizzas" class="text-grey-4 hover:text-amber-8 transition no-underline">
                Pizzas a la Piedra
              </router-link>
              <router-link to="/perros" class="text-grey-4 hover:text-amber-8 transition no-underline">
                Perros Calientes Gourmet
              </router-link>
              <router-link to="/promociones" class="text-grey-4 hover:text-amber-8 transition no-underline">
                Combos & Promociones
              </router-link>
              <router-link to="/nosotros" class="text-grey-4 hover:text-amber-8 transition no-underline">
                Nuestra Historia & Equipo
              </router-link>
              <router-link to="/contacto" class="text-grey-4 hover:text-amber-8 transition no-underline">
                Contacto Directo
              </router-link>
            </div>
          </div>

          <!-- Columna 3: Soporte & Info -->
          <div class="col-12 col-sm-6 col-md-3">
            <div class="text-subtitle1 text-weight-bolder text-uppercase tracking-wider q-mb-md text-amber-8 font-condensed">
              Soporte & Legal
            </div>
            <div class="column q-gutter-y-sm text-body2">
              <a href="javascript:void(0)" class="text-grey-4 hover:text-amber-8 transition no-underline" @click="showInfoModal('Preguntas Frecuentes', 'Horarios de cocina: 11:30 AM a 11:30 PM todos los días. Domicilios propios con cobertura en toda la zona metropolitana.')">
                Preguntas Frecuentes (FAQs)
              </a>
              <a href="javascript:void(0)" class="text-grey-4 hover:text-amber-8 transition no-underline" @click="showInfoModal('Tiempos de Envío', 'Nuestro promedio de entrega es de 25 a 35 minutos gracias a nuestros domiciliarios propios.')">
                Tiempos de Entrega
              </a>
              <a href="javascript:void(0)" class="text-grey-4 hover:text-amber-8 transition no-underline" @click="showInfoModal('Políticas de Privacidad', 'Tus datos son tratados de manera confidencial y protegida conforme a la Ley de Protección de Datos Personales.')">
                Política de Privacidad
              </a>
              <a href="javascript:void(0)" class="text-grey-4 hover:text-amber-8 transition no-underline" @click="showInfoModal('Términos de Servicio', 'Todos los precios incluyen impuestos de ley. Promociones no acumulables con otros cupones.')">
                Términos y Condiciones
              </a>
              <a href="javascript:void(0)" class="text-grey-4 hover:text-amber-8 transition no-underline" @click="showInfoModal('Libro de Reclamaciones', 'Canal directo de PQRS atendido en un plazo máximo de 24 horas por gerencia.')">
                Libro de Reclamaciones
              </a>
            </div>
          </div>

          <!-- Columna 4: Contact Us & Newsletter -->
          <div class="col-12 col-sm-6 col-md-3">
            <div class="text-subtitle1 text-weight-bolder text-uppercase tracking-wider q-mb-md text-amber-8 font-condensed">
              Contacto & Club Byte
            </div>
            <div class="text-body2 text-grey-4 q-mb-sm">
              <div class="row items-center no-wrap q-mb-xs">
                <q-icon name="location_on" color="amber-8" size="18px" class="q-mr-xs" />
                <span class="ellipsis">{{ restaurantInfo.address }}</span>
              </div>
              <div class="row items-center no-wrap q-mb-xs">
                <q-icon name="phone" color="amber-8" size="18px" class="q-mr-xs" />
                <span>{{ restaurantInfo.phone }}</span>
              </div>
              <div class="row items-center no-wrap q-mb-sm">
                <q-icon name="schedule" color="amber-8" size="18px" class="q-mr-xs" />
                <span class="text-caption">11:30 AM - 11:30 PM</span>
              </div>
            </div>

            <!-- Formulario de Newsletter -->
            <div class="q-mt-md">
              <div class="text-caption text-weight-bold text-grey-4 q-mb-xs">
                Únete al Club Byte (10% OFF primer pedido):
              </div>
              <div class="row no-wrap">
                <q-input
                  v-model="newsletterEmail"
                  dense
                  outlined
                  dark
                  placeholder="Tu correo aquí..."
                  class="col"
                  bg-color="grey-10"
                />
                <q-btn
                  unelevated
                  color="amber-8"
                  text-color="dark"
                  icon="send"
                  class="q-ml-xs text-weight-bold"
                  @click="subscribeNewsletter"
                />
              </div>
            </div>
          </div>
        </div>

        <q-separator class="q-my-lg bg-grey-9" />

        <!-- Copyright final -->
        <div class="row justify-between items-center text-caption text-grey-6">
          <div>
            © {{ currentYear }} <strong class="text-white">BurgerByte</strong>. Todos los derechos reservados.
          </div>
          <div>
            Hecho con pasión, Quasar Framework & Vue 3 🍔
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Notify, Dialog } from 'quasar';
import { restaurantInfo } from '../data/products';

const newsletterEmail = ref('');
const currentYear = new Date().getFullYear();

const notifyAppDownload = (platform) => {
  Notify.create({
    message: `¡La aplicación BurgerByte para ${platform} estará disponible muy pronto! Mientras tanto puedes ordenar desde esta web.`,
    color: 'amber-9',
    textColor: 'black',
    icon: 'info',
    position: 'top',
    timeout: 3000
  });
};

const subscribeNewsletter = () => {
  if (!newsletterEmail.value || !newsletterEmail.value.includes('@')) {
    Notify.create({
      message: 'Por favor ingresa un correo electrónico válido',
      color: 'negative',
      icon: 'warning',
      position: 'top'
    });
    return;
  }

  Notify.create({
    message: '¡Bienvenido al Club Byte! Te enviamos tu cupón del 10% OFF a tu correo.',
    color: 'positive',
    icon: 'mail',
    position: 'top',
    timeout: 3500
  });

  newsletterEmail.value = '';
};

const openWhatsApp = () => {
  window.open(`https://wa.me/${restaurantInfo.whatsapp}?text=Hola%20BurgerByte,%20quiero%20hacer%20un%20pedido%20o%20tengo%20una%20consulta`, '_blank');
};

const showInfoModal = (title, message) => {
  Dialog.create({
    title,
    message,
    ok: {
      label: 'Entendido',
      color: 'amber-9',
      textColor: 'dark'
    }
  });
};
</script>

<style scoped>
.font-condensed {
  font-family: 'Bebas Neue', 'Montserrat', sans-serif;
  letter-spacing: 0.5px;
}

.no-underline {
  text-decoration: none;
}
</style>
