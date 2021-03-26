const menuMobile = $(".menu-interface-div")

$(".menu-interface").click(e => {
  $("nav").show(500).css("display", "inline")
})

$(".close").click(e => {
  $("nav").hide(1000).css("display", "none")
})

$("footer").fadeOut()

$(".open-footer").click(e => {
  if($(".open-footer").hasClass("open")) {
    $("footer").fadeOut(500)
    $(".open-footer").removeClass("open")
    $(".open-footer > span").css({"transform": "rotate(270deg", "transition": "1s"})
  } else {
    $("footer").fadeIn(500)
    $(".open-footer").addClass("open")
    $(".open-footer > span").css({"transform": "rotate(90deg", "transition": "1s"})
  }
})