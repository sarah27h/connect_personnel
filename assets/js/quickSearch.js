const headerSearch = document.querySelector(".js-header-search");
const navSearch = document.querySelector(".js-nav-search");
const quickSearch = document.querySelector(".quick-search__form");
const headerToggler = document.querySelector(".js-header__toggler");

const toggleQuickSearch = () => {
  quickSearch.classList.toggle("collapse");
  quickSearch.classList.toggle("show");
  quickSearch.classList.toggle("fade");
};

headerSearch.addEventListener("click", toggleQuickSearch);
navSearch.addEventListener("click", toggleQuickSearch);

headerToggler.addEventListener("click", () => {
  quickSearch.classList.add("collapse");
  quickSearch.classList.remove("show");
});
