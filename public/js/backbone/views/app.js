$(function() {
    
    
var check = Backbone.View.extend({
    el: $('body'),
    events:{
        'click a.button':'showToast'
    },
    initialize: function(){

    },
    showToast: function(){
        if($('#cool').is(':visible')){
        $('#cool').hide();}
        else{
           $('#cool').show();  
        }
    }
});
   var check= new check();
});