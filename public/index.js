/* global Vue, VueRouter, Vue2Filters, axios */

var HomePage = {
  template: "#home-page",
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      books: [],
      searchTerm: '',
      newBook: {title: '', author: '', replace: false}
    };
  },
  created: function() {
    axios.get('/api/books').then(function(response) {
      console.log(response.data.books);
      this.books = response.data.books;
    }.bind(this));
  },
  methods: {
    addBook: function() {
      axios.post('/api/books', this.newBook).then(function(response) {
        this.books.push(response.data.book);
      }.bind(this));
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});

Vue.use(Vue2Filters);