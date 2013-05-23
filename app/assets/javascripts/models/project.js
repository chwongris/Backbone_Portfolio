app.models.Project = Backbone.Model.extend({

  initialize: function() {
    this.skillList = new app.collections.SkillList();
   },
    
  getSkills: function(){
    this.skillList.fetch();
    return this.skillList.where({ project_id : this.id });
  }

});