var Event = function(obj, ui, api) {
    this.obj = obj;
    this.ui = ui;
    this.api = api;
    this.timeout = null;
    this.counter = 0;

};

Event.prototype = {
    constructor: Event,

    capture: function() {
        var _this = this;
        this.obj.on("keydown", function(e) {
            _this.keydownfn(e, _this);
        });

    },
    keydownfn: function(e, _this) {
        //adding debounce func
        clearTimeout(_this.timeout);
        _this.timeout = setTimeout(function() {

            //shifting input into lowercase
            _this.obj.val(_this.obj.val().toLowerCase());

            //getting keyword for ajax call
            var keyword = e.target.value;

            //checking if keyboard disabled or not
            if (_this.obj.keyboardval) {

                //function calling as per keydown press
                if (e.key == "ArrowRight" | e.key == "Enter") {
                    console.log(e.key);
                    _this.ui.copybehind(_this.obj);
                }
                else if (e.key == "ArrowDown") {
                    console.log("adown");
                    if (_this.counter == 0) {
                        _this.counter++;
                        _this.ui.loadbehind(_this.counter);

                    }
                    else if (_this.counter <= 3) {
                        _this.counter++;
                        _this.ui.loadbehind(_this.counter);
                    }
                    else if (_this.counter > 3) {
                        _this.counter = 0;
                        _this.ui.loadbehind(_this.counter);
                    }

                }
                else if (e.key == "ArrowUp") {
                    console.log("aup");
                }
                else {
                    //removing previous results
                    _this.ui.remove();

                    //ajax call to api with parameters from the user
                    _this.api.ajaxcall(keyword, _this.obj.url, _this.obj.args, _this.obj.datalocation, _this.obj.seperator, function(jsonobj,keyword) {

                        //callback to ui for showing suggestions
                        _this.ui.loadelements(keyword,_this.obj, jsonobj);

                    });
                }
            }
            else {
                //if keyboard disabled
                _this.ui.remove();
                _this.api.ajaxcall(keyword, _this.obj.url, _this.obj.args, _this.obj.datalocation, _this.obj.seperator, function(jsonobj) {
                    _this.ui.loadelements(_this.obj, jsonobj);

                });
            }


        }, 600);

    }
};
