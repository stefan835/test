let currentPage = 0;
const $tiles = $('.slider--tile');
const amountOfTiles = $tiles.length;
const tilesOnSlide = 4;
const amountOfSlides = Math.ceil(amountOfTiles / tilesOnSlide);

//SLIDER
const pageDisplay = currentPage => $tiles.map((index, tile) => {
  $(tile).addClass('slider--tile-hidden');
  index > currentPage * tilesOnSlide - 1 && index < currentPage * tilesOnSlide + tilesOnSlide ? $(tile).removeClass('slider--tile-hidden') : null
});
pageDisplay(currentPage);
//SLIDER BUTTONS
for (let i = 0; i < amountOfSlides; i += 1) {
  $('.slider--buttons').append($('<div>').addClass('slider--button').attr('data-index', i + 1))
}
const highlightCurrentPage = () => {
  $('.slider--button').map((index, button) => {
    parseInt($(button).attr('data-index')) - 1 === currentPage ? $(button).addClass('slider--button__active') : $(button).removeClass('slider--button__active')
  })
};

$('.slider--button').click((event) => {
  $('.slider--tiles').fadeOut().fadeIn()
  setTimeout(() => {
    const newPage = parseInt($(event.target).attr('data-index'));
    currentPage = newPage - 1;
    pageDisplay(currentPage);
    highlightCurrentPage();
  }, 400)

});

highlightCurrentPage();