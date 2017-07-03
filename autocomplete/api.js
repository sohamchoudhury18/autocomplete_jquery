/* global $ */
var Api = function() {

};

Api.prototype = {
    constructor: Api,
    ajaxcall: function(keyword, url, argumentsarr, datalocation, seperator, callback) {
        if (keyword != "") {
            console.log(seperator);
            var argstr = "",
                dataloc = "";

            var str = argumentsarr.pop();
            str = str.split("keyword");
            str = str[0];

            str = str + keyword;

            console.log(argumentsarr);
            console.log(str);
            for (var i in argumentsarr) {
                argstr += seperator + argumentsarr[i];
            }
            argstr = argstr + seperator + str;
            url = url + argstr;
            console.log(url);

            $.ajax({
                url: "samplejson/sample.json",
                success: function(jsonobj) {
                    callback(jsonobj.predictions);
                }
            })




        }

        // $.ajax({
        //     url: url,
        //     // dataType: 'jsonp',
        //     cors: true,
        //     contentType: 'application/json',
        //     // headers: {
        //     //     'Access-Control-Allow-Origin': "https://sam-samz18.c9users.io",
        //     // },
        //     success: function(res) {
        //         console.log(res);
        //     }
        // });

    }
};
