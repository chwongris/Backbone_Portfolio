app.Router = Backbone.Router.extend({

  routes: {
    '' : 'home',
    'users/:id' : 'userShow'
  },

  home: function () {
    // Try to find projects already in the local storage
    var homeview = new app.views.Home();
    $('#content').html(homeview.render().el);
  },


  userShow: function () {
    var view = new app.views.ProjectView();
    $('#content').html(view.render().el);
  }

});