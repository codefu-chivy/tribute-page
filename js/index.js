$(function() {
 $("#song1, #song2, #song3, #song4").mouseenter(function() {
    $(this).addClass("resize");
    });
 $("#song1, #song2, #song3, #song4").mouseleave(function() {
    $(this).removeClass("resize");
 });
});