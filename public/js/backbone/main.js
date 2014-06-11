$(function(){
    
	console.log('main.js loaded');

	window.ponyExpress = new PonyExpress({
		io:window.location.origin
	});

	window.ponyExpress.bind('connect', function(){
		window.plugs.device= new PonyExpress.BackbonePlug({
			collection:window.collections.devices
		});
	});

	window.views.app=new Puls3.Views.App($('body'));
	window.collections.devices= new Puls3.Collections.Devices

	window.collections.devices.fetch();
});
