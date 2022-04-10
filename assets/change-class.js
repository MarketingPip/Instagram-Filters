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

// Filter Function HTML

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
