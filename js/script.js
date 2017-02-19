$(document).ready(function() {
    var galContainer = $('.gallery__container');
    var slickLightbox = $('.slick-lightbox');
    galContainer.slick({
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        speed: 300
    });
    $(".slick-prev").text("←");
    $(".slick-next").text("→");

    // galContainer.slickLightbox({
    //     src: 'src',
    //     itemSelector: '.gallery-item img'
    // });
});

$('.gallery__container a').on('click', function(e) {
    e.preventDefault();
    $this = $(this);
    var image = $this.find('.gallery-item__image');
});