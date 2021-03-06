app.views.ProjectView = Backbone.View.extend({

  tagName: 'div',
  className: 'project',
  template: _.template($('#project-template').html()),
  events: {
    'dblclick .project-name': 'editProjectName',
    'dblclick .body': 'editProjectBody',
    // 'dblclick .url': 'editProjectUrl',
    'keypress .edit-title': 'updateTitle',
    'keypress .edit-body': 'updateBody',
    'blur .edit-title': 'escapeTitle',
    'blur .edit-body': 'escapeBody'
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  editProjectName: function() {
    this.$el.addClass('editing');
    this.$el.find('.edit-title').show().focus().prev('h3').hide();
  },

  escapeTitle: function() {
  this.$el.find('.edit-title').val('').hide().prev('h3').fadeIn(400);
  },

  updateTitle: function() {
    var new_title = this.$el.find('.edit-title').val().trim();
    if(event.which !== 13 || !new_title) {
      return;
    }

    this.model.set('title', new_title);
    this.model.save();
    this.$el.find('.edit-title').val('').hide().prev('h3').fadeIn(400).html(new_title);
  },

  editProjectBody: function() {
  this.$el.addClass('editing');
  this.$el.find('.edit-body').show().focus().next('.body').hide();
  },

  updateBody: function() {
  var new_body = this.$el.find('.edit-body').val().trim();
  if(event.which !== 13 || !new_body) {
    return;
  }

  this.model.set('body', new_body);
  this.model.save();
  this.$el.find('.edit-body').val('').hide().next('.body').fadeIn(400).html(new_body);
  },

  escapeBody: function() {
  this.$el.find('.edit-body').val('').hide().next('.body').fadeIn(400);
  },

  editProjectUrl: function() {
  this.$el.addClass('editing');
  this.$el.find('.edit-url').show().focus().next('a').hide();
  },

});