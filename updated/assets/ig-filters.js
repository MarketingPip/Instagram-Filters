$(document).ready(function() {
  $('#toggle-dark').click(function () {
    $('html').toggleClass('light');
    $(this).toggleClass('btn-light');
    $(this).toggleClass('btn-dark');
  });
  
  var $carousel = $(".main-carousel").flickity({
    cellAlign: "center",
    contain: true,
    pageDots: false,
    wrapAround: true
  });

  $carousel.on("staticClick.flickity", function(
    event,
    pointer,
    cellElement,
    cellIndex
  ) {
    if (typeof cellIndex == "number") {
      $carousel.flickity("selectCell", cellIndex);

      $(".carousel-cell").removeClass("is-clicked");
      $(".carousel-cell.is-selected").addClass("is-clicked");

      var filter = $(".carousel-cell.is-selected figure").attr("class");

      $(".base-img div")
        .removeClass()
        .addClass(filter);
    }
  })

 

  
  });



// Upload Images From Local 
$(function () {
    $(":file").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });
});
function imageIsLoaded(e) {
    $('#myImg').attr('src', e.target.result);
};

$('.error').hide();

