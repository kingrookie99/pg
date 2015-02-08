var app = {

    registerEvents: function() {
        var self = this;
        // Check of browser supports touch events...
        if (document.documentElement.hasOwnProperty('ontouchstart')) {
            // ... if yes: register touch event listener to change the "selected" state of the item
            $('body').on('touchstart', 'a', function(event) {
                $(event.target).addClass('tappable-active');
            });
            $('body').on('touchend', 'a', function(event) {
                $(event.target).removeClass('tappable-active');
            });
        } else {
            // ... if not: register mouse events instead
            $('body').on('mousedown', 'a', function(event) {
                $(event.target).addClass('tappable-active');
            });
            $('body').on('mouseup', 'a', function(event) {
                $(event.target).removeClass('tappable-active');
            });
        }
        $(window).on('hashchange', $.proxy(this.route, this));
    },
    
    
    
    
    
    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },
    
     initialize: function() {
        var self = this;
        this.kita =  '#view1';
        this.tipps =  '#view2';
        this.kalendar =  '#view3';
        this.quiz =  '#view4';

        this.registerEvents();
        this.store = new MemoryStore(function() {
            self.route();
        });
         
    },
    
    
    route: function() {
        
        var hash = window.location.hash;
        
        if (!hash) {
            $('body').html(new HomeView(this.store).render().el);
            return;
        }

        if (hash == app.kita) {
            $('body').html(new KitaView(this.store).render().el);
            return;
        }
        if (hash == app.tipps) {
            $('body').html(new TippsView(this.store).render().el);
            return;
        }
        if (hash == app.kalendar) {
            $('body').html(new KalendarView(this.store).render().el);
            return;
        }
        if (hash == app.quiz) {        
            $('body').html(new QuizView(this.store).render().el);
            return;
        }
    }

    
    
    
    
    

};

app.initialize();