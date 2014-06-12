   
Puls3.Views.App = Backbone.View.extend({
    events:{
        'click .button':'showToast'
    },
    initialize: function($el){

        this.$el=$el;
    },
    showToast: function(){

       if(this.$el.find('#cool').is(':visible')){
        this.$el.find("#cool").hide();}
        else{
           this.$el.find("#cool").show(); 
        }
    },
    adb:function(){
        
    }
});
