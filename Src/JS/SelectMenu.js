let selectMenu = Array.from(document.getElementsByClassName("select-menu"))
let height = (innerHeight * 25) / 100
let header = document.querySelector("header")
let elemsMenu = document.getElementsByClassName("menu")
let inicio = document.getElementsByClassName("menu-home")
let aboutUs = document.getElementsByClassName("menu-about-us")
let patron = document.getElementsByClassName("menu-patron")
let team = document.getElementsByClassName("menu-team")

document.addEventListener("scroll", e => {
  let elemsSelect = []
  var positionY = window.pageYOffset
  let tamArr = 0

  selectMenu.forEach((elem, i) => {
    let posElem = elem.getBoundingClientRect().top
    if(posElem < height) {
      elemsSelect.push(elem)
    }
  })

  tamArr = elemsSelect.length
  let elemSelected = elemsSelect[tamArr - 1].id

  header.style.visibility = positionY == 0 ? "hidden" : "visible"

  for(let i = 0; i < elemsMenu.length; i++) {
    if(elemsMenu[i].classList.contains("selected") && elemSelected != elemsMenu[i].id) {
      elemsMenu[i].classList.remove("selected")
    }
  }

  if(elemSelected == "select-menu-home") {
    inicio[0].classList.add("selected")
  } else if(elemSelected == "select-menu-about-us") {
    aboutUs[0].classList.add("selected")
  } else if(elemSelected == "select-menu-patron") {
    patron[0].classList.add("selected")
  } else if(elemSelected == "select-menu-team") {
    team[0].classList.add("selected")
  }
})