
var jsdom  = require('jsdom');
var fs     = require('fs');
var jsdom = require('jsdom');
var http = require('http');
var adb = require('adbkit');
 
var client = adb.createClient();

exports.statusdevice = function(req,res){
client.trackDevices()
  .then(function(tracker) {
    tracker.on('add', function(device,out) {
      console.log('Device %s was plugged in', device.id)

    })
    tracker.on('remove', function(device,out) {
      console.log('Device %s was unplugged', device.id)

    })
    tracker.on('end', function() {
      console.log('Tracking stopped')

    })
  })
  .catch(function(err) {
    console.error('Something went wrong:', err.stack)
  })

};