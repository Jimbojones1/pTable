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


  periodic.active.collection = new periodic.blueprints.collection();
  periodic.active.collectionView = new periodic.blueprints.collectionView({

        collection: periodic.active.collection

  });

  $('.AlkaliMetalButton').on('click', function(){
    console.log('my button is working');
    $('.alkaliMetals').hover(
      function() {
        $(this).addClass('hover');
      }
    )

  })



});




$.ajaxSetup({
  beforeSend: function(xhr){
    xhr.setRequestHeader('Authorization', 'Token token=' + global.apiKey)
  }
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

  }
});

periodic.blueprints.collectionView = Backbone.View.extend({

  initialize: function(){
    console.log('collectionView is ready');

    this.render();

    var that = this;

    this.collection.on('sync', function(){

      that.render();

    })
  },
  render: function() {

    this.$el.html('');  //whenever the collection view is rendered it clears
    //the table so no duplication occures as data changes

    var models = this.collection.models;

    for (var i in models) {
      var elements = models[i];

    new periodic.blueprints.modelView({

      model: elements

      });
    }
  }
});

periodic.blueprints.modelView = Backbone.View.extend({

    initialize:  function(){
      console.log('my modelView is working');

      this.$el = $("#"+this.model.attributes.atomicnumber);

      this.render();

    },
    render: function(){

      var elements = this.model.attributes;

      this.$el.html("<ul><li class='atomicnumber'>"+ elements.atomicnumber + "</li><li class='symbol'>" + elements.symbol + "</li><li class='element'>" + elements.element + "</li><li class='atomicmass'>" + elements.atomicmass + "</li>");
    }
});
