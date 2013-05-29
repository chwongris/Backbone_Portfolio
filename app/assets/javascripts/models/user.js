app.models.User = Backbone.Model.extend({

 initialize: function() {
  this.projectList = new app.collections.ProjectList();
  this.projectList.url = '/users/' + this.id + '/projects';
  this.projectList.on("reset", this.updateCounts);

  this.followers = new app.collections.UserList();
  this.followers.url = '/users/' + this.id + '/followers';
  this.followers.on("reset", this.updateCounts);
 },

  url: function() {
  return '/users/' + this.id;
},

full_name: function(){
  return this.attributes.first_name + " " + this.attributes.last_name;
},

toJSON: function() {
  var follower_ids = [];
  this.followers.forEach(function(follower) {
    follower_ids.push(follower.get("id"));
  });
  var json = { user : _.extend(this.attributes, { 'follower_ids' : follower_ids})}; 
  return json;
}


});
