/* global $ */
var Api = function() {

};

Api.prototype = {
    constructor: Api,
    ajaxcall: function(keyword, url, argumentsarr, datalocation, seperator, callback) {
        if (keyword != "") {
            // console.log(seperator);
            this.argstr = "";
            this.dataloc = datalocation;
            this.index;
            var _this = this;

            argumentsarr.forEach(function(val, index) {

                if (val == "keyword") {
                    argumentsarr[index] = keyword;
                    _this.index = index;
                    // console.log(val);
                } else {
                    argumentsarr[_this.index] = keyword;
                }
            });

            // console.log(argumentsarr);

            argumentsarr.forEach(function(val, index) {
                _this.argstr += seperator[index] + val
            });
            // console.log(_this.argstr);
            url += _this.argstr;

            console.log(url);
            $.ajax({
                url: url,
                //url: "samplejson/sample.json",
                //url:"https://api.github.com/search/repositories?q=hardeep",
                success: function(jsonobj) {
                    console.log(jsonobj);
                    console.log(_this.dataloc);
                    var response = jsonobj;
                    _this.dataloc.forEach(function(val,index){
                        response = response[val];
                        console.log(response);
                    });
                    response = response.slice(0,5);

                    console.log(response);

                    callback(response, keyword);
                }
            });




        }

    }
};
