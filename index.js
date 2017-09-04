$('.slider--tile').map((index, tile) => {
  index > 3 ? $(tile).addClass('slider--tile-hidden') : null
})
