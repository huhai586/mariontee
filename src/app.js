/**
 * Created by howard.hu on 16/8/16.
 */
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
// import xx from './templates/layout.html'
// console.log(xx)
var m=require("aa.html");
console.log(m)
var HelloWorld = Marionette.LayoutView.extend({  // 2
    el: '#app-hook',  // 3
    // template: require('aa.html')  // 4
});

var hello = new HelloWorld();  // 5

hello.render();  // 6