<template>
  <v-container justify="center" id="app-checkout">
    <v-row>
      <v-col cols="4">
        <v-card>
          <v-card-title
            ><span class="text-h6 font-weight-light">Filter</span></v-card-title
          >
          <v-divider></v-divider>

          <v-container>
            <span class="font-weight-light">Price range</span>
            <v-slider
              min="2000"
              max="30000"
              step="500"
              thumb-label=true
            ></v-slider>
          </v-container>

          <v-container>
            <span class="font-weight-light">Product type</span>
            <v-checkbox label="Drinks only"></v-checkbox>
            <v-checkbox label="Meats only"></v-checkbox>
          </v-container>
        </v-card>
      </v-col>
      <v-col>
        <v-row>
          <v-col v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]" :key="i">
            <Product />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Product from "../components/Product.vue";
export default {
  components: { Product },
  name: "Shop",
  props: ["cartData"],
  data() {
    return {
      dialogState: true,
      checkoutData: {},
    };
  },
  watch: {
    dialogState: function() {
      this.$emit("hideCheckout");
    },
  },
  methods: {
    cancelCheckout: function() {
      this.dialogState = false;
      this.$emit("notification", {
        type: "info",
        color: "blue",
        message: "Checkout canceled",
      });
    },
    continueCheckout: function() {
      console.log(this.checkoutData);
      this.$emit("notification", {
        type: "success",
        color: "green",
        message: "Order saved!",
      });
      this.$emit("hideCheckout");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
#app-checkout {
  z-index: 80;
}
</style>
