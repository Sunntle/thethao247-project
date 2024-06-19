export default function TabModule() {
  const tabBlock = $(".tab-block");

  if (tabBlock) {
    tabBlock.each(function () {
      let $this = $(this);
      let panel = $this.find(".tab-panel");
      let content = $this.find(".tab-content");

      panel.on("click", function () {
        panel.removeClass("active");
        $(this).addClass("active");
        content.removeClass("active");
        content.eq($(this).index()).addClass("active");
      });
    });
  }
}
