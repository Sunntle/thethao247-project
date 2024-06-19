export default function ScrollModule() {
  // let $window = $(window);
  // function animate(el, className) {
  //   $(el).each(function () {
  //     let el = this;
  //     if (
  //       $(el).offset().top <
  //       $window.scrollTop() + ($window.height() / 10) * 8
  //     ) {
  //       $(el).addClass(className);
  //     }
  //   });
  // }

  // function bindImageAnimations() {
  //   animate(".js-scroll", "is-view");
  //   $window.on("scroll", function () {
  //     animate(".js-scroll", "is-view");
  //   });
  // }

  // bindImageAnimations();

  // const itemScroll = document.querySelectorAll(".js-scroll");

  gsap.registerPlugin(ScrollTrigger);

  let itemScroll = gsap.utils.toArray(".js-scroll");

  function scrollAddClass(item, className) {
    item.forEach((item) => {
      ScrollTrigger.create({
        trigger: item,
        start: "-500px center",
        onEnter: () => item.classList.add(className),
      });
    });
  }

  scrollAddClass(itemScroll, "is-view");

  // parallax
  let prl = $(".prl-scroll img");
  if (prl.length > 0) {
    prl.each(function () {
      let $this = $(this);
      let n = $this.outerHeight() - $this.parent().outerHeight();
      gsap.fromTo(
        $this,
        { y: -n * 1.2 },
        {
          scrollTrigger: {
            trigger: $this.parent(),
            scrub: !0,
          },
          y: 0,
          ease: "none",
        }
      );
    });
  }
}
