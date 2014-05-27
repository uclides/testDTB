
$(document).ready(function(){
$('#formlogin').validator();
$(document).on('open.fndtn.alert-box', function(event) {
  console.info('An alert box has been opened!');
});
});