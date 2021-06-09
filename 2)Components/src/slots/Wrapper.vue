<!--
  SLOTS - reusable 2)Components wrappers (reminds 2)Components + props.children from React):
    - simple wrappers (reusable wrapper component):
        <div>
          <slot></slot>
        </div>
      ==>
        <wrapper>
          <template v-slot:default>
            ... html ...
          </template>
        </wrapper>
    - named slots (reusable difficult html template):
        <div>
          <header>
            /* 1)SPECIAL DIRECTIVES: $slots - special variable that gives an access to 2)Components that were inset to the slot
            after mounting, through witch we can check if smth was inset inside of slot; */
            <slot name="header" v-if="$slots.header"> // 1.1) if nothing was inset to header slot, header will not be shown;
               ... default html ... // 2)DEFAULT COMPONENTS: if nothing was inset to header slot, will be shown <default html template/>;
            </slot>
          </header>
          <main>
            <slot name="main"></slot>
          </main>
          <footer>
            <slot name="footer"></slot>
          </footer>
        </div>
      ==>
        <wrapper>
            <template v-slot:header>
              ... html ...
            </template>
            <template #main> // 3)SHORT FORM: v-slot="main" => #main
              ... html ...
            </template>
            <template v-slot:footer>
              ... html ...
            </template>
        </wrapper>
    - scoped slots (pass data from slot to inner insetting 2)Components):
        <div>
          <slot :data1="data1" ^data2="data2" ></slot>
        </div>
      ==>
        <wrapper>
          // 1)SLOT PROPS - object that contains all passed properties (data1, data2) to that slot from slot component
          <template #default="slotProps">
            <p>{{ slotProps.data1 }}</p> // access to slot's properties
            <aside>{{ slotProps['data2'] }}</aside>
          </template>
        </wrapper>
-->
<template>
  <div>
    <header>
      <slot name="header">
        <h3>DEFAULT HEAD</h3>
      </slot>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Wrapper",
  data() {
    return {
      supplement: '!!!'
    }
  }
}
</script>

<style scoped>
  header {
    background-color: rgba(112, 128, 144, 0.71);
    color: black;
    padding: 1px;
    margin-bottom: 0;
  }
</style>