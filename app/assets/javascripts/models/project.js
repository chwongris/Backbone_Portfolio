app.models.Project = Backbone.Model.extend({

  url: function() {

    var url = '/users/' + this.attributes.user_id + '/projects';

    if(!this.isNew()) {
      url += '/' + this.id;
    }

    return url;

  },

  initialize: function() {
    this.skillList = this.skillList || new app.collections.SkillList();
  },

  // getSkills: function(){
  //   this.skillList.fetch();
  //   return this.skillList.where({ project_id : this.id });
  // },

  parse: function(response) {
    var skills_json = response.skills;
    //response.skills = new app.collections.SkillList(skills_json);
    this.skills = new app.collections.SkillList(skills_json);
    return response;
  },

  toJSON: function() {
    // json = { project : this.attributes };
    var skills_attributes = [];
    this.skillList.forEach(function(skill) {
      skills_attributes.push({ id: skill.get("id"), name: skill.get("name")});
    });

    if (skills_attributes.length == 0) {
    var json = { project : _.extend(this.attributes) };
    delete json.project.skills;
    return json;
    } else {
    var json = { project : _.extend(this.attributes, { 'skills_attributes': skills_attributes }) };
    delete json.project.skills;
    return json;
    }

  }

});

