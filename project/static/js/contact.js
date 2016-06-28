$(document).ready(function(){
    var ContactsWidget = {
        ui: {
            sel: $("select"),
            contact: $(".js-contact"),
            lastClicked: undefined
        },

        init: function(){
            this.isExpandedClass = "is-expanded";
            this.isShowingPhoneClass = "is-showing-phone";
            this.isOverlappingClass = "is-overlapping";
            this.setupHandlers();
        },

        setupHandlers: function(){
            this.ui.contact.on("click", this.onClickContact.bind(this));
            this.ui.sel.on("change", this.onChangeSelect.bind(this));
        },

        onClickContact: function(e) {
            try{
                if(!(lastClicked.is($(e.currentTarget)))){
                    lastClicked.removeClass(this.isExpandedClass);
                    lastClicked.children().removeClass(this.isOverlappingClass);
                }
            }
            catch(e){
            }
            $(e.currentTarget).toggleClass(this.isExpandedClass);
            $(e.currentTarget).children().toggleClass(this.isOverlappingClass);
            lastClicked = $(e.currentTarget);
        },

        onChangeSelect: function() {
            this.ui.contact.toggleClass(this.isShowingPhoneClass);
        }

    };

    ContactsWidget.init();
});

