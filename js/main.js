/* global $ */

$(document).ready(function() {
    //seperator for url can be & / etc
    var seperator = "/";

    //api url
    var url = "http://35.154.56.172";

    //boolean val for keyword and mouse disablity
    var keyboardval = true;
    var mouseval = true;

    //arguments passed in the api url
    var args = ["api",
    "project-search",
    "Gurgaon",
    "keyword", "Flats"];

    //location of required strings in json response
    var datalocation = ["data", "name"];

    //calling the autocomplete plugin by passing all the required parameters
    $("#search").autocomplete(url, keyboardval, mouseval, args, datalocation, seperator);



});
