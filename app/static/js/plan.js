import "./common.js";
import { createApp } from "vue";
import { Plan } from "duckdb-explain-visualizer";
import { ref } from "vue";

import "duckdb-explain-visualizer/dist/style.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add all icons to the library
library.add(faLink);
const app = createApp({
  setup() {
    const plan = ref(planData);
    return { plan };
  },
  components: {
    "duckdb-explain-visualizer": Plan,
  },
});
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
