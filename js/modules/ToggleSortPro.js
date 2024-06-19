export default function ToggleSortPro() {
  const btnToggleSort = $(".sort-product-select");
  const closeSortPro = $(".sort-product-drop .drop-close");

  if (btnToggleSort) {
    btnToggleSort.on("click", function () {
      $(".sort-product-drop").toggleClass("active");
    });
  }
  if (closeSortPro) {
    closeSortPro.on("click", function () {
      $(".sort-product-drop").removeClass("active");
    });
  }

  document.addEventListener("click", (e) => {
    if (
      !e.target.matches(".sort-product-select, .sort-product-select *") &&
      !e.target.matches(".sort-product-drop, .sort-product-drop *")
    ) {
      $(".sort-product-drop").removeClass("active");
    }
  });
}
