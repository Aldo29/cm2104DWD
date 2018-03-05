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
  var url = "http://www.omdbapi.com/?apikey=1bdb8064&s=" + searchterms + "&type=movie&plot=short";
  //using jquery json shortcut
  $.getJSON(url,function(jsondata){
    //handle the results
    addResultTitles(jsondata);
  });
}

function addResultTitles(jsondata) {
  //create a string to contain our HTML code to inject
  var htmlstring="";
  //Iterate over the collection of results
  for (var i=0; i<10; i++){
    var title=jsondata.Search[i].Title;
    var poster=jsondata.Search[i].Poster;
    var year=jsondata.Search[i].Year;
    var type=jsondata.Search[i].Type;
    var imdb=jsondata.Search[i].imdbID;
    htmlstring += "<h3>" + title + "</h3>";
    htmlstring += "<ul>";
    htmlstring += "<li>" + poster + "</li>";
    htmlstring += "<li>" + year + "</li>";
    htmlstring += "<li>" + type + "</li>";
    htmlstring += "<li>" + "http://www.imdb.com/title/" + imdb + "</li>"
    htmlstring += "</ul>"
  }

  //inject the HTML into our empty list
  $('#results').html(htmlstring);
}
