export default function CollapseProductTable() {
  const collapsePro = $(".collapse-product");

  if (collapsePro) {
    collapsePro.each(function () {
      let $this = $(this),
        btn = $this.find(".collapse-product-btn"),
        content = $this.find(".collapse-product-content");
      btn.on("click", function () {
        content.slideToggle(500);
        btn.toggleClass("is-coll");
      });
    });
  }
}
