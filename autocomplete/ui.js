/* global $ */
var Ui = function(obj) {
    this.clone = null;
    this.behind_searchbox = null;
    this.behind_div = null;
    this.behind_searchbox_id = null;
    this.suggestions_div = null;
    this.suggestions_div_id = null;
    this.samplesuggestions = null;
    this.obj = obj;
    this.identifier= this.obj.id;
    __this = this;
};

Ui.prototype = {
    constructor: Ui,
    create_all: function(obj) {
        this.obj = obj;
        var _this = this;


        //clone of divs and input box
        _this.behind_div = $(this.obj).parent("div").clone();
        _this.behind_searchbox = $(this.obj).clone();

        //removing all content from cloned div
        _this.behind_div.empty();

        //asssigning id to behind the input box element
        _this.behind_searchbox.attr("id", this.obj.attr("id") + "_behind");
        _this.behind_searchbox_id = this.obj.attr("id") + "_behind";

        //assigning css needed to behind element
        this.width = this.obj.css("width");
        this.offset = $(this.obj).offset();
        this.obj.css("background-color", "transparent");

        _this.behind_searchbox.css({
            "background-color": "white",
            "position": "fixed",
            "z-index": "-1",
            "top": this.offset.top,
            "left": this.offset.left,
            "width": this.width,
            "color": "silver",

        });

        //changing property and attributes of behind element
        _this.behind_searchbox.prop("disabled", true);
        _this.behind_searchbox.attr("placeholder", "");
        //append
        _this.behind_searchbox.appendTo(_this.behind_div);
        this.obj.parent().after(_this.behind_div);

        //creating suggestiondiv
        this.createsuggestions(this.obj);
    },
    loadelements: function(keyword, obj, data, loc) {

        this.obj = obj;
        this.data = data;
        this.loc = loc;
        // console.log(this.loc);

        this.keyword = keyword;
        //loading elements
        if (this.obj.val() != "") {
            this.loadsuggestions(this.keyword, this.obj, this.data, this.loc);
        }
        else {
            this.remove();
        }
    },
    loadbehind: function(counter) {
        this.counter = counter;
        // console.log(counter);
        this.suggestions_div.css("background-color", "white");
        var id = this.obj.attr("id") + "sugg" + this.counter;
        // console.log(id);
        $("#" + id).prevAll().css({
            "background-color": "white",
        });
        $("#" + id).css({
            "background-color": "lightgrey"
        });
        $("#" + id).nextAll().css({
            "background-color": "white",
        });
        this.behind_searchbox.val($("#" + id).text());
        $("#" + id).html(this.replace(this.keyword, $("#" + id).text()));
        // console.log(this.behind_searchbox.val());
    },
    loadsuggestions: function(keyword, obj, data, loc) {
        this.obj = obj;
        this.keyword = keyword;
        this.data = data;
        this.loc = loc;
        this.location = "";
        this.data = this.data;

        // console.log(this.data);
        var _this = this;
        // console.log("suggestions loaded");
        //invoking  suggestions div creation


        //fetching data and creating suggestions
        //sample suggestions
        {
            _this.samplesuggestions = _this.suggestions_div.clone();
            _this.samplesuggestions.html("sugg0");
            _this.samplesuggestions.css({
                "width": this.obj.css("width"),
                "padding": this.obj.css("padding"),
                "border": this.obj.css("border"),
                "border-top": "none",
                "left": "initial",
                "top": "initial",
                "right": "initial",
                "bottom": "initial",
            });
        }

        this.data.forEach(function(val, index) {

            this.sugg = _this.samplesuggestions.clone();
            // console.log(val);
            var v = __this.identifier;
            this.sugg.html(val[v].toLowerCase());
            this.sugg.attr("id", _this.obj.attr("id") + "sugg" + index);
            this.sugg.addClass(_this.obj.attr("id") + "sugg");
            _this.suggestions_div.append(this.sugg);
            if (index == 0) {
                _this.loadbehind(index);
            }
        });


    },
    createsuggestions: function(obj) {
        this.obj = obj;
        var _this = this;
        // console.log("create suggestions div");
        //creating suggestions div

        //cloning
        _this.suggestions_div = $(this.obj).parent("div").clone();

        //removing content from cloned div
        _this.suggestions_div.empty();
        //assigning id to suggestion div
        _this.suggestions_div.attr("id", this.obj.attr("id") + "_suggestions_div");
        _this.suggestions_div_id = this.obj.attr("id") + "_suggestions_div";
        //add
        _this.obj.parent().after(_this.suggestions_div);

    },
    remove: function() {
        var _this = this;
        _this.behind_searchbox.val("");
        if (_this.suggestions_div != null) {
            _this.suggestions_div.empty();
        }
    },
    copybehind: function(obj) {
        this.obj = obj;
        this.obj.val(this.behind_searchbox.val());
    },
    replace: function(key, val) {
        var str;
        str = val.replace(key, "<span style='background-color:yellow'>" + key + "</span>");
        // console.log(str);
        return str;
    },
    onclick: function(ele) {
        // console.log(ele);
        this.obj.val(ele.text());
        this.behind_searchbox.val(ele.text());
    },
    onhover: function(ele) {
        this.behind_searchbox.val(ele.text());
        ele.css({
            "box-shadow": "5px 10px 7px grey"
        });
    },
    offhover: function(ele) {
        this.behind_searchbox.val(" ");
        ele.css({
            "box-shadow": "0px 0px 0px"
        });
    }
};
