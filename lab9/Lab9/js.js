$(function(){
  $("#myTable").tablesorter();
  $("tr:odd").addClass("odd");
  $("tr:even").addClass("even");
  $("th").addClass("highlighted");
  $("tr").click(function () {
    $("tr").removeClass("highlighted");
    $(this).addClass("highlighted");
  });
})
