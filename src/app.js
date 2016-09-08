// // /**
// //  * Created by howard.hu on 16/8/16.
// //  */
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';



var child = Marionette.LayoutView.extend({  // 2
    initialize:function(){
        var _this=this;
        setTimeout(function(){
            _this.trigger("xxx",{info:123})
        },100)
    }


});


var parent = Marionette.LayoutView.extend({  // 2
   initialize:function(){
       var oo=new child
       this.listenTo(oo,"xxx",function(data){
           console.log("接收到的数据是",data)
       })
   }


});

new parent;





