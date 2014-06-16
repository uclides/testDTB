
var AppRouter= Backbone.Router.extend({
	routes:{
		"deviceStatus":"adb"
	},
	initialize:function(){

	},
	adb:function(){
		if(!this.alert){
			this.alert=new Alert();
		}
		$('#adb').html(this.alert.el);
	}
});
utils.loadTemplate(['Alert'],function(){
app= new AppRouter();
Backbone.history.start();
});