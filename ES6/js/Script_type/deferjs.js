console.log("01. defer js exec start");

window.addEventListener("DOMContentLoaded", () => {
  console.log("02. defer DOMContentLoaded");
});

window.addEventListener("load", () => {
  console.log("03. defer window load");
});
