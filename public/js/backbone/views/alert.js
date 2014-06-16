
window.Alert = Backbone.View.extend({
	initialize:function(){
		this.render(this.template);
	},
	render:function(){
		$(this.el).html(this.template());
		return this;
	}
});