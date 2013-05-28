app.views.SkillView = Backbone.View.extend({

  tagName: 'li',
  className: 'skill',
  template: JST['templates/_skill'],
  events: {
    'click .delete': 'deleteSkill',
    // 'blur .edit-title': 'escapeTitle',
    // 'blur .edit-body': 'escapeBody',
    // 'click .edit-body': 'escapeBody',
    'click .name' : 'editSkill',
    'change .edit-name': 'updateSkill'
  },
  
   initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    // if(this.options.project)
    //   this.model.set({ project_id: this.options.project.id });
    // this.model.view = this;
    // this.model.bind("change", this.setName);
  },

  render: function() {
    this.$el.html(this.template({
      name: this.model.attributes.name
    }));
    return this;
  },

  deleteSkill: function() {
    this.model.destroy();
   $(event.currentTarget).toggle('slide');
  },
 
  editSkill: function() {
  $(event.target).hide().next('.edit-name').show().focus();
  },

  updateSkill: function() {
   // $(event.target).hide().prev('.name').show();
   var newName = $(event.target).val();
   this.model.set({ name : newName });
   // this.model.project.skills.set(this.model);
   // if(this.model.isNew()){
   //  this.options.project.skillList.create(this.model);
   // }
   // else {
    // this.model.project.skills.save();
  
  }


});