const app = Vue.createApp({
  data() {
    return {
      demoA: false,
      demoB: false,
      demoC: false,
    };
  },
  computed: {
    //for hiding more difficult logic:
    demoBClass() {
      return { active2: this.demoA && this.demoB && this.demoC };
    }
  },
  methods: {
    setA(){
      this.demoA = !this.demoA;
    },
    setB(){
      this.demoB = !this.demoB;
    },
    setC(){
      this.demoC = !this.demoC;
    },
  }
});

app.mount('#styling');

