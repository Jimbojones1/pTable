// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require underscore
//= require backbone

$(document).ready(function(){

  $.ajaxSetup({
    beforeSend: function(xhr){
      xhr.setRequestHeader('Authorization', 'Token token=1063e26fd6840bc33633161db11dd60a')
    },
    type: 'GET',
    url: 'http://localhost:3000/api/periodics',
    dataType: 'json',
    success: function(data){
      console.log(data);
    },
    error: function(err){
      console.log(err);
    }
  })

  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/periodics',
    dataType: 'json',
    success: function(data){
      console.log(data);
    },
    error: function(err){
      console.log(err);
    }
  })

  periodic.active.collection = new periodic.blueprints.collection;

});

var periodic = periodic || {};
periodic.active = periodic.active || {};
periodic.blueprints = periodic.blueprints || {};

/*------------------------------------
  Single Model Conctructor
  -----------------------------------*/
periodic.blueprints.model = Backbone.Model.extend({

  initialize: function(){
    console.log('a model is ready');
  }
})

periodic.blueprints.collection = Backbone.Collection.extend({
  url: 'http://localhost:3000/api/periodics',
  model: periodic.blueprints.model,
  initialize: function(){
    console.log('a collection is ready');

    this.fetch();
    console.log(this.fetch());
  }
});
