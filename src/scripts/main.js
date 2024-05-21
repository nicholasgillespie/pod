// import linkToButton from "./link-to-button.js";
import emailChecker from "./email-checker.js";

const app = {
  initialize() {
    // linkToButton.activate();
    emailChecker.activate();
  },
};

document.addEventListener("DOMContentLoaded", app.initialize);
