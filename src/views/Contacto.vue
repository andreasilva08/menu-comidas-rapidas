<template>
  <q-page class="q-pb-xl bg-grey-1 text-grey-9">
    <!-- Hero Banner de Contacto -->
    <div class="category-hero q-py-xl text-white relative overflow-hidden" style="background-color: #0E0E11;">
      <div class="q-container q-px-md max-w-7xl mx-auto relative z-10">
        <div class="row items-center justify-between">
          <div>
            <q-breadcrumbs class="text-caption text-grey-5 q-mb-sm">
              <q-breadcrumbs-el label="Inicio" to="/" />
              <q-breadcrumbs-el label="Contacto" class="text-amber-5" />
            </q-breadcrumbs>
            <h1 class="text-h3 text-weight-bolder font-bebas text-uppercase q-my-xs text-white">
              HABLEMOS <span class="text-amber-5">BURGERBYTE</span>
            </h1>
            <p class="text-body1 text-grey-4 max-w-xl">
              ¿Dudas, pedidos especiales o eventos? Estamos aquí para atenderte con la mejor energía y sabor.
            </p>
          </div>

          <!-- Botón de Cerrar y Volver a la vista anterior -->
          <div class="q-mt-md q-mt-md-none">
            <q-btn
              unelevated
              rounded
              color="grey-9"
              text-color="white"
              icon="arrow_back"
              label="Volver"
              class="text-weight-bold"
              @click="goBack"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Contenido Principal de Contacto -->
    <div class="q-container q-px-md max-w-7xl mx-auto q-mt-lg">
      <div class="row q-col-gutter-xl">
        <!-- Tarjeta de Información y Canales Directos -->
        <div class="col-12 col-md-5">
          <q-card flat class="bg-white q-pa-lg rounded-borders shadow-1 border border-grey-200" style="border-radius: 20px;">
            <div class="text-h5 text-weight-bolder text-grey-10 font-bebas q-mb-md">
              CANALES DE ATENCIÓN DIRECTA
            </div>

            <div class="column q-gutter-y-md">
              <div class="row items-start no-wrap">
                <q-avatar size="42px" color="amber-1" text-color="amber-9" icon="location_on" class="q-mr-md flex-shrink-0" />
                <div>
                  <div class="text-weight-bold text-subtitle2 text-grey-10">Dirección Principal</div>
                  <div class="text-caption text-grey-7">{{ restaurantInfo.address }}</div>
                  <div class="text-caption text-amber-9 text-weight-bold">Cobertura en toda la zona metropolitana</div>
                </div>
              </div>

              <div class="row items-start no-wrap">
                <q-avatar size="42px" color="green-1" text-color="green-8" icon="chat" class="q-mr-md flex-shrink-0" />
                <div>
                  <div class="text-weight-bold text-subtitle2 text-grey-10">Línea WhatsApp Pedidos</div>
                  <div class="text-caption text-grey-7">+{{ restaurantInfo.whatsapp }}</div>
                  <div class="text-caption text-grey-6">Respuesta inmediata de nuestro equipo</div>
                </div>
              </div>

              <div class="row items-start no-wrap">
                <q-avatar size="42px" color="blue-1" text-color="blue-8" icon="phone" class="q-mr-md flex-shrink-0" />
                <div>
                  <div class="text-weight-bold text-subtitle2 text-grey-10">Teléfono Fijo</div>
                  <div class="text-caption text-grey-7">{{ restaurantInfo.phone }}</div>
                </div>
              </div>

              <div class="row items-start no-wrap">
                <q-avatar size="42px" color="purple-1" text-color="purple-8" icon="schedule" class="q-mr-md flex-shrink-0" />
                <div>
                  <div class="text-weight-bold text-subtitle2 text-grey-10">Horario de Cocina</div>
                  <div class="text-caption text-grey-7">Lunes a Domingo: 11:30 AM a 11:30 PM</div>
                  <div class="text-caption text-positive text-weight-bold">¡Cocina Abierta Ahora!</div>
                </div>
              </div>
            </div>

            <q-separator class="q-my-lg bg-grey-2" />

            <!-- Botón WhatsApp Grande -->
            <q-btn
              unelevated
              rounded
              class="full-width text-weight-bold q-py-sm"
              style="background-color: #25D366; color: white; font-size: 15px;"
              icon="chat"
              label="Escribir por WhatsApp"
              @click="openWhatsApp"
            />
          </q-card>
        </div>

        <!-- Formulario de Mensaje -->
        <div class="col-12 col-md-7">
          <q-card flat class="bg-white q-pa-lg rounded-borders shadow-1 border border-grey-200" style="border-radius: 20px;">
            <div class="row items-center justify-between q-mb-md">
              <div>
                <div class="text-h5 text-weight-bolder text-grey-10 font-bebas">
                  ENVÍANOS UN MENSAJE
                </div>
                <div class="text-caption text-grey-6">
                  Déjanos tus datos y te responderemos en breve.
                </div>
              </div>
              <q-btn
                flat
                round
                dense
                icon="close"
                color="grey-8"
                aria-label="Cerrar contacto y regresar"
                class="bg-grey-2 hover:bg-grey-3"
                @click="goBack"
              >
                <q-tooltip>Cerrar vista de contacto</q-tooltip>
              </q-btn>
            </div>

            <q-form @submit.prevent="submitContactForm" class="q-gutter-y-md">
              <div class="row q-col-gutter-md">
                <div class="col-12 col-sm-6">
                  <q-input
                    v-model="contactData.name"
                    label="Nombre Completo *"
                    outlined
                    dense
                    lazy-rules
                    :rules="[val => !!val || 'El nombre es obligatorio']"
                  />
                </div>
                <div class="col-12 col-sm-6">
                  <q-input
                    v-model="contactData.phone"
                    label="Teléfono o Celular *"
                    outlined
                    dense
                    lazy-rules
                    :rules="[val => !!val || 'El teléfono es obligatorio']"
                  />
                </div>
              </div>

              <q-input
                v-model="contactData.email"
                label="Correo Electrónico *"
                outlined
                dense
                type="email"
                lazy-rules
                :rules="[val => !!val || 'El correo es obligatorio']"
              />

              <q-select
                v-model="contactData.subject"
                :options="['Pedido Especial / Evento', 'Consulta sobre el Menú', 'Felicitaciones o Sugerencias', 'Información de Domicilios', 'Otro Asunto']"
                label="Motivo del Mensaje *"
                outlined
                dense
              />

              <q-input
                v-model="contactData.message"
                label="Escribe tu mensaje aquí *"
                outlined
                dense
                type="textarea"
                rows="4"
                lazy-rules
                :rules="[val => !!val || 'Por favor ingresa tu mensaje']"
              />

              <div class="row items-center justify-between q-mt-lg">
                <q-btn
                  flat
                  rounded
                  color="grey-8"
                  label="Cancelar y Salir"
                  icon="close"
                  @click="goBack"
                />

                <q-btn
                  unelevated
                  rounded
                  color="amber-8"
                  text-color="dark"
                  label="Enviar Mensaje"
                  icon-right="send"
                  class="text-weight-bold q-px-xl"
                  type="submit"
                />
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
import { Notify } from 'quasar';
import { restaurantInfo } from '../data/products';

const router = useRouter();

const contactData = reactive({
  name: '',
  phone: '',
  email: '',
  subject: 'Pedido Especial / Evento',
  message: ''
});

const goBack = () => {
  if (window.history.state && window.history.state.back) {
    router.back();
  } else {
    router.push('/');
  }
};

const openWhatsApp = () => {
  window.open(`https://wa.me/${restaurantInfo.whatsapp}?text=Hola%20BurgerByte,%20quiero%20hacer%20una%20consulta%20o%20pedido`, '_blank');
};

const submitContactForm = () => {
  Notify.create({
    message: `¡Gracias ${contactData.name}! Hemos recibido tu mensaje. Te responderemos pronto.`,
    color: 'positive',
    icon: 'check_circle',
    position: 'top',
    timeout: 3500
  });

  contactData.name = '';
  contactData.phone = '';
  contactData.email = '';
  contactData.message = '';

  // Regresar a la vista correspondiente
  setTimeout(() => {
    goBack();
  }, 1200);
};
</script>

<style scoped>
.font-bebas {
  font-family: 'Bebas Neue', 'Montserrat', sans-serif;
  letter-spacing: 0.5px;
}
</style>
