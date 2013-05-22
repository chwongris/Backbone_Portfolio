describe("A Skill", function() {

  var skill;

  beforeEach(function() {
    skill = new app.models.Skill({
      name: "Ruby"
    });

    

  });

  it("should be able to retreive the name", function() {
    expect(skill.get("name")).toEqual("Ruby");
  });

  describe("Setting an attribute", function() {
    beforeEach(function(){
      skill.set({
        "name" : "SQL"
      });
    });

    it("Should update the name", function(){
      expect(skill.get("name")).toEqual("SQL");
    });


    it("should not have an id because its not persisted", function() {
      expect(skill.id).toBeUndefined();
    });

  });
  
   describe("Creating a skill with no name", function() {
    beforeEach(function(){
    no_skill = new app.models.Skill();
    no_skill.isValid();
    });

    it("should return a validation error", function() {
      expect(no_skill.validationError).toEqual("need to name a Skill");
    });

  });
   
  // describe("Persistance in local storage", function() {
  //   beforeEach(function () {
  //     // var ProjectList = new app.collection
  //   });


  //   it("Should have an id", function(){
  //     expect(project.id).toBe();
  //   });

  // });  

});