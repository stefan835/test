//SLIDER
let currentPage = 0;
const tiles = $('.slider--tile');
const amountOfTiles = tiles.length;

const pageDisplay = currentPage => tiles.map((index, tile) => {
  $(tile).addClass('slider--tile-hidden');
  index > currentPage * 4 - 1 && index < currentPage * 4 + 4 ? $(tile).removeClass('slider--tile-hidden') : null
});

pageDisplay(currentPage);

const rotateSlider = delta => {
  currentPage < amountOfTiles / 4 && (currentPage >= 0) ? currentPage += delta : null;
  pageDisplay(currentPage)
};

$('.arrow--right').on("click", () => {
  rotateSlider(1);
  $('.arrow--left').show();
  currentPage === (amountOfTiles / 4) - 1 ? $('.arrow--right').hide() : null
});

$('.arrow--left').on("click", () => {
  rotateSlider(-1);
  $('.arrow--right').show();
  currentPage === 0 ? $('.arrow--left').hide() : null
});

//LINKS





