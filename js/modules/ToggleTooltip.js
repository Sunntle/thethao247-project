export default function ToggleTooltip() {
  const tooltip = $(".tooltip");

  if (tooltip) {
    tooltip.each(function () {
      let btn = $(this).find(".tooltip-btn");
      let popup = $(this).find(".tooltip-popup");

      btn.on("click", function () {
        popup.toggleClass("active");
      });
    });

    document.addEventListener("click", (e) => {
      if (!e.target.matches(".tooltip, .tooltip *")) {
        $(".tooltip-popup").removeClass("active");
      }
    });
  }
}
