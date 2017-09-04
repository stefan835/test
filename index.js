let currentPage = 1;
const tiles = $('.slider--tile')
const amountOfTiles = tiles.length

const pageDisplay = currentPage => tiles.map((index, tile) => {
  $(tile).removeClass('slider--tile-hidden')
  index > (currentPage * 4) - 1 ? $(tile).addClass('slider--tile-hidden') : null
})

pageDisplay(currentPage)

$('.contact--button').click(function () {
  if (currentPage < (amountOfTiles / 4)) {
    currentPage += 1;
    pageDisplay(currentPage)
  }
})