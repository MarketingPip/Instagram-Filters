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

// Filter Function(s) HTML

"use strict";

const filters = ["1977", "aden", "amaro", "ashby", "brannan", "brooklyn", "charmes", "clarendon", "crema", "dogpatch", "earlybird", "gingham", "ginza", "hefe", "helena", "hudson", "inkwell", "juno", "kelvin", "lark", "lofi", "ludwig", "maven", "mayfair", "moon", "nashville", "perpetua", "poprocket", "reyes", "rise", "sierra", "skyline", "slumber", "stinson", "sutro", "toaster", "valencia", "vesper", "walden", "willow", "xpro-ii"];
let options = '<select id="selector">';

for (const filter in filters) {
  const filterValue = filters[filter];
  options += `
    <option value=${filterValue}>
      ${filterValue}
    </option>
  `;
}

$(".options-area").append(`${options}</select>`);
let prevClassName = `filter-${filters[0]}`;
$("figure").addClass(prevClassName);
$(document).on("change", "#selector", function () {
  const selectedValue = $(this).find("option:selected").text().trim();
  const newClassName = `filter-${selectedValue}`;
  $("figure").removeClass(prevClassName);
  $("figure").addClass(newClassName);
  prevClassName = newClassName;
});


// Image from url 

var Ximgurl = $('#try').val();
var XimgDefault = $('#def').val();    

    loadImage(Ximgurl,XimgDefault)


$('#reload').click(function() {
    Ximgurl = $('#try').val();
    XimgDefault = $('#def').val();
    loadImage(Ximgurl,XimgDefault);
});

function loadImage(imgurl,imgDefault) {
    var img = $('#myImg');

    // wrap our new image in jQuery, then:
    $(img)
    // once the image has loaded, execute this code
    .load(function () {
        // set the image hidden by default    
        $(this).hide();

        // with the holding div #loader, apply:
        $('#loader')
        // remove the loading class (so no background spinner), 
        .removeClass('loading')
        // then insert our image
        .append(this);

        // fade our image in to create a nice effect
        $(this).fadeIn();
    })

    // if there was an error loading the image, react accordingly
    .error(function () {
        // notify the user that the image could not be loaded
        $('#loader').removeClass('loading')
        $(img).attr('src', imgDefault);

    })

    // *finally*, set the src attribute of the new image to our image
    .attr('src', imgurl);
}




