/* global $ */

$(document).ready(function() {
    console.log("doc is ready");
    $.ajax({
        url: "https://github.com/nshntarora/Indian-Cities-JSON/blob/master/cities.json",
        success: function(json) {
            console.log(json);
        },
    });
});
