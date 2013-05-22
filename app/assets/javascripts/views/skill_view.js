app.views.SkillView = Backbone.View.extend({

  tagName: 'li',
  className: 'skill',
  template: JST['templates/_skill'],
  events: {
    'click .delete': 'deleteSkill',
    'blur .edit-title': 'escapeTitle',
    'blur .edit-body': 'escapeBody'
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  deleteSkill: function() {
    this.$el.find('.skill').hide();
  }

  // escapeTitle: function() {
  // this.$el.find('.edit-title').val('').hide().prev('h3').fadeIn(400);
  // },

  // updateTitle: function() {
  //   var new_title = this.$el.find('.edit-title').val().trim();
  //   if(event.which !== 13 || !new_title) {
  //     return;
  //   }

  //   this.model.set('title', new_title);
  //   this.model.save();
  //   this.$el.find('.edit-title').val('').hide().prev('h3').fadeIn(400).html(new_title);
  // },

  // editProjectBody: function() {
  // this.$el.addClass('editing');
  // this.$el.find('.edit-body').show().focus().next('.body').hide();
  // },

  // updateBody: function() {
  // var new_body = this.$el.find('.edit-body').val().trim();
  // if(event.which !== 13 || !new_body) {
  //   return;
  // }

  // this.model.set('body', new_body);
  // this.model.save();
  // this.$el.find('.edit-body').val('').hide().next('.body').fadeIn(400).html(new_body);
  // },

  // escapeBody: function() {
  // this.$el.find('.edit-body').val('').hide().next('.body').fadeIn(400);
  // },

  // editProjectUrl: function() {
  // this.$el.addClass('editing');
  // this.$el.find('.edit-url').show().focus().next('a').hide();
  // },

});