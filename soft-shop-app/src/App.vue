<template>
  <v-app>
    <Header @showCart="setCartVisibility" :cartVisible="cartVisible" @notification="showNotification" />
    <v-main>
      <Cart v-if="cartVisible" @showCart="setCartVisibility" @showCheckout="showCheckout"/>
      <Notification v-if="notificationVisible" 
        :notification="notification" 
        @hideNotification="hideNotification"
      />
      <!-- <HelloWorld /> -->
      <v-slide-x-transition leave-absolute>
      <router-view :cartData="cartData"
        @hideCheckout="hideCheckout"
        @notification="showNotification"></router-view>
      </v-slide-x-transition>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import Header from "./components/Header.vue";
import Notification from "./components/Notification.vue";
import Cart from "./components/Cart.vue";

export default {
  name: "App",

  components: {
    // HelloWorld,
    Header,
    Notification,
    Cart,
  },

  data: () => ({
    cartVisible: false,
    notification: null,
    notificationVisible: false,
    cartData: [],
    checkoutVisible: false,
  }),

  methods: {
    setCartVisibility: function(cartVisible) {
      this.cartVisible = cartVisible;
    },

    showNotification: function(notification) {
      this.notificationVisible = true;
      this.notification = notification;
      setTimeout(()=>{
        this.notificationVisible = false;
      }, 5000);
    },

    hideNotification: function() {
      this.notification = null;
      this.notificationVisible = false;
    },

    showCheckout: function() {
      this.cartVisible = false;
      // this.checkoutVisible = true;
    },

    hideCheckout: function() {
      this.checkoutVisible = false;
    }
  }
};
</script>
