var TippsView = function(employee) {
    
    
    this.render = function() {
        this.el.html(TippsView.template(employee));
        return this;
    }; 
    
    
    this.initialize = function() {
        this.el = $('<div/>');
    };
 
    this.initialize();
 
 }
 
TippsView.template = Handlebars.compile($("#tipps-tpl").html());
Handlebars.registerPartial("menu", $("#menu-partial").html());