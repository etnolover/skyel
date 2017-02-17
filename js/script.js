$(document).ready(function() {
    $('.mainpage__gallery_container').slick({
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        speed: 300
    });
    $(".slick-prev").text("←");
    $(".slick-next").text("→");
});