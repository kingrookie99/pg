var FreakView = function(employee) {
    
    
    this.render = function() {
        this.el.html(FreakView.template(employee));
        return this;
    }; 
    
    
    this.initialize = function() {
        this.el = $('<div/>');
    };
 
    this.initialize();
 
 }
 
FreakView.template = Handlebars.compile($("#freak-tpl").html());