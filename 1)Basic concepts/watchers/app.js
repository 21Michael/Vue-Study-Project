const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  // WATCHERS - properties changing listener (middleware) use for middle data processing;
  watch: {
    counter(newVal, oldVal) {
      console.log(newVal, oldVal)
      if(this.counter > 50) this.counter = 0;
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
