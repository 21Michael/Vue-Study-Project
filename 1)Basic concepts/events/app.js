const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      value: '',
      value2: '',
      value3: '',
      confirmedValue: ''
    };
  },
  // METHODS - use for event-binding
  methods: {
    confirm(){
      this.value2 && (this.confirmedValue = this.value2);
    },
    setName(event, lastName) {
      event.preventDefault();
      this.value = event.target.value + ' ' + lastName;
    },
    setName2(event) {
      this.value2 = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
