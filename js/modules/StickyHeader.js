export default function StickyHeader() {
  const header = $(".header");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      header.addClass("is-sticky");
    } else {
      header.removeClass("is-sticky");
    }
  });
}
