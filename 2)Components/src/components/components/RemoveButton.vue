<template>
  <div>
    <button class="removeButton" @click="removeFriend(id)">
      <span class="close"></span>
    </button>
  </div>
</template>

<script>
export default {
  name: "RemoveButton",
  props: {
    id: String
  },
  /* REACH PARENT'S ANCESTOR DATA & METHODS WITHOUT PASSING THROUGH PARENT:
      - chain of props: App(@remove-friend="removeFriend") <= FriendContact(@remove-friend="$emit('remove-friend', $event)") <= RemoveButton(@click="removeFriend");
      - INJECT METHOD - provides an access to data and methods of descendant parents (not direct) in order to remove pass-through data and methods;
   */
  //emits: ['remove-friend'],
  inject: ['removeFriend'],
  // methods: { - chain of props;
  //   removeFriend () {
  //     this.$emit('remove-friend', this.id)
  //   }
  // }
}
</script>

<style scoped>
  .removeButton {
    position: relative;
    width: 33px;
    height: 33px;
  }
  .close {
    position: absolute;
    right: 0;
    top:0;
    width: 32px;
    height: 32px;
    opacity: 0.3;
  }
  .close:hover {
    opacity: 1;
  }
  .close:before, .close:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  .close:before {
    transform: rotate(45deg);
  }
  .close:after {
    transform: rotate(-45deg);
  }
</style>