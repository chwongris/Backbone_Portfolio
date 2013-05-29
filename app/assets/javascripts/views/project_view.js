app.views.ProjectView = Backbone.View.extend({

  tagName: 'div',
  id: 'project-page',
  template: JST['templates/project'],

  initialize: function() {
    var _this = this;

    _this.model.projectList.fetch({
      success : function(projectList){

        var skillat = [];
    // Create a blank project for us to fill in.
    _this.model.projectList.add({
      title: "New Project",
      url: "Click to edit",
      body: "Click to edit",
      user_id: _this.model.id
    });

    _this.listenTo(_this.model.projectList, 'change', _this.render);
    _this.render();
    
      }
    });
  },

  render: function() {

    var _this = this;
    this.$el.html(this.template());


    // Create a dummy project if there isn't one already


    this.model.projectList.forEach(function(project) {
      var view = new app.views._Project({ model: project, id: _this.model, collection: _this.model.projectList });
      _this.$el.find('#project-list').append(view.render().el);

    });

    var bio = new app.views.UserView({ model: this.model, collection: this.model.followers }).render();

    this.$el.find('#user-bio').html(bio.el);

    

    return this;
  }
});