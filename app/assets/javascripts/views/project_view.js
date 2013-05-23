app.views.ProjectView = Backbone.View.extend({

  tagName: 'div',
  id: 'project-page',
  template: JST['templates/project'],

   initialize: function() {
    this.projectList = new app.collections.ProjectList();
    this.projectList.fetch();
    this.listenTo(this.projectList, 'change:title', this.render);
    // if(this.options.project)
    //   this.model.set({ project_id: this.options.project.id });
    // this.model.view = this;
    // this.model.bind("change", this.setName);
  },

  render: function() {
    this.$el.html(this.template());

    // Create a dummy project if there isn't one already
    if(this.projectList.length == 0) {
      var bucket_list = this.projectList.create({
        title: "Bucketlist",
        url: "https://github.com/dmgarland/BucketListApp",
        body: "<p>I worked on a Rails application that created a todo list of things I want to do before I die.</p> <ul> <li>I integrated Google maps and used Geocoding to determine where my activities would take place.</li> <li>I used AJAX to asynchronously update markers on the map when the center changed.</li> <li>I displayed crime statistics on a chart using an API call and Morris.js</li> </ul>"
      });
    }

    // Create a blank project for us to fill in.
    this.projectList.add({
      title: "New Project",
      url: "Click to edit",
      body: "Click to edit"
    });

    var _this = this;

    this.projectList.forEach(function(project) {
      var view = new app.views._Project({ model: project });
      _this.$el.find('#project-list').append(view.render().el);
     
    });

    var me = new app.models.User({
      first_name: "Chris",
      last_name: "Wong",
      bio: "Coder from NYC",
      mission: "Make Cool Apps",
      image_url: 'uploads/chwong.jpg'
    });

    var bio = new app.views.UserView({
      model: me 
    }).render();

    this.$el.find('#user-bio').html(bio.el);

    return this;
  }
});