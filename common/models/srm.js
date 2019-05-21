'use strict';

module.exports = function(Srm) {
    Srm.Pytexe = function(cb) {
        var response;
        var exec = require('child_process').execFile;

console.log(`Current directory: ${process.cwd()}`);
var path="../common/Pyt/LMP_Pyt/dist/exe_testing";
   exec('exe_testing.exe',{cwd:'./common/Pyt/LMP_Pyt/dist/exe_testing'}, function(err, data) {  
        console.log("node error is "+err)
        console.log(data.toString());                       
    });  
response='exe executed successfully';

        cb(null, response);
  
      };
    Srm.remoteMethod(
        'Pytexe', {
          http: {
            path: '/Pytexe',
            verb: 'get'
          },
          returns: {
            arg: 'Pytexe',
            type: 'string'
          }
        }
      );
};
