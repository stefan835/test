let currentPage = 0;
const tiles = $('.slider--tile')
const amountOfTiles = tiles.length

const pageDisplay = currentPage => tiles.map((index, tile) => {
  $(tile).addClass('slider--tile-hidden')
  index > currentPage * 4 - 1 && index < currentPage * 4 + 4 ? $(tile).removeClass('slider--tile-hidden') : null
})

pageDisplay(currentPage)

const rotateSlider = delta => {
  (currentPage < (amountOfTiles / 4) - 1) ? currentPage += delta : null
  pageDisplay(currentPage)
}

$('.contact--button').on("click", () => {
  rotateSlider(1)
})



