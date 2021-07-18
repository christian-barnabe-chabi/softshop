<template>
  <v-card elevation="2">
    <v-app-bar dark color="green">

      <v-toolbar-title>Mon Panier <v-icon >mdi-basket</v-icon></v-toolbar-title>

      <v-spacer></v-spacer>

      <slot name="cartHeaderIcons"></slot>

      <v-chip color="white" text-color="black">
        <span class="text-h6 font-weight-light">XOF 3,000</span>
      </v-chip>
    </v-app-bar>

    <v-card-title>
      <span class="text-h6 font-weight-light">Produits dans votre panier</span>
    </v-card-title>

    <v-divider></v-divider>

    <div id="app-cart-contents-container">
      <v-list-item two-line v-for="i in [1, 2, 4, 7, 0, 40, 5, 3, 10]" :key="i">
        <v-list-item-icon>
        <v-icon large>mdi-food-steak</v-icon>

        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Food steak, big pro</v-list-item-title>
          <v-list-item-subtitle>
            <span class="font-weight-light">XOF 1,000</span>
            <span class="font-weight-light" style="margin: 0px 4px"> x </span>
            <v-text-field
              flat
              solo
              dense
              type="number"
              value="1"
              min="1"
              max="50"
              class="cart-product-quantity font-weight-light"
            ></v-text-field>
          </v-list-item-subtitle>
          <v-divider></v-divider>
        </v-list-item-content>

        <v-btn icon elevation="1" color="red" small>
          <v-icon small>mdi-close</v-icon>
        </v-btn>
      </v-list-item>
    </div>

    <v-divider></v-divider>

    <slot name="cartActions"></slot>
  </v-card>
</template>

<script>
export default {
  name: "Cart",
  props: [],
  data() {
    return {};
  },
};
</script>

<style scoped>
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
