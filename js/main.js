/* global $ */

$(document).ready(function() {
    var url = "https://maps.googleapis.com/maps/api/place/autocomplete/json?";
    var keyboardval = true;
    var mouseval = true;
    var args = ["types=address",
    "location=28.7041,77.1025",
    "radius=500",
    "key=AIzaSyAqGA0vZaG1eslELkKD8vHcZFPMMI8ZT64", "input=keyword"];
    var datalocation = ["predictions", "main_text", "structured_formatting", "secondary_text"];
    $("#search").autocomplete(url, keyboardval, mouseval, args, datalocation);


});
