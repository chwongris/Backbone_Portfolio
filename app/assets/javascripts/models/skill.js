app.models.Skill = Backbone.Model.extend({

   validate: function(attr) {
    if (attr.name == undefined) {
      return "need to name a Skill";
    }
  },

  defaults:{
    name: 'Ruby'
  }
});