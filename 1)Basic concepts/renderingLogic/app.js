const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue: '',
      goals: []
     };
  },
  methods: {
    addGoal() {
      this.goals.push({ id: Math.floor(Math.random() * 100), val: this.enteredGoalValue });
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    }
  }
});

app.mount('#user-goals');

