"use strict";

// utility function to clone an object
function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// container for everything
var app = {};
// convenience function to make an item
app.make_entry = function () {
  return {
    tweet_text: "",
  };
};
// The vue input config object
app.config = {};
// The vue input setup() function returns the data to be exposed
app.config.setup = function () {
  return {
    entries: Vue.ref([]),
    new_entry: Vue.ref(clone(app.make_entry())),
  };
};

// the vue methods to be exposed
app.config.methods = {};
app.config.methods.post_new_entry = function () {
  axios.post("/tagged_posts/api/posts", app.vue.new_entry).then(function (res) {
    console.log(res.data);
    app.vue.new_entry = clone(app.make_entry());
    app.reload();
  });
};

app.reload = function () {
  // then reload any saved data
  axios.get("/tagged_posts/api/posts").then(function (res) {
    console.log(res.data);
    app.vue.tweets = res.data.tweets;
    app.vue.tags = res.data.tags;
  });
};

// make the vue app
app.vue = Vue.createApp(app.config).mount("#app");
app.reload();
