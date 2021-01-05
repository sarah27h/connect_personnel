const headerSearch = document.querySelector(".js-header-search");
const navSearch = document.querySelector(".js-nav-search");
const quickSearch = document.querySelector(".quick-search__form");
const headerToggler = document.querySelector(".js-header__toggler");
const headerDropdown = document.querySelector(".js-header-dropdown");
const headerNavbarCollapse = document.querySelector(".header__navbar-collapse");

import { toggleNavMobileBtn } from "./navToggle.js";

const toggleQuickSearch = () => {
  quickSearch.classList.toggle("collapse");
  quickSearch.classList.toggle("show");
  quickSearch.classList.toggle("fade");

  // to close mobile nav menu and toggle nav menu btn after clicking on search in dropdown item (browser jobs)
  headerNavbarCollapse.classList.remove("show");
  toggleNavMobileBtn();
};

headerSearch.addEventListener("click", toggleQuickSearch);
navSearch.addEventListener("click", toggleQuickSearch);
headerDropdown.addEventListener("click", toggleQuickSearch);

headerToggler.addEventListener("click", () => {
  quickSearch.classList.add("collapse");
  quickSearch.classList.remove("show");
});
