// Кнопка наверх
$("#up").click(() => {
  $("html, body").animate({ scrollTop: 0}, 0);
});

// Меню
$(".menu").hide();
$("*").on("click", (e) => {
  if ($(e.target).is(".menu, .menu ul, .menu svg, .menu svg path, .nav__container")) {
    return false;
  }

  $(".menu").hide();
})
const menu = () => {
  $(".menu").toggle();
}