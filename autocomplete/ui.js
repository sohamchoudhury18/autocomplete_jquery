/* global $ */
var Ui = function() {
    this.clone = null;
};

Ui.prototype = {
    constructor: Ui,
    createele: function(ele) {
        var width = ele.css("width");
        //behind input create
        {
            var d = ele.offset();
            var clone = ele.clone();

            clone.css({
                "z-index": "-1",
                "position": "fixed",
                "float": "left",
                "left": d.left,
                "top": d.top,
                "color": "silver",
                "width": width,
                "background-color": "white",

            });
            clone.prop("disabled", true);
            clone.prop("placeholder", "");
            clone.attr("id", "behind-search");
            clone.appendTo(ele.parent());
            ele.css({
                "background-color": "transparent",

            });
        }
        //suggestion div create

    },
    showelements: function(ele, data, count) {
        this.showsuggestions(ele, data);
        this.loadbehind(count);
    },
    showsuggestions: function(ele, data) {
        if (ele.val() != "") {
            var width = ele.css("width");
            var suggestions = ele.parent().clone();
            suggestions.html("Search for");
            suggestions.attr("id", "suggestions-div");
            suggestions.addClass("sugg");
            suggestions.css({
                "width": width,
                "padding": ele.css("padding"),
                "border": ele.css("border"),
                "border-top": "none",
            });
            data.forEach(function(val, index) {
                console.log(val.structured_formatting.secondary_text);
                var sugg = suggestions.clone();
                sugg.attr("id", "sugg" + index);
                //this.check(val.structured_formatting.secondary_text.toLowerCase());
                sugg.html(val.structured_formatting.secondary_text.toLowerCase());
                if (index == 0) {
                    ele.parent().after(sugg);
                }
                else {
                    $("#sugg" + (index - 1)).after(sugg);
                }
                $("#sugg" + index).hover(function() {
                    $(this).css("background-color", "lightgrey");
                }, function() {
                    $(this).css("background-color", "white");
                });
            });
        }
        else {

            this.remove();

        }
    },
    loadbehind: function(count) {
        var str = $("#sugg" + count).html();
        console.log(str);
        $("#behind-search").val(str);
    },
    remove: function() {
        $(".sugg").remove();
    }

};
