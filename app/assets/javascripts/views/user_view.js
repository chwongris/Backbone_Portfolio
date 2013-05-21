app.views.UserView = Backbone.View.extend({

  tagName: 'div',
  id: 'bio',
  template: _.template($('#user-template').html()),
  render: function() {

  var html = this.template({
    user: this.model
  });

  this.$el.html(html);
  
  $('#user-bio').html(this.el);

  return this;

  }

});
