<template>
  <v-card :loading="loading" class="mx-aut" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>


    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text style="position: relative">
      <div class="mb-2 text-subtitle-1">
        <v-chip>
          $ • 2000 FCFA
        </v-chip>
      </div>

      <div>
        Small plates, salads & sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
      </div>

      <v-fab-transition>
        <v-btn
          color="pink"
          fab
          dark
          small
          absolute
          bottom
          right
        >
          <v-icon>mdi-cart-arrow-down</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-container>
        <span>Livraison à domicile disponible</span>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
