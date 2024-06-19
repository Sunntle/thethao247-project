export default function PopupModule() {
  const btnPopup = $(".btn-popup");
  const closePopup = $(".popup-close");

  if (btnPopup) {
    btnPopup.on("click", function (e) {
      e.preventDefault();
      $(`.popup#${$(this).data("popup")}`).addClass("is-show");
      $("body").addClass("popup-is-show");
    });
  }

  function hideModal() {
    $(".popup").removeClass("is-show");
    $("body").removeClass("popup-is-show");
  }
  // $(document).mouseup(function (e) {
  //   if (
  //     !btnPopup.is(e.target) &&
  //     btnPopup.has(e.target).length === 0 &&
  //     !$(".popup-content").is(e.target) &&
  //     $(".popup-content").has(e.target).length === 0 &&
  //     !$(".popup-qr-show").is(e.target) &&
  //     $(".popup-qr-show").has(e.target).length === 0 &&
  //     !$(".select2-container").is(e.target) &&
  //     $(".select2-container").has(e.target).length === 0
  //   ) {
  //     hideModal();
  //   }
  // });
  function clickOutSide() {}
  document.addEventListener("click", (e) => {
    if (
      !e.target.matches(".popup-content, .popup-content *") &&
      !e.target.matches(".btn-popup, .btn-popup *") &&
      !e.target.matches(".popup-qr-show, .popup-qr-show *") &&
      !e.target.matches(".select2-container, .select2-container *") &&
      !e.target.matches(".lg-outer, .lg-outer *")
    ) {
      $(".popup").removeClass("is-show");
      $("body").removeClass("popup-is-show");
    }
  });
  if (closePopup) {
    closePopup.on("click", function () {
      hideModal();
    });
  }

  const btnPopupQr = $(".btn-popup-qr");

  if (btnPopupQr) {
    btnPopupQr.on("click", function (e) {
      e.preventDefault();
      $(`.popup#${$(this).data("popup")}`).addClass("is-show");
      $(`.popup#${$(this).data("popup")}`).addClass("popup-qr-show");
    });
  }

  function hideModal() {
    $(".popup").removeClass("is-show");
    $("body").removeClass("popup-is-show");
  }
  // $(document).mouseup(function (e) {
  //   if (
  //     !btnPopupQr.is(e.target) &&
  //     btnPopupQr.has(e.target).length === 0 &&
  //     !$(".popup-content").is(e.target) &&
  //     $(".popup-content").has(e.target).length === 0
  //   ) {
  //     $(".popup-qr-show").removeClass("is-show");
  //     $(".popup-qr-show").removeClass("popup-qr-show");
  //   }
  // });
  document.addEventListener("click", (e) => {
    if (
      !e.target.matches(".btn-popup-qr, .btn-popup-qr *") &&
      !e.target.matches(
        ".popup-qr-show .popup-content, .popup-qr-show .popup-content *"
      ) &&
      !e.target.matches(".select2-container, .select2-container *")
    ) {
      $(".popup-qr-show").removeClass("is-show");
      $(".popup-qr-show").removeClass("popup-qr-show");
    }
  });
}
