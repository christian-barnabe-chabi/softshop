<template>
  <v-container justify="center" id="app-checkout">
    <v-row>
      <v-col cols="4">
        <CartConent />
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>
            <span class="text-h5">Checkout</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    solo
                    label="Prénom*"
                    required
                    hint="Votre prénom"
                    v-model="checkoutData.firstname"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    solo
                    label="Nom*"
                    required
                    hint="Votre nom"
                    v-model="checkoutData.lastname"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    solo
                    name="input-7-4"
                    label="Adresse de livraison*"
                    hint="Adresse de livraison"
                    v-model="checkoutData.deliveryAddress"
                  ></v-textarea>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    solo
                    label="Téléphone*"
                    type="tel"
                    hint="Votre numéro de téléphone"
                    v-model="checkoutData.phone"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-select
                    solo
                    :items="['Oui', 'Non']"
                    label="Livraison à domicile*"
                    required
                    value="Oui"
                    hint="Désirerez-vous être livré à domicile"
                    v-model="checkoutData.homeDelivery"
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red" text @click="cancelCheckout">
              Cancel
            </v-btn>
            <v-btn color="blue darken-1" text @click="continueCheckout">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CartConent from "../components/CartContent.vue";
export default {
  components: {CartConent},
  name: "Checkout",
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
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
#app-checkout {
  z-index: 80;
}
</style>
