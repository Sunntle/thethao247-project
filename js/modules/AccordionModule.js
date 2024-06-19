
export default function AccordionModule() {
  const acc = $(".accordion");
  const accTitle = $(".accordion-expand");

  if (acc) {
    acc.each(function () {
      if ($(this).hasClass("active")) {
        $(this).find(".accordion-content").css("display", "block");
      }
    });

    accTitle.on("click", function () {
      // accTitle.parent().removeClass("active");
      // accTitle.parent().next().slideUp(500);
      $(this).parent().toggleClass("active");
      $(this).parent().next().slideToggle(500);
      if ($(this).parent().next().css("display") == "none") {
      }
    });
  }
}
