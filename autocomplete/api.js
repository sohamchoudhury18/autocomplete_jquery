/* global $ */
var Api = function() {

};

Api.prototype = {
    constructor: Api,
    ajaxcall: function(keyword, url, argumentsarr, datalocation, seperator, callback) {
        if (keyword != "") {
            console.log(seperator);
            this.argstr = "";
            this.dataloc = "";
            this.index;
            var _this = this;

            argumentsarr.forEach(function(val, index) {

                if (val == "keyword") {
                    argumentsarr[index] = keyword;
                    _this.index = index;
                }
                else {
                    argumentsarr[_this.index] = keyword;
                }
            });

            console.log(argumentsarr);

            argumentsarr.forEach(function(val, index) {
                _this.argstr += seperator + val
            });
            url += _this.argstr;
            console.log(url);
            $.ajax({
                url: url,
                //url: "samplejson/sample.json",
                success: function(jsonobj) {
                    console.log(jsonobj);
                    callback(jsonobj.data, keyword);
                }
            });




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
