<template>
  <div>
    <HomeCarousel />
    <v-container justify="center" id="app-checkout">
      <v-row>
        <v-col v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="i">
          <Product />
        </v-col>
      </v-row>

      <v-container class="text-center my-12">
        <v-btn text color="blue" to="/shop">Voir plus</v-btn>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import Product from "../components/Product.vue";
import HomeCarousel from "../components/HomeCarousel.vue";
export default {
  components: { Product, HomeCarousel },
  name: "Home",
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
