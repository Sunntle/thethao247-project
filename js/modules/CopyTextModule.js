export default function CopyTextModule() {
  const copyBlock = $(".copy-block");

  if (copyBlock) {
    copyBlock.each(function () {
      let $this = $(this);
      let btnCopy = $this.find(".copy-btn");
      let textCopy = $this.find(".copy-text");

      btnCopy.on("click", function () {
        $(this).addClass("active");
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(textCopy.val()).select();
        document.execCommand("copy");
        $temp.remove();
        setTimeout(() => {
          $(this).removeClass("active");
        }, 1500);
      });
    });
  }
}
