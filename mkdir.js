/**
 * Created by howard.hu on 16/10/10.
 */
//  console.log("execing")
// var fs=require("fs");
//  var haveFolder=fs.existsSync("./huhai/123");
// if(haveFolder){
//
// }else{
//             //create
//
// }

var fs = require('fs');
var path = require('path');
// var mkdirs = function(dirpath, mode, callback) {
//     var di=fs.existsSync(dirpath);
//     if(di){
//         callback && callback();
//     }else{
//         console.log("exec")
//         mkdirs(path.dirname(dirpath), mode, function(){
//             fs.mkdir(dirpath, mode, callback);
//         });
//     }
// };


function mkdirs(dirpath, mode, callback) {

    var directory=fs.existsSync(dirpath);
    if(directory){
        callback && callback();
    }else{
        mkdirs(path.dirname(dirpath), mode, function(){
            fs.mkdirSync(dirpath, mode, callback);
            return true
        });
    }
};


function mkdirsSync(dirname, mode){
    console.log(dirname);
    if(fs.existsSync(dirname)){
        return true;
    }else{
        if(mkdirsSync(path.dirname(dirname), mode)){
            fs.mkdirSync(dirname, mode);
            return true;
        }
    }
}


mkdirs("./huhai/123")
console.log("-----------------------------------")