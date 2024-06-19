export default function ToggleEditProduct() {
  const blockProduct = $(".block-product");

  if (blockProduct && blockProduct.length > 0) {
    blockProduct.each(function () {
      let $this = $(this),
        btnEdit = $this.find(".block-product-edit-btn"),
        blockEdit = $this.find(".block-product-edit"),
        btnRemove = $this.find(".product-button .remove");

      btnEdit.on("click", function () {
        blockEdit.slideToggle(400);
      });
      btnRemove.on("click", function () {
        $(this).closest(".product-item").remove();
      });

      let btnHistory = $this.find(".toggle-product-hist"),
        closeHist = $this.find(".hist-close"),
        blockHistory = $this.find(".block-product-hist");
      btnHistory.on("click", function () {
        blockHistory.slideDown(400);
      });
      closeHist.on("click", function () {
        blockHistory.slideUp(400);
      });
    });
  }
}
