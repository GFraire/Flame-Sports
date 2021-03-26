let imagesSlider = [
  { url: "url(../../Images/Background.JPG)" },
  { url: "url(../../Images/test.jpg)" },
  { url: "url(../../Images/test2.jpg)" },
]
let bodyBg = $("body").css("background-image")
let i = 1

setInterval(() => {
  $("body").css( {"background-image": imagesSlider[i].url, 'transition': 'background 200ms linear'})

  if(i == imagesSlider.length - 1) {
    i = 0
  } else {
    i++
  }
}, 5000)
