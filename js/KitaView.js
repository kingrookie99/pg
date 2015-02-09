var KitaView = function(employee) {
    
    
    this.render = function() {
        this.el.html(KitaView.template(employee));
        return this;
    }; 
    
    
    this.initialize = function() {
        this.el = $('<div/>');
    };
 
    this.initialize();
 
 }
 
KitaView.template = Handlebars.compile($("#kita-tpl").html());
Handlebars.registerPartial("menu", $("#menu-partial").html());