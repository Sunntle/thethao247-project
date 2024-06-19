export default function ToggleMega() {
  const toggleMega = $(".toggle-menu");
  const showMega = $(".mega-show");

  if (showMega && showMega.length > 0) {
    showMega.on("click", function (e) {
      e.preventDefault();
      $(".mega-drop").slideToggle(500);
      $("body").addClass("menu-is-show");
    });
  }

  $(document).mouseup(function (e) {
    if (
      !showMega.is(e.target) &&
      showMega.has(e.target).length === 0 &&
      !toggleMega.is(e.target) &&
      toggleMega.has(e.target).length === 0 &&
      !$(".mega-container").is(e.target) &&
      $(".mega-container").has(e.target).length === 0
    ) {
      $(".mega-drop").slideUp(500);
      $("body").removeClass("menu-is-show");
    }
  });

  if (toggleMega && toggleMega.length > 0) {
    toggleMega.on("click", function (e) {
      e.preventDefault();
      $(".mega-drop").slideToggle(500);
      $("body").addClass("menu-is-show");
    });
  }
}
