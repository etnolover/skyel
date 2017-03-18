$(document).ready(function() {
    var galContainer = $('.gallery__container');
    galContainer.slick({
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        speed: 300
    });
    $(".slick-prev").text("←");
    $(".slick-next").text("→");
});
