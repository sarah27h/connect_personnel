const headerToggle = document.querySelector(".header__toggler");
const openToggle = document.querySelector(".navbar-toggler-icon");
const closeToggle = document.querySelector(".navbar-close-icon");
const headerNavbarCollapse = document.querySelector(".header__navbar-collapse");

const toggleNavMobileMenu = () => {
  setTimeout(function () {
    if (headerNavbarCollapse.classList.contains("show")) {
      openToggle.classList.add("d-none");
      closeToggle.classList.remove("d-none");
    } else {
      closeToggle.classList.add("d-none");
      openToggle.classList.remove("d-none");
    }
  }, 400);
};

headerToggle.addEventListener("click", toggleNavMobileMenu);
