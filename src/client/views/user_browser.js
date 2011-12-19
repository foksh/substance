s.views.UserBrowser = Backbone.View.extend({

  events: {
    
  },

  initialize: function(options) {
    this.results = new s.views.Results({ model: this.model, id: "results" });
  },

  render: function() {
    $(this.el).html(s.util.tpl('user_browser', {
      user: this.model.user
    }));
    
    this.$(this.results.render().el).appendTo(this.el);
    return this;
  }

});
