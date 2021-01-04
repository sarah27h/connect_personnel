$("#recipeCarousel").carousel({
  interval: 10000,
});

$(".carousel .carousel-item").each(function () {
  const minPerSlide = 3;
  let next = $(this).next();
  console.log(next);

  if (!next.length) {
    console.log(next);
    next = $(this).siblings(":first");
    console.log(next);
  }
  next.children(":first-child").clone().appendTo($(this));
  // console.log(next.children(":first-child"));
  for (let i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});
