<template>
  <div id="wrapper">
    <form @submit.prevent="onSubmit">
      <div class="item">
        <span>Name: </span>
        <input type="text" v-model="name"/>
      </div>
      <div class="item">
        <span>Phone: </span>
        <input type="tel" v-model="phone"/>
      </div>
      <div class="item">
        <span>Email: </span>
        <input type="email" v-model="email"/>
      </div>
      <div class="buttonWrapper">
        <button type="submit">Add a new friend</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddContact",
  emits: ['add-friend'],
  data() {
    return {
      name: '',
      phone: '',
      email: ''
    }
  },
  methods: {
    onSubmit() {
      this.$emit('add-friend', { name: this.name, phone: this.phone, email: this.email })
    }
  }
}
</script>

<style scoped>
  div #wrapper {
    display: flex;
    justify-content: center;
  }
  form {
    padding: 20px 195px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 10px;
  }
  div .item {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
  }
  div .buttonWrapper {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
  span {
    margin-right: 15px;
  }
</style>