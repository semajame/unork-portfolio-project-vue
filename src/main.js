import { createApp } from "vue";
import App from "./App.vue";
import reset from "./styles/reset.css";
import style from "./styles/style.css";
import mobile from "./styles/mobile.css";
import router from "./router";

createApp(App).use(router).mount("#app");
