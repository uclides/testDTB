
window.device= Backbone.Model.extend({
    urlRoot:'/deviceStatus',
initialize:function(){	
this.render();
},
render:function(){

},
default{
	device:'no se ha detectado dispositivo'
},

});