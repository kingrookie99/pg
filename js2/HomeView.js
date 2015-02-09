var HomeView = function(store) {
 
            
    this.render = function() {
        this.el.html(HomeView.template());
        return this;
    };
 

        
    this.findByName = function() {
        store.findByName($('.search-key').val(), function(employees) {
            $('.freak-list').html(HomeView.li2Template(employees));
            $('.employee-list').html(HomeView.liTemplate(employees));
            $('.freak-list').html(HomeView.li2Template(employees));
        });
    };
    
    
    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.on('keyup', '.search-key', this.findByName);
        
        

   
    

    };
 
    this.initialize();
    


 
}
 
HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.liTemplate = Handlebars.compile($("#employee-li-tpl").html());
HomeView.li2Template = Handlebars.compile($("#freaks-li-tpl").html());