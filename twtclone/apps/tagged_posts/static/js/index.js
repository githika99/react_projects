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

app.all_tags = []; // init with empty array ; accuumulate all selcted tags here
// ------------------------
app.get_all_selected_tags = function (tag) {
  // if tag already exists in the list, remove it, otherwise add it to list
  if (app.all_tags.includes(tag)) {
    app.all_tags = app.all_tags.filter((item) => item != tag); // remove tag
  } else {
    app.all_tags.push(tag); // add tag
  }
  console.log("all tags:", app.all_tags);
  return app.all_tags;
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

// ----------------------------
app.config.methods = {
  // -----------------------------------
  post_new_entry: function () {
    axios
      .post("/tagged_posts/api/posts", app.vue.new_entry)
      .then(function (res) {
        //axios.post("/tagged_posts/api/posts", {"name": "gipsy"}).then(function (res) {
        console.log(res.data);
        app.vue.new_entry = clone(app.make_entry());
        app.reload();
      });
  },

  // -----------------------------------
  query_for_changed_tags: function (tag) {
    const url = "/tagged_posts/api/posts/?";
    const alltags = app.get_all_selected_tags(tag).join(","); // make it as ONE comma separated string
    const parms = {
      tags: alltags,
    };
    console.log("url params:", url, parms);

    axios({
      method: "get",
      url: url,
      params: parms,
    }).then(function (res) {
      console.log(res.data);
      app.reload();
    });
  },
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
