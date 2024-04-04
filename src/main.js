import { createApp } from "vue";

import App from "@/App.vue";
import router from "@/router";

import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "@/assets/icons/themify-icons/themify-icons.css";
import "@/assets/scss/app.scss";

createApp(App).use(router).mount("#app");
