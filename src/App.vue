<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title>Most used words</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!-- $vuetify.application.top: -->
      <Home />
      <v-container fluid> </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
      footer
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Home from "./components/HomePage.vue";

export default {
  name: "App",

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
