$(document).ready(function(){
    var ContactsWidget = {
        ui: {
            sel: $("select"),
            contact: $(".js-contact")
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
            var $target = $(e.currentTarget);

            if ($target.hasClass('is-expanded')) {
                $target.removeClass(this.isExpandedClass);
                $target.children().removeClass(this.isOverlappingClass);
            } else {
                this.ui.contact.removeClass(this.isExpandedClass);
                this.ui.contact.children().removeClass(this.isOverlappingClass);
                $target.addClass(this.isExpandedClass);
                $target.children().addClass(this.isOverlappingClass);
            }
        },

        onChangeSelect: function() {
            this.ui.contact.toggleClass(this.isShowingPhoneClass);
        }

    };

    ContactsWidget.init();
});

