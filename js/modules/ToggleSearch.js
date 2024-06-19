export default function ToggleSearch() {
  const btnSearch = $(".show-search");
  const btnCloseSearch = $(".close-search");
  const delValue = $(".del-val-search");
  if (btnSearch) {
    btnSearch.on("click", function (e) {
      e.preventDefault();
      $(".search-screen").addClass("active");
      $("body").addClass("popup-is-show");
    });
  }
  if (delValue) {
    delValue.on("click", function (e) {
      e.preventDefault();
      $(".search-screen-input").val("");
    });
  }
  if (btnCloseSearch) {
    btnCloseSearch.on("click", function () {
      $(".search-screen").removeClass("active");
      $("body").removeClass("popup-is-show");
    });
  }
  $(document).mouseup(function (e) {
    if (
      !$(".search-screen-form").is(e.target) &&
      $(".search-screen-form").has(e.target).length === 0 &&
      !btnSearch.is(e.target) &&
      btnSearch.has(e.target).length === 0
    ) {
      $(".search-screen").removeClass("active");
      $("body").removeClass("popup-is-show");
    }
  });
}
