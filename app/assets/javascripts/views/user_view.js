app.views.UserView = Backbone.View.extend({

  tagName: 'div',
  id: 'bio',
  template: JST['templates/user'],
  events: {

  'click .follow-button': 'addFollower'
  },



  render: function() {

    var _this = this;

  var html = this.template({
    user: this.model, followers: this.collection
  });

  this.$el.html(html);

  this.model.followers.fetch({
    success: function(followers){

    _this.model.followers.forEach(function(follow) {
      var followers = new app.views.FollowerView({ model: follow });
      _this.$el.find('.followers').append(followers.render().el);
    });
    }
  });

    return this;
  },

  addFollower: function(){

  var _this = this;


  var current_user = new app.models.User();
  current_user.url = 'users/me';

  current_user.fetch({
    success: function(user) {
      user.url = '/users/' + user.id;
    _this.model.followers.add(user);
    _this.model.save();
    _this.render();
    }
  });




  }

});

