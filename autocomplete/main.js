/*  global $
    global Ui
    global Api
    global Event
*/

$.fn.autocomplete = function(url, keyboardval, mouseval, args, datalocation, seperator) {

    //init parameters
    this.url = url;
    this.keyboardval = keyboardval;
    this.mouseval = mouseval;
    this.args = args;
    this.datalocation = datalocation;
    this.seperator = seperator;
    //init fns
    this.Ui = new Ui();
    this.Api = new Api();
    this.Event = new Event(this, this.Ui, this.Api);

    //invoking functions
    this.Event.capture();
    this.Ui.createele(this);

};
