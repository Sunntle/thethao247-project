export default function SetDefaultModule() {
  const setDf = $(".set-default");

  if (setDf) {
    setDf.each(function () {
      let $this = $(this),
        btnSetDf = $this.find(".set-default-btn");

      btnSetDf.on("click", function () {
        setDf.removeClass("is-default");
        $this.addClass("is-default");
      });
    });
  }
}
