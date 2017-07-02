var Event = function(obj, ui, api) {
    this.obj = obj;
    this.ui = ui;
    this.api = api;
    this.timeout = null;

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
        clearTimeout(_this.timeout);
        _this.timeout = setTimeout(function() {
            console.log(e.target.value);
            var keyword = e.target.value;
            console.log(_this.obj.args);
            _this.api.ajaxcall(keyword, _this.obj.url, _this.obj.args, _this.obj.datalocation);
        }, 600);
    }
};
