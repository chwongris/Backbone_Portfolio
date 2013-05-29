app.views._Project = Backbone.View.extend({

  tagName: 'div',
  className: 'project',
  template: JST['templates/_project'],
  events: {
    // 'dblclick .project-name': 'editProjectName',
    // 'dblclick .body': 'editProjectBody',
    // 'dblclick .url': 'editProjectUrl',
    'change .edit-title': 'updateTitle',
    // 'keypress .edit-body': 'updateBody',
    'blur .edit-title': 'toggleTitle',
    'dblclick .project-name': 'toggleTitle',
    // 'blur .edit-body': 'escapeBody',
    'click .add-skill' : 'addSkill',
    'click .remove-project' : 'deleteProject'
  },


  initialize: function() {
   this.listenTo(this.model, 'destroy', this.remove);
   this.listenTo(this.model.skillList, 'add', this.render);
   this.listenTo(this.model.skillList, 'change', this.update);
 },


 render: function() {



  this.$el.html(this.template({project: this.model}));
    // this.model.skillList.fetch();

  var _this = this;
    
    this.model.skillList.forEach(function(skill) {
      skill.project = _this.model;
      var skill_view = new app.views.SkillView({ model: skill });
      _this.$el.find('#skill-list').append(skill_view.render().el);
    });    

    return this;
  },

  update: function() {
    this.model.save();
  },

  // editProjectName: function() {
  //   this.$el.addClass('editing');
  //   this.$el.find('.edit-title').show().focus().prev('h3').hide();
  // },

  // escapeTitle: function() {
  //   this.$el.find('.edit-title').val('').hide().prev('h3').fadeIn(400);
  // },



  updateTitle: function() {
    var new_title = $(event.target).val().trim();

   
    this.model.set("title", new_title);

    if(this.model.isNew()) {
      this.collection.create(this.model);
          this.collection.add({
          title: "New Project",
          url: "Click to edit",
          body: "Click to edit",
          user_id: this.id.id
        });
    }
    else {
      this.model.save();
    }

  },

   toggleTitle: function() {
    this.$el.find('.edit-title').toggle().focus().prev('h3').toggle();
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

  deleteProject: function() {
    this.model.destroy();
    $(event.currentTarget).toggle('slide');
  },

  addSkill: function() {


    var skill = new app.models.Skill({
        name: "Click here to edit",
        project: this.model
      });
    

    this.model.skillList.add(skill);



    // this.$el.find('#skill-list').append(skill.view.render().el).find('.skill:last').hide().fadeIn();
  }

});