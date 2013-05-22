app.views.UserView = Backbone.View.extend({

  tagName: 'div',
  id: 'bio',
  template: JST['templates/user'],
  render: function() {

  var html = this.template({
    user: this.model
  });

  this.$el.html(html);

  return this;

  }

});
