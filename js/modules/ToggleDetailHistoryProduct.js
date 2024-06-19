export default function ToggleDetailHistoryProduct() {
  const blockHistDetail = $(".block-hist-product");

  if (blockHistDetail) {
    blockHistDetail.each(function () {
      let $this = $(this),
        btnToggle = $this.find(".toggle-hist-product"),
        contentWrap = $this.find(".ct-hist-product");
      btnToggle.on("click", function () {
        contentWrap.slideToggle(500);
        $this.toggleClass("is-expand");
        $(this).toggleClass("active");
      });
    });
  }
}
