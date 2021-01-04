export const addingImg = (src, alt, className) => {
  const mq = window.matchMedia("(min-width: 990px)");

  if (mq.matches) {
    const imgWrap = document.querySelector(".refer-img");

    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.className = className;

    imgWrap.appendChild(img);
  }
};
