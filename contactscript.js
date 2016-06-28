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
            this.setupHandlers();
        },

        setupHandlers: function(){
            this.ui.contact.on("click", this.onClickContact.bind(this));
            this.ui.sel.on("change", this.onChangeSelect.bind(this));
        },

        onClickContact: function(e) {
            try{
                lastClicked.toggleClass(this.isExpandedClass);
            }
            catch(e){
                alert(e);
            }
            // if(lastClick === undefined){
            //     lastClicked.toggleClass(this.isExpandedClass);
            // }
            $(e.currentTarget).toggleClass(this.isExpandedClass);
            lastClicked = $(e.currentTarget);
        },

        onChangeSelect: function() {
            this.ui.contact.toggleClass(this.isShowingPhoneClass);
        }

    };

    ContactsWidget.init();
});

