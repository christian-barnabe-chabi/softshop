<template>
  <v-app-bar app color="white" elevate-on-scroll>
    <v-toolbar-title>
      <div class="d-flex align-center">
        <h1 class="font-weight-light"> <router-link to="/" style="text-decoration: none">Soft Shop</router-link></h1>
      </div>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn text color="blue" to="/shop" @click="$emit('showCart', false)"><v-icon>mdi-store</v-icon> Boutique</v-btn>
    <v-btn text color="orange" to="/" @click="$emit('showCart', false)"><v-icon>mdi-test-tube</v-icon> Découverte</v-btn>
    <v-btn text color="green" to="/checkout" @click="$emit('showCart', false)"><v-icon>mdi-cart-arrow-right</v-icon> Caisse de sortie</v-btn>

    <v-spacer></v-spacer>

    <v-btn icon elevation="1" @click="toggleCart">
      <v-badge color="red" value="3" content="3" bordered>
        <v-icon>mdi-cart</v-icon>
      </v-badge>
    </v-btn>

    <v-btn icon>
      <!-- <v-icon>mdi-dots-vertical</v-icon> -->
    </v-btn>

    <!-- <v-btn color="primary">
      <span class="mr-2">Sign in</span>
    </v-btn> -->
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  props: ['cartVisible'],
  data() {
    return {
    }
  },
  computed: {
    
  },
  methods: {
    toggleCart: function() {
      this.$emit('showCart', !this.cartVisible);
    }
  }
}
</script>
