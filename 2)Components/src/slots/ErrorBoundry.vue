<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ErrorBoundry"
}
</script>

<style scoped>
  div {
    position: fixed;
    top: 33%;
    right: 32.5%;
    padding: 50px 195px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 10px;
    background-color: palevioletred;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>