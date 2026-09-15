import { ref, computed } from 'vue';
import { Notify } from 'quasar';

// Estado global singleton para el carrito y favoritos
const cartItems = ref([]);
const favorites = ref(new Set(['h1', 'pz1']));
const isCartOpen = ref(false);
const isDetailOpen = ref(false);
const selectedProduct = ref(null);
const searchQuery = ref('');

export function useCart() {
  const addToCart = (product, quantity = 1) => {
    const existingIndex = cartItems.value.findIndex(item => item.product.id === product.id);
    if (existingIndex > -1) {
      cartItems.value[existingIndex].quantity += quantity;
    } else {
      cartItems.value.push({
        product,
        quantity,
      });
    }

    Notify.create({
      message: `¡${product.name} añadido a tu pedido!`,
      color: 'amber-9',
      textColor: 'black',
      icon: 'shopping_bag',
      position: 'top-right',
      timeout: 2200,
      actions: [
        { label: 'Ver Carrito', color: 'black', handler: () => { isCartOpen.value = true; } }
      ]
    });
  };

  const removeFromCart = (productId) => {
    cartItems.value = cartItems.value.filter(item => item.product.id !== productId);
    Notify.create({
      message: 'Producto eliminado del carrito',
      color: 'grey-9',
      textColor: 'white',
      icon: 'delete_outline',
      position: 'top-right',
      timeout: 1500
    });
  };

  const updateQuantity = (productId, delta) => {
    const item = cartItems.value.find(i => i.product.id === productId);
    if (item) {
      const newQty = item.quantity + delta;
      if (newQty <= 0) {
        removeFromCart(productId);
      } else {
        item.quantity = newQty;
      }
    }
  };

  const clearCart = () => {
    cartItems.value = [];
  };

  const toggleFavorite = (productId, productName = 'Producto') => {
    if (favorites.value.has(productId)) {
      favorites.value.delete(productId);
      Notify.create({
        message: `Quitaste "${productName}" de favoritos`,
        color: 'grey-8',
        icon: 'favorite_border',
        position: 'top-right',
        timeout: 1200
      });
    } else {
      favorites.value.add(productId);
      Notify.create({
        message: `¡"${productName}" guardado en tus favoritos! ❤️`,
        color: 'red-7',
        icon: 'favorite',
        position: 'top-right',
        timeout: 1500
      });
    }
  };

  const isFavorite = (productId) => {
    return favorites.value.has(productId);
  };

  const openProductDetail = (product) => {
    selectedProduct.value = product;
    isDetailOpen.value = true;
  };

  const cartCount = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.quantity, 0);
  });

  const cartTotal = computed(() => {
    return cartItems.value.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  });

  const formatCOP = (val) => {
    if (val === undefined || val === null) return '$0 COP';
    return '$' + Number(val).toLocaleString('es-CO') + ' COP';
  };

  const sendWhatsAppOrder = (customerData) => {
    if (cartItems.value.length === 0) {
      Notify.create({
        message: 'Tu carrito está vacío. Agrega deliciosos platos antes de pedir.',
        color: 'negative',
        icon: 'warning',
        position: 'top'
      });
      return;
    }

    const phone = '573124567890';
    let text = `🍔 *NUEVO PEDIDO BURGERBYTE* 🍔\n`;
    text += `*Cliente:* ${customerData.name || 'Cliente'}\n`;
    text += `*Teléfono:* ${customerData.phone || 'No especificado'}\n`;
    text += `*Dirección:* ${customerData.address || 'Para recoger en local'}\n`;
    if (customerData.notes) text += `*Notas:* ${customerData.notes}\n`;
    text += `------------------------------------\n`;
    text += `*ITEMS DEL PEDIDO:*\n`;

    cartItems.value.forEach((item, idx) => {
      text += `${idx + 1}. ${item.product.name} x${item.quantity} -> ${formatCOP(item.product.price * item.quantity)}\n`;
    });

    text += `------------------------------------\n`;
    text += `*TOTAL A PAGAR:* ${formatCOP(cartTotal.value)}\n`;
    text += `*Método de Pago:* ${customerData.paymentMethod || 'Efectivo / Transferencia'}\n`;
    text += `\n¡Por favor confirmar pedido y tiempo de entrega estimado! 🚀`;

    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${phone}?text=${encoded}`;
    
    // Abrir WhatsApp en nueva pestaña
    window.open(url, '_blank');

    Notify.create({
      message: '¡Pedido transferido a WhatsApp con éxito! Estaremos encantados de atenderte.',
      color: 'positive',
      icon: 'check_circle',
      position: 'top',
      timeout: 4000
    });

    clearCart();
    isCartOpen.value = false;
  };

  return {
    cartItems,
    favorites,
    isCartOpen,
    isDetailOpen,
    selectedProduct,
    searchQuery,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleFavorite,
    isFavorite,
    openProductDetail,
    cartCount,
    cartTotal,
    formatCOP,
    sendWhatsAppOrder
  };
}
