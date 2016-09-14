// // /**
// //  * Created by howard.hu on 16/8/16.
// //  */
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

// // // import xx from './templates/layout.html'
// // // console.log(xx)
// //
// // import  solo from './models/solo'
// // import littleView from './views/little'
// //
// // var HelloWorld = Marionette.LayoutView.extend({  // 2
// //     el:"#app-hook",
// //     className:"hahhhhhhh",
// //     template: require('./aa.html') , // 4
// //     regions: {
// //         menu: ".hu",
// //         content: ".hai"
// //     },
// //     ui:{
// //         aa:".hu"
// //     },
// //     onRender:function(){
// //         debugger
// //         // this.ui.aa.show(new littleView)
// //     },
// //     onShow:function(){
// //
// //         debugger
// //
// //     }
// //
// //
// // });
// //
// // var hello = new HelloWorld({
// //     model:new solo
// // });
// //
// // hello.render();  // 6
//
//
// var container =  Marionette.Region.extend({
//     el: "#container"
// });
// var y=new container;
//
// var mgr =  Marionette.Region.extend({
//     el: "#container"
// });
//
// debugger
//
// var MyLayout = Marionette.LayoutView.extend({
//     template: require("./templates/layout.html"),
//
//     regions: {
//         menu: "#menu",
//         content: "#content"
//     }
// });
//
// // Show the "layout" in the "container" region
// var layout = new MyLayout({
//     model:new Backbone.Model({
//         name:"aiya"
//     })
// });
// y.show(layout);
//
// // and show the views in the layout
// // layout.menu.show(new MyMenuView());
// // layout.content.show(new MyContentView());

// var model=Backbone.Model.extend();



var child = Marionette.LayoutView.extend({  // 2
    el:"#app-hook",
    template:require("./aa.html"),
    onRender:function(){
        debugger
    },
    onBeforeShow:function(){
        console.log("before渲染的el",this.el);
    }



});


var parent = Backbone.View.extend({  // 2
   initialize:function(){
       var oo=new child
       this.listenTo(oo,"all",function(data){
           console.log("接收到的数据是",data)
       })
       oo.render()
       // Marionette.triggerMethodOn(this,"haha")

   },
    onHaha:function(){
        console.log("haha is trigged",this)
    }


});

new parent;





