describe("A Project", function() {

  var project;

  beforeEach(function() {
    project = new app.models.Project({
      title: "My amazing test project"
    });
  });

  it("should be able to retreive the title", function() {
    expect(project.get("title")).toEqual("My amazing test project");
  });

  describe("Setting an attribute", function() {
    beforeEach(function(){
      project.set({
        "title" : "Cool Beans"
      });
    });

    it("Should update the title", function(){
      expect(project.get("title")).toEqual("Cool Beans Changed");
    });


    it("should not have an id because its not persisted", function() {
      expect(project.id).toBeUndefined();
    });

  });
  
  describe("Persistance in local storage", function() {
    beforeEach(function () {
      // var ProjectList = new app.collection
    });


    it("Should have an id", function(){
      expect(project.id).toBe();
    });

  });  

});