export default function GalleryModule() {
  $(".gallery-js").each(function () {
    const $this = $(this);
    const $item = $this.find(".gItem");
    $(function () {
      $this.lightGallery({
        speed: 600,
        selector: $item,
      });
    });
  });
}
