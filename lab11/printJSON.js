$(function(){
  //document ready
  alert("document ready");

  $('#searchform').submit(function(){
    //get current value and add to items list
    var searchterms = $('#searchterms').val();
    //call our search youtube function
    getResultsFromOMDB(searchterms);
    return false;
  });
});

function getResultsFromOMDB(searchterms){
  //Call youtube api using Ajax
  //build url for the request
  var url = "http://www.omdbapi.com/?apikey=1bdb8064&s=" + searchterms;
  //using jquery json shortcut
  $.getJSON(url,function(jsondata){
    //handle the resultsbox
    printJSON(jsondata);
  });
}

function printJSON(jsondata){
  //prints the JSON to the screen
  var normal = JSON.stringify(jsondata);
  $('#resultsbox').append("<p>" + normal + "</p>");
}
