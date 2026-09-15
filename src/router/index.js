import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Hamburguesas from '../views/Hamburguesas.vue';
import Perros from '../views/Perros.vue';
import Pizzas from '../views/Pizzas.vue';
import Bebidas from '../views/Bebidas.vue';
import Postres from '../views/Postres.vue';
import Promociones from '../views/Promociones.vue';
import Nosotros from '../views/Nosotros.vue';
import Contacto from '../views/Contacto.vue';
import Carrito from '../views/Carrito.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Inicio - BurgerByte' }
  },
  {
    path: '/hamburguesas',
    name: 'Hamburguesas',
    component: Hamburguesas,
    meta: { title: 'Hamburguesas Artesanales - BurgerByte' }
  },
  {
    path: '/perros',
    name: 'Perros',
    component: Perros,
    meta: { title: 'Perros Calientes Gourmet - BurgerByte' }
  },
  {
    path: '/pizzas',
    name: 'Pizzas',
    component: Pizzas,
    meta: { title: 'Pizzas a la Piedra - BurgerByte' }
  },
  {
    path: '/bebidas',
    name: 'Bebidas',
    component: Bebidas,
    meta: { title: 'Bebidas & Malteadas - BurgerByte' }
  },
  {
    path: '/postres',
    name: 'Postres',
    component: Postres,
    meta: { title: 'Postres & Waffles - BurgerByte' }
  },
  {
    path: '/promociones',
    name: 'Promociones',
    component: Promociones,
    meta: { title: 'Combos & Promociones - BurgerByte' }
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: Nosotros,
    meta: { title: 'Sobre Nosotros - BurgerByte' }
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto,
    meta: { title: 'Contacto - BurgerByte' }
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: Carrito,
    meta: { title: 'Tu Pedido - BurgerByte' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, behavior: 'smooth' };
  }
});

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
