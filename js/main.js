/* global $ */

$(document).ready(function() {
    //seperator for url can be & / etc
    var seperator = "&";

    //api url
    var url = "https://maps.googleapis.com/maps/api/place/autocomplete/json?";

    //boolean val for keyword and mouse disablity
    var keyboardval = true;
    var mouseval = true;

    //arguments passed in the api url
    var args = ["types=address",
    "location=28.7041,77.1025",
    "radius=500",
    "key=AIzaSyAqGA0vZaG1eslELkKD8vHcZFPMMI8ZT64", "input=keyword"];

    //location of required strings in json response
    var datalocation = ["predictions", "main_text", "structured_formatting", "secondary_text"];

    //calling the autocomplete plugin by passing all the required parameters
    $("#search").autocomplete(url, keyboardval, mouseval, args, datalocation, seperator);



});
