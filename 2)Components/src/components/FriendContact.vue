<template>
  <Wrapper>
    <template v-slot:header>
      <h3>HEAD</h3>
    </template>
    <li>
      <h2>{{ name }} {{ isFavorite ? '(Favorite)' : ''}} {{ supplement }}</h2>
      <!--CHANGING PARENTS STATE:
        1)Transfer parents method through props to the child: @click="onToggle(id)" - bad
        2)Use custom event inside of children's method: @click="toggleFavorite" - good
      -->
      <button @click="toggleFavorite">Toggle Favorite</button>
      <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
      <!--PASS THROUGH DATA:
        - chain of props: <remove-button :id="id" @remove-friend="$emit('remove-friend', $event)"/>
        - provide, inject methods: <remove-button :id="id"/>
      -->
      <div class="removeButton">
        <remove-button :id="id"/>
      </div>
      <ul v-if="detailsAreVisible">
        <li>
          <strong>Phone:</strong>
          {{ phoneNumber }}
        </li>
        <li>
          <strong>Email:</strong>
          {{ emailAddress }}
        </li>
      </ul>
    </li>
  </Wrapper>
</template>

<script>
import RemoveButton from "./components/RemoveButton";
import Wrapper from "../slots/Wrapper";

export default {
  //LOCAL COMPONENT REGISTRATION:
  components: { RemoveButton, Wrapper },
  /* DEFINING PROP TYPES + validation:
      - props: ['id'];
      - props: {
          id: String,
        };
      - id: {
          type: Boolean,
          required: false,
          default: false,
          validator: function(value) {}
        };
  */
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
    onToggle: Function,
    supplement: String
  },
  /* CUSTOM EVENT TYPES + validation:
      - emits: ['toggle-favorite'];
      - emits: {
          'toggle-favorite': function(){}
        },
  */
  emits: {
    'toggle-favorite': function(id) {
      if(!id) {
        console.log('Argument id wasn\'t provided!!!' );
        return false;
      }
      return true;
   }, 'remove-friend': () => true
  },
  data() {
    return {
      detailsAreVisible: false
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      //CUSTOM-EVENTS - creating an event that could be caught by parent element.
      this.$emit('toggle-favorite', this.id);
    },
  },
};
</script>

<style scoped>
  li {
    position: relative;
  }
  .removeButton {
    position: absolute;
    top: 5px;
    right: 5px;
  }
</style>