app.views.FollowerView = Backbone.View.extend({

  tagName: 'div',
  id: 'followers',
  template: JST['templates/follower'],

  render: function(){

    var html = this.template({
      model: this.model
    });

    this.$el.html(html);

    return this;

  }


});