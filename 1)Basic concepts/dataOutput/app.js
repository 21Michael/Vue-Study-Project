const app = Vue.createApp({
  data() {
    return {
      name: 'Mikhail',
      surname: 'Rudiev',
      linkInsta: 'https://www.instagram.com/',
      htmlData: '<p>text text text text text text</p>'
    };
  },
  // COMPUTED PROPS - use for data binding;
  // RIGHT WAY for returning data: these data will be updated only if some of inner values will be changed.
  computed: {
    // *These methods threaded like properties (don't name it like methods:  ̶g̶e̶t̶F̶u̶l̶l̶N̶a̶m̶e̶ -> fullName)
    fullName() {
      return `Full name: ${this.name} ${this.surname}`;
    },
    link() {
      return this.linkInsta;
    }
  },
  //BAD WAY for returning data: every time when we smth updating on the page all methods used for returning data will be called.
  methods: {
    getFullName() {
      return `Full name: ${this.name} ${this.surname}`;
    },
    getLink(){
      return this.link;
    }
  }
});

app.mount('#assignment');