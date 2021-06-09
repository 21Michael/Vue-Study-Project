<template>
  <section>
    <header>
      <h1>1) Components + slots:</h1>
    </header>
    <add-contact @add-friend="addFriend"/>
    <ul>
    <!-- 1)CHANGE DATA BY CHILD COMPONENT:
        - transfer method to the child: :onToggle="toggleFavoriteStatus"
        - listen for custom event created in child: @toggle-favorite="toggleFavoriteStatus"
     -->
    <!-- 2)CHAIN OF PROPS:
      <friend-contact
        @remove-friend="removeFriend"
      ></friend-contact>
    -->
        <friend-contact
          v-for="friend in friends"
          :key="friend.id"
          :id="friend.id"
          :name="friend.name"
          :phone-number="friend.phone"
          :email-address="friend.email"
          :is-favorite="friend.isFavorite"
          :onToggle="toggleFavoriteStatus"
          @toggle-favorite="toggleFavoriteStatus"
        />
    </ul>
  </section>
  <section>
    <header>
      <h1>2) Dynamic Components:</h1>
    </header>
    <div class="wrapper">
      <span>Show component: </span>
      <button @click="changeComponent('Component1')">1</button>
      <button @click="changeComponent('Component2')">2</button>
    </div>
    <div class="wrapper">
      <!-- 3)DYNAMIC COMPONENTS:
          - by v-if logic:
              <Component1 v-if="activeComponent === 'Component1'"/>
              <Component2 v-if="activeComponent === 'Component2'"/>
          - by special element <component :is="name of component"/>:
              <component :is="activeComponent"></component> - every time destroys and rebuild from scratch (erase all data that were written to inputs)
                                  or
              <keep-alive> - cash data of component (written in input)
                <component :is="activeComponent"></component>
              </keep-alive>
       -->
      <keep-alive>
        <component :is="activeComponent"></component>
      </keep-alive>
    </div>
  </section>
  <section>
    <header>
      <h1>3) Teleport Components:</h1>
    </header>
    <TestForm/>
  </section>
  <section>
    <header>
      <h1>4) Working with forms:</h1>
    </header>
    <TheForm/>
  </section>
</template>

<script>
import AddContact from "./components/AddContact";
import Component1 from "./dynamicComponents/Component1";
import Component2 from "./dynamicComponents/Component2";
import TestForm from "./teleport/TestForm";
import TheForm from "./workWithForms/TheForm";

export default {
  components: { AddContact, Component2, Component1, TestForm, TheForm },
  data() {
    return {
      activeComponent: 'Component1',
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '0123 45678 90',
          email: 'manuel@localhost.com',
          isFavorite: true,
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '0987 654421 21',
          email: 'julie@localhost.com',
          isFavorite: false,
        },
      ],
    };
  },
  // 4)PROVIDE METHOD - provides an access to data and methods for ancestors children (not direct) that don't used in child elements in order to remove pass-through data and methods;
  provide() {
    return {
      removeFriend: this.removeFriend
    }
  },
  methods: {
    changeComponent(component) {
      this.activeComponent = component;
    },
    toggleFavoriteStatus(friendId) {
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
    addFriend(data) {
      const newId = String(Math.floor(Math.random() * 100));
      this.friends.push({ id: newId, ...data });
    },
    removeFriend(id) {
      console.log(id)
      this.friends = this.friends.filter(val => val.id !== id);
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: 'Jost', sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
 button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  margin: 0 10px;
}
 button:hover,
 button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
.wrapper {
  margin: 0 auto;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>