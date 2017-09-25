/* global $ */

$(document).ready(function() {
    //seperator for url can be & / etc
    var seperator = ["/","/","?","="];

    //api url
    //var url = "http://35.154.56.172";
    var url = "https://api.github.com";
    //boolean val for keyword and mouse disablity
    var keyboardval = true;
    var mouseval = true;

    //arguments passed in the api url
    var args = ["search",
    "users",
    "q",
    "keyword"];

    //location of required strings in json response
    var datalocation = ["items"];
    var id = "login"
    //calling the autocomplete plugin by passing all the required parameters
    $("#search").autocomplete(url, keyboardval, mouseval, args, datalocation, seperator,id);



});
