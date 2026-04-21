document.addEventListener("DOMContentLoaded", function () {
  var burger = document.getElementById("burger-btn");
  var nav = document.getElementById("main-nav");
  if (!burger || !nav) return;

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  }

  setOpen(false);

  burger.addEventListener("click", function () {
    setOpen(!nav.classList.contains("is-open"));
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      setOpen(false);
    }
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.matchMedia("(max-width: 991px)").matches) {
        setOpen(false);
      }
    });
  });

  window.addEventListener("resize", function () {
    if (!window.matchMedia("(max-width: 991px)").matches) {
      setOpen(false);
    }
  });
});
