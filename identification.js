
var jsdom  = require('jsdom');
var fs     = require('fs');
var jsdom = require('jsdom');
var http = require('http');
var adb = require('adbkit');
var client = adb.createClient();

exports.statusdevice = function(callback){
var out;

client.trackDevices()
  .then(function(tracker) {
    tracker.on('add', function(device) {
      callback(device.id);
    })
    tracker.on('remove', function(device) {
      callback(device.id);

    })
    tracker.on('end', function() {
      console.log('Tracking stopped')

    })
  }

  )
  .catch(function(err) {
    console.error('Something went wrong:', err.stack)
  })

};