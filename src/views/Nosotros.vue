<template>
  <q-page class="q-pb-xl bg-grey-1 text-grey-9">
    <!-- Hero Banner de Nosotros -->
    <div class="category-hero q-py-xl text-white relative overflow-hidden" style="background-color: #0E0E11;">
      <div class="q-container q-px-md max-w-7xl mx-auto relative z-10 text-center">
        <q-breadcrumbs class="text-caption text-grey-5 q-mb-sm flex flex-center">
          <q-breadcrumbs-el label="Inicio" to="/" />
          <q-breadcrumbs-el label="Sobre Nosotros" class="text-amber-5" />
        </q-breadcrumbs>
        <div class="inline-flex items-center q-mb-xs">
          <q-badge color="amber-9" text-color="black" label="PASIÓN & SABOR REAL" class="text-weight-bold" />
        </div>
        <h1 class="text-h2 text-weight-bolder font-bebas text-uppercase q-my-xs text-white">
          NUESTRA <span class="text-amber-5">HISTORIA</span>
        </h1>
        <p class="text-body1 text-grey-4 max-w-2xl mx-auto leading-relaxed">
          En BurgerByte creemos que la comida rápida no tiene por qué ser ordinaria. Combinamos técnicas culinarias de alta cocina con la autenticidad del street food.
        </p>
      </div>
    </div>

    <div class="q-container q-px-md max-w-7xl mx-auto q-mt-xl">
      <!-- Sección de Historia y Filosofía -->
      <div class="row q-col-gutter-xl items-center q-mb-xl">
        <div class="col-12 col-md-6">
          <span class="text-caption text-weight-bolder text-amber-9 text-uppercase tracking-widest">
            Desde 2021
          </span>
          <h2 class="text-h4 text-weight-bolder font-bebas text-grey-10 q-mt-xs q-mb-md">
            CÓMO NACIÓ BURGERBYTE
          </h2>
          <p class="text-body1 text-grey-8 leading-relaxed q-mb-md">
            BurgerByte nació en Bogotá en el año 2021 a partir del sueño de un grupo de amigos apasionados por la gastronomía y la tecnología. Cansados de las hamburguesas congeladas y los procesos industriales sin alma, decidimos encender un fogón artesanal con carbón de roble y carne fresca molida cada mañana.
          </p>
          <p class="text-body2 text-grey-7 leading-relaxed q-mb-lg">
            Nuestros panes brioche se fermentan lentamente para lograr esa textura esponjosa y dorada perfecta. Nuestras salsas no vienen en galones de fábrica; se emulsionan en pequeños lotes con ingredientes naturales. Cada pedido es preparado al instante con dedicación y cariño.
          </p>

          <div class="row q-gutter-md">
            <q-btn
              unelevated
              rounded
              class="text-weight-bold shadow-2 q-px-lg q-py-sm"
              style="background-color: #25D366; color: white; font-size: 15px;"
              icon="chat"
              label="Chatear por WhatsApp ->"
              @click="openWhatsAppDirect"
            />
            <q-btn
              outline
              rounded
              class="text-weight-bold q-px-lg"
              color="dark"
              label="Ver el Menú"
              to="/#menu-section"
            />
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="relative">
            <q-img
              src="https://i.pinimg.com/1200x/a2/c6/37/a2c637bd68b3324c885db6a65842f67c.jpg"
              class="rounded-borders shadow-8"
              style="border-radius: 24px; max-height: 420px;"
            />
            <div
              class="absolute-bottom-right q-pa-md text-white shadow-6"
              style="background-color: #0E0E11; border-radius: 16px; border: 1.5px solid #FF9F0D; margin: 16px;"
            >
              <div class="text-h5 text-weight-bolder text-amber-5 font-bebas leading-none">50.000+</div>
              <div class="text-caption text-grey-4">Hamburguesas servidas con amor</div>
            </div>
          </div>
        </div>
      </div>

      <!-- SECCIÓN DEL EQUIPO (3 INTEGRANTES: Chef, Cajero, Domiciliario) -->
      <div class="q-py-xl border-t border-grey-200">
        <div class="text-center q-mb-xl">
          <div class="inline-flex items-center text-weight-bolder text-caption text-uppercase tracking-widest text-amber-9 q-mb-xs">
            NUESTRA FAMILIA
          </div>
          <h2 class="text-h3 text-weight-bolder text-grey-10 font-bebas q-mt-none q-mb-xs">
            EL EQUIPO DETRÁS DEL SABOR
          </h2>
          <p class="text-body2 text-grey-7 max-w-md mx-auto">
            Conoce a los profesionales apasionados que hacen posible la magia de BurgerByte todos los días.
          </p>
        </div>

        <div class="row q-col-gutter-lg">
          <div
            v-for="member in teamMembers"
            :key="member.id"
            class="col-12 col-md-4"
          >
            <q-card
              flat
              class="team-card bg-white text-grey-9 rounded-borders shadow-1 border border-grey-200 overflow-hidden text-center q-pa-lg transition-all"
              style="border-radius: 20px;"
            >
              <div class="flex flex-center q-mb-md">
                <q-avatar size="130px" class="shadow-4 border-4 border-amber-500">
                  <q-img :src="member.avatar" :alt="member.name" fit="cover" />
                </q-avatar>
              </div>

              <div class="text-h6 text-weight-bolder text-grey-10 q-mb-xs">
                {{ member.name }}
              </div>
              <q-badge
                color="amber-9"
                text-color="dark"
                class="text-weight-bolder q-px-sm q-py-xs q-mb-md"
                style="border-radius: 6px;"
              >
                {{ member.role }}
              </q-badge>

              <p class="text-body2 text-grey-7 q-mb-md leading-relaxed">
                {{ member.experience }}
              </p>

              <div class="q-pa-sm rounded-borders bg-grey-1 border border-grey-200 text-caption text-grey-8">
                <span class="text-weight-bold text-amber-9">Especialidad:</span> {{ member.specialty }}
              </div>
            </q-card>
          </div>
        </div>
      </div>

      <!-- Ubicación Física y Horarios de Atención -->
      <div class="q-py-xl border-t border-grey-200">
        <div class="row q-col-gutter-xl items-center">
          <div class="col-12 col-md-6">
            <span class="text-caption text-weight-bolder text-amber-9 text-uppercase tracking-widest">
              Visítanos o Pide a Domicilio
            </span>
            <h2 class="text-h4 text-weight-bolder font-bebas text-grey-10 q-mt-xs q-mb-md">
              SEDE PRINCIPAL & HORARIOS
            </h2>

            <div class="column q-gutter-y-md q-mb-lg">
              <div class="row items-start no-wrap">
                <q-avatar size="40px" font-size="20px" color="amber-1" text-color="amber-10" icon="place" class="q-mr-md" />
                <div>
                  <div class="text-weight-bold text-subtitle2 text-grey-10">Dirección Física</div>
                  <div class="text-body2 text-grey-7">{{ restaurantInfo.address }}</div>
                  <div class="text-caption text-grey-5">Zona con parqueadero vigilado y terraza pet-friendly</div>
                </div>
              </div>

              <div class="row items-start no-wrap">
                <q-avatar size="40px" font-size="20px" color="blue-1" text-color="blue-9" icon="schedule" class="q-mr-md" />
                <div>
                  <div class="text-weight-bold text-subtitle2 text-grey-10">Horario de Cocina</div>
                  <div class="text-body2 text-grey-7">{{ restaurantInfo.hours }}</div>
                  <div class="text-caption text-green-8 text-weight-bold">● Abierto hoy para pedidos</div>
                </div>
              </div>

              <div class="row items-start no-wrap">
                <q-avatar size="40px" font-size="20px" color="green-1" text-color="green-9" icon="phone" class="q-mr-md" />
                <div>
                  <div class="text-weight-bold text-subtitle2 text-grey-10">Teléfono & WhatsApp</div>
                  <div class="text-body2 text-grey-7">{{ restaurantInfo.phone }}</div>
                  <div class="text-caption text-grey-5">Atención inmediata a pedidos y reservas</div>
                </div>
              </div>
            </div>

            <q-btn
              unelevated
              rounded
              class="text-weight-bold q-px-xl q-py-sm shadow-3"
              style="background-color: #25D366; color: white;"
              icon="chat"
              label="Escríbenos a WhatsApp"
              @click="openWhatsAppDirect"
            />
          </div>

          <div class="col-12 col-md-6">
            <q-card flat class="bg-grey-10 text-white q-pa-lg rounded-borders shadow-4 relative overflow-hidden" style="border-radius: 20px;">
              <div class="text-subtitle1 text-weight-bold text-amber-5 q-mb-sm">ZONA DE COBERTURA EXPRESS</div>
              <p class="text-body2 text-grey-4 q-mb-md">
                Contamos con flota propia de motocicletas térmicas que cubren Chapinero, Zona Rosa, Chicó, Parque de la 93, Rosales y alrededores en menos de 28 minutos.
              </p>
              <q-img
                src="https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80"
                class="rounded-borders shadow-2"
                style="height: 200px; border-radius: 12px;"
              />
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { teamMembers, restaurantInfo } from '../data/products';

const openWhatsAppDirect = () => {
  window.open(`https://wa.me/${restaurantInfo.whatsapp}?text=Hola%20BurgerByte!%20Quiero%20conocer%20m%C3%A1s%20sobre%20su%20restaurante%20o%20hacer%20un%20pedido%20especial`, '_blank');
};
</script>

<style scoped>
.font-bebas {
  font-family: 'Bebas Neue', 'Montserrat', sans-serif;
  letter-spacing: 0.5px;
}

.team-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
}
</style>
