import Aos from "aos";
function app() {
  Aos.init({
    once: "true",
  });
}
document.addEventListener("DOMContentLoaded", app);
