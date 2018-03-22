$(document).ready(function() {
  $("#first-heading").click(function() {
    $("h1").show();
  });
  //
  // $("#initially-showing").click(function() {
  //   $("#initially-hidden").show();
  //
  //   $("#initially-showing").hide();
  // });

  $(".clickable").click(function() {
    $(this).siblings().toggle();
  });
  $("#initially-showing").click(function() {
    $("#initially-hidden").toggle();
  });







});
