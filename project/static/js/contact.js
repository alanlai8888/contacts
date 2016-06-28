$(document).ready(function(){
    var s, ContactsWidget = {
        settings: {
            sel: $("select"),
            contact: $(".js-contact"), 
            isExpanded: ("is-expanded"),
            isShowingPhone: ("is-showing-phone")
        },

        init: function(){
            s = this.settings;
            this.ui();
        },

        ui: function(){
            s.contact.on("click", function(e){
                $(event.currentTarget).toggleClass(s.isExpanded);
            }),
            s.sel.on("change", function(){
                s.j.toggleClass(s.isShowingPhone);
            });
        }    
    };

    ContactsWidget.init();
});

