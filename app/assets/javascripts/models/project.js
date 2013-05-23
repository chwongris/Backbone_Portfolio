app.models.Project = Backbone.Model.extend({

  initialize: function() {
    this.skillList = new app.collections.SkillList();
//     this.skillList.add([
//   {name: "Jquery"},
//   {name: "Ajax"}
// ]);
   }
    
  //  updateTitle: function() {
  //   this.attributes.title = this.attributes.title + " Changed";
  // }

});