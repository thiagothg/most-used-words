import { createApp } from "vue";
import { loadFonts } from "./plugins/webfontloader";

// Vuetify
import vuetify from "./plugins/vuetify";

import App from "./App.vue";

loadFonts();

createApp(App).use(vuetify).mount("#app");
