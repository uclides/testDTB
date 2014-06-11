Puls3.Views.Device = Backbone.View.extend({
	tagName:"article",
	className: "post",
	initialize : function(){
		//debugger;
		this.template=_.template($('#article-template').html());
	},
	render : function(){
		var data = this.model.toJSON();
		//junto data con el template
		var html = this.template(data);
		this.$el.html( html );
 
	}
}); 