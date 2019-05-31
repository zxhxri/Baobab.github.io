// defining variables
var listOfImages = [
    // array for first column
    ['img/issueone/0.png', 'img/issueone/1.jpg', 'img/issueone/2.jpg', 'img/issueone/3.jpg', 'img/issueone/4.jpg', 'img/issueone/5.jpg', 'img/issueone/6.jpg', 'img/issueone/7.jpg', 'img/issueone/8.jpg', 'img/issueone/9.jpg', 'img/issueone/10.jpg', 'img/issueone/0.png'],
    // array for second column
    ['img/issuetwo/0.png', 'img/issuetwo/1.png', 'img/issuetwo/2.png', 'img/issuetwo/3.png', 'img/issuetwo/4.png', 'img/issuetwo/9.png', 'img/issuetwo/7.png', 'img/issuetwo/8.png', 'img/issuetwo/0.png'],
    // array for third column
    ['img/issuethree/0.png', 'img/issuethree/1.png', 'img/issuethree/2.png', 'img/issuethree/3.png', 'img/issuethree/4.png', 'img/issuethree/10.png', 'img/issuethree/7.png', 'img/issuethree/8.png', 'img/issuethree/0.png']
    ];

// this is what happens when the document is loaded
$(function () {
    var columns = $('.column');
    for (i = 0; i < columns.length; i++) {
        console.log(i);
        console.log(columns[i]);
        imageSwiper($(columns[i]), listOfImages[i])
    }
});

// definining functions
function imageSwiper(target, targetlist) {
    //    define width of the column
    var columnWidth = target.width();
    //    divide by amount of images
    var columnIncrements = columnWidth / targetlist.length;
    //    reset counter
    var currentImageNumber = 0;

    //    when mouse moves over element call function
    target.on('mousemove', function (event) {
        //        get coordinates, relative to container
        var internalCoordsX = event.pageX - this.offsetLeft;
        //        round to next lowest number
        var imageNumber = Math.floor(internalCoordsX / columnIncrements);
        //        if the image changed, change the background image
        if (imageNumber != currentImageNumber) {
            $(this).css('background-image', 'url(' + targetlist[imageNumber] + ')');
            currentImageNumber = imageNumber;
        }
    });
}

jQuery(document).ready(function ($) {

    $(".shop3").click(function () {

        $("#shop3").slideToggle("slow");

    });
});

jQuery(document).ready(function ($) {

    $(".shop2").click(function () {

        $("#shop2").slideToggle("slow");

    });
});

jQuery(document).ready(function ($) {

    $(".shop1").click(function () {

        $("#shop1").slideToggle("slow");

    });
});

jQuery(document).ready(function ($) {

    $(".infotext").click(function () {

        $("#contact").slideToggle("slow");

    });
});


$(document).ready(function () {
    // Handler for .ready() called.
    $('html, body').animate({
        scrollTop: $('.container').offset().top
    }, 'fast');
});
