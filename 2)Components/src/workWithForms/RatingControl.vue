<template>
  <ul>
    <li :class="{active: modelValue === 'poor'}">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="{active: modelValue === 'average'}">
      <button type="button" @click="activate('average')">Average</button>
    </li>
    <li :class="{active: modelValue === 'great'}">
      <button type="button" @click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  // 1)EMULATING INPUT VALUE: using props: modelValue that controlled by parent component;
  props: ['modelValue'],
  // 2)EMULATING @input event by making the custom event;
  emits: ['update:modelValue'],
  methods: {
    activate(option) {
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: #a00078;
}

.active button {
  color: #a00078;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
}

button {
  width: 100%;
  color: black;
  background-color: transparent;
  padding: 1rem;
  margin: 0;
  box-shadow: none;
  font: inherit;
  border: none;
  cursor: pointer;
}
button:active, button:hover {
  background-color: transparent;
  box-shadow: none;
}
</style>