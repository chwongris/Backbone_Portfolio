app.models.User = Backbone.Model.extend({

 initialize: function() {
    this.projectList = new app.collections.ProjectList();
    this.projectList.url = '/users/' + this.id + '/projects';
    this.projectList.on("reset", this.updateCounts);
  },

  url: function() {
    return '/users/' + this.id;
  },

  full_name: function(){
    return this.attributes.first_name + " " + this.attributes.last_name;
  }


});
