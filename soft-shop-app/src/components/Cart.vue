<template>
  <v-scroll-x-transition leave-absolute>
  <v-container id="my-cart" translate="">
    <CartContent>
      <template v-slot:cartActions>
        <v-card-actions>
        <v-btn text color="green" @click="$emit('showCheckout')" to="/checkout">
          <v-icon>mdi-cart-arrow-right</v-icon> Caisse de sortie
        </v-btn>
        <v-btn text color="red" @click="$emit('showCart', false)">
          <v-icon>mdi-close</v-icon> Fermer
        </v-btn>
        </v-card-actions>
      </template>
    </CartContent>
  </v-container>
  </v-scroll-x-transition>
</template>

<script>
import CartContent from "./CartContent.vue";

export default {
  name: 'Cart',
  props: [],
  components: {
    CartContent,
  },
  data() {
    return {

    }
  },
}
</script>


<style scoped>
#my-cart {
  position: fixed;
  right: 0px;
  max-width: 400px;
  z-index: 50;
}

.cart-product-quantity {
  max-width: 100px;
  display: inline-block;
  margin: 0px;
  padding: 0px;
}

#app-cart-contents-container {
  max-height: 400px;
  overflow: auto;
}
</style>
