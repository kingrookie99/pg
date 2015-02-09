var QuizView = function(employee) {
    
  
    this.render = function() {
        this.el.html(QuizView.template(employee));
        return this;
    }; 
    
    
    this.initialize = function() {
        this.el = $('<div/>');
    };
 
    this.initialize();
 
 }
 
QuizView.template = Handlebars.compile($("#quiz-tpl").html());
Handlebars.registerPartial("menu", $("#menu-partial").html());