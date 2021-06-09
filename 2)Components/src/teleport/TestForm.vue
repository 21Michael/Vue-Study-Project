<template>
  <div class="wrapper">
    <form @submit.prevent="onSubmit">
      <input type="text" ref="input"/>
      <button type="submit">Submit</button>
    </form>
  </div>
  <!-- 1)TELEPORT COMPONENT - allows to define in witch html elements will be inset component:
      - without teleport ErrorBoundry will be placed inside of current component (semantically wrong);
      - with teleport we can put ErrorBoundry to <body/> element;
   -->
  <teleport to="#app">
    <ErrorBoundry v-if="!isValid">
      <h2>Error: {{ errorInform }}</h2>
      <button @click="isValid = true">OK</button>
    </ErrorBoundry>
  </teleport>
</template>

<script>
import ErrorBoundry from "../slots/ErrorBoundry";

export default {
  name: "TestForm",
  components: { ErrorBoundry },
  data() {
    return {
      isValid: true,
      errorInform: ''
    }
  },
  methods: {
    onSubmit() {
      const val = this.$refs.input.value;
      if(!val) {
        this.isValid = false;
        this.errorInform = 'empty input!!!'
      }
    }
  }

}
</script>

<style scoped>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
  }
  form {
    padding: 20px 195px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 10px;
  }
</style>