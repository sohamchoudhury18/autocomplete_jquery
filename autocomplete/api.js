/* global $ */
var Api = function() {

};

Api.prototype = {
    constructor: Api,
    ajaxcall: function(keyword, url, argumentsarr, datalocation) {

        var argstr = "",
            dataloc = "";

        var str = argumentsarr.pop();
        str = str.split("keyword");
        str = str[0];

        str = str + keyword;

        console.log(argumentsarr);
        console.log(str);
        for (var i in argumentsarr) {
            argstr += "&" + argumentsarr[i];
        }
        argstr = argstr + "&" + str;
        url = url + argstr;
        console.log(url);
        $.ajax({
            url: url,
            success: function(res) {
                console.log(res);
            }
        });

    }
};

// $.ajax({
//         url: "samplejson/sample.json",
//         success: function(json) {
//             var arr = json.predictions;

//             arr.forEach(function(val, i) {
//                 console.log(val.structured_formatting.secondary_text);
//             });

//         },

//     });
