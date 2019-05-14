'use strict';

module.exports = function(Srm) {
    Srm.status = function(cb) {
        // var currentDate = new Date();
        // var currentHour = currentDate.getHours();
        // var OPEN_HOUR = 6;
        // var CLOSE_HOUR = 20;
        // console.log('Current hour is %d', currentHour);
        // var response;
        // if (currentHour >= OPEN_HOUR && currentHour < CLOSE_HOUR) {
        //   response = 'We are open for business.';
        // } else {
        //   response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
        // }
        // var exec = require('child_process').execFile;

// var fun =function(){
//    console.log("fun() start");
var response;
var exec = require('child_process').execFile;
   exec('C:\Users\gs00604825\Desktop\LMP\common\models\open.bat', function(err, data) {  
        console.log(err)
        // response='inside .exe func';
        console.log(data.toString());                       
    });  
    response='inside .exe func';
// }
// fun();
        cb(null, response);
        
      };
    Srm.remoteMethod(
        'status', {
          http: {
            path: '/status',
            verb: 'get'
          },
          returns: {
            arg: 'status',
            type: 'string'
          }
        }
      );
};
