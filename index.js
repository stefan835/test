let currentPage = 0;
const tiles = $('.slider--tile');
const amountOfTiles = tiles.length;
const tilesOnSlide = 4;
const amountOfSlides = Math.ceil(amountOfTiles / tilesOnSlide);

const pageDisplay = currentPage => tiles.map((index, tile) => {
  $(tile).addClass('slider--tile-hidden');
  index > currentPage * tilesOnSlide - 1 && index < currentPage * tilesOnSlide + tilesOnSlide ? $(tile).removeClass('slider--tile-hidden') : null
});

pageDisplay(currentPage);

const rotateSlider = delta => {
  currentPage < amountOfSlides && (currentPage >= 0) ? currentPage += delta : null;
  pageDisplay(currentPage);
  highlightPage()
};

$('.slider--arrow__right').on("click", () => {
  rotateSlider(1);
  $('.slider--arrow__left').show();
  currentPage === (amountOfTiles / 4) - 1 ? $('.slider--arrow__right').hide() : null
});

$('.slider--arrow__left').on("click", () => {
  rotateSlider(-1);
  $('.slider--arrow__right').show();
  currentPage === 0 ? $('.slider--arrow__left').hide() : null
});


for (let i = 0; i < amountOfSlides; i += 1) {
  $('.slider--buttons').append($('<div>').addClass('slider--button').attr('data-index', i + 1))
}

const highlightPage = () => {
  $('.slider--button').map((index, button) => {
    console.log(button);
    console.log($(button));
    index === currentPage ? $(button).addClass('slider--button__active') : $(button).removeClass('slider--button__active')
  })
};
highlightPage();
