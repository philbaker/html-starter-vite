import "./style.css";
import { setupCounter } from "./counter.js";
import { countButtons } from "./ui/count-buttons.js";
import { button } from "./ui/button.js";
import Alpine from "alpinejs";

window.Alpine = Alpine;
Alpine.start();

document.querySelector("#app").innerHTML = countButtons;

if (document.querySelector("#counter")) {
  setupCounter(document.querySelector("#counter"));
}
