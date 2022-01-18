import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import store from "./store";

import router from "./router";
import JwPagination from "jw-vue-pagination";

const app = createApp(App);

app.component("jw-pagination", JwPagination);

app.use(store);
app.use(router).mount("#app");
