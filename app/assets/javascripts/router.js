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

  userShow: function(user_id) {
    var user = new app.models.User({id: user_id});
    user.fetch({
      success: function(user, response, options){

        var view = new app.views.ProjectView({ model : user });
        $('#content').html(view.render().el);

      }
    });
    
  }
});