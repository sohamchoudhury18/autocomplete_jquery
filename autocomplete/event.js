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
            _this.ui.remove();
            console.log("ee");
        });

    },
    keydownfn: function(e, _this) {
        clearTimeout(_this.timeout);
        _this.timeout = setTimeout(function() {
            console.log(e.target.value);
            _this.obj.val(_this.obj.val().toLowerCase());
            var keyword = e.target.value;
            if (e.key == "ArrowRight" | e.key == "Tab") {
                _this.ui.loadbehind(_this.counter);
                console.log(_this.counter);
            }
            // else if()
            else {
                _this.api.ajaxcall(keyword, _this.obj.url, _this.obj.args, _this.obj.datalocation, _this.obj.seperator, function(jsonobj) {
                    _this.ui.showelements(_this.obj, jsonobj);
                    _this.ui.loadbehind(_this.counter);
                });
            }

        }, 600);
    }
};
