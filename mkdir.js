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
// var shell = require('shelljs');
// mkdir('-p', "./iphone/5s/case");

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

    if(fs.existsSync(dirpath)){
        callback && callback();
    }else{
        mkdirs(path.dirname(dirpath), mode, function(){
            console.log("exec callback")
            fs.mkdirSync(dirpath, mode);
        });
    }
};

var mkdirs1 = function(dirpath, mode, callback) {
    fs.exists(dirpath, function(exists) {
        if(exists) {
            callback();
        } else {
            mkdirs(path.dirname(dirpath), mode, function(){
                fs.mkdirSync(dirpath, mode, callback);
            });
        }
    });
}
/*
这个程序的作用是检查是否存在这个目录,如果不存在,那么创建它
如果这个目录涉及到嵌套,那么就递归调用
递归的开始就是程序自己
 */

function mkdirsSync(dirname, mode){
    if(fs.existsSync(dirname)){
        return true;
    }else{
        if( mkdirsSync(path.dirname(dirname), mode) ){
            fs.mkdirSync(dirname, mode);
            return true;
        }
    }
}


mkdirsSync("./huhai/123")
console.log("-----------------文件夹创建end------------------")