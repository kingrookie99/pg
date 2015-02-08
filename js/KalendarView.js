var KalendarView = function(employee) {
    
    
    this.render = function() {
        this.el.html(KalendarView.template(employee));
        return this;
    }; 
    
    
    this.initialize = function() {
        this.el = $('<div/>');
    };
 
    this.initialize();
 
 }
 
KalendarView.template = Handlebars.compile($("#kalendar-tpl").html());
Handlebars.registerPartial("menu", $("#menu-partial").html());