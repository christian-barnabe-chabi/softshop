<template>
  <v-container id="app-notification">
    <v-alert
      id="alert"
      v-model="alertState"
      dismissible
      :color="notification.color || 'cyan'"
      :type="notification.type || 'info'"
      border="top"
      elevation="2"
      colored-border
    >
      {{ notification.message || 'You have a new notification'  }}
    </v-alert>
  </v-container>
</template>

<style scoped>
#app-notification {
  position: fixed;
  z-index: 40;
  right: 0px;
  min-width: 100%;
  max-width: 100%;
}

#app-notification #alert {
  margin: auto;
  max-width: 600px;
}
</style>

<script>
export default {
  name: "Notification",
  props: ['notification'],
  data: function() {
    return {
      alertState: true,
    }
  },
  watch: {
    alertState() {
      this.$emit('hideNotification');
    }
  },
}
</script>
