
function addContent () {
	// add a list of items to the content div
	var items = ["hewey", "dewey", "louie"];

	// build the html string for a <ul> list
	var items_html = "<ul>";
	for (var i=0; i < items.length; i++) {
		item = items[i];
		items_html += "<li>" + item + "</li>";
	};
	items_html += "</ul>";

	// using javascript
	// 1. find the content div
	// 2. modify its html attribute by adding items_html
  var contentDiv = document.getElementById("content");
	contentDiv.innerHTML = items_html;

}

function addContent2(){
	var list;var element;var text;
	var items = ["hewey", "dewey", "louie"];

	//Create list
	list = document.createElement("ul");
	//Add list items
	for (var i=0; i < items.length; i++){
		element = document.createElement("li");
		text = document.createTextNode(items[i]);
		element.appendChild(text);
		list.appendChild(element);
	}
	//Add content to page
	document.getElementById("content").appendChild(list);
}

function remove(){
	var node = document.getElementById("content").getElementsByTagName("ul")[0].childNodes[2];
	document.getElementById("content").getElementsByTagName("ul")[0].removeChild(node);
}
