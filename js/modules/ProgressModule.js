export default function ProgressModule() {
  const progressBlock = document.querySelectorAll(".progress-block");

  if (progressBlock) {
    progressBlock.forEach((item) => {
      const dots = item.querySelectorAll(".progress-dot");
      const progress = item.querySelector(".progress-line");
      dots.forEach((item) => {
        if (item.offsetLeft <= progress.offsetWidth) {
          $(item).addClass("active");
        }
      });
    });
  }
}
