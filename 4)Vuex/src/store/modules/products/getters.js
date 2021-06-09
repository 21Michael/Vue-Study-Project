/*
  GETTER - same as computed properties in components. It cashing the value and updates it only when some of values
(dependencies) that being used inside of it were changed +
  BUILD:
    getters: {
      getterMethod: state => {
        return state.value.filter(item => item.num >= 10);
      }
    }
  USAGE INSIDE COMPONENTS (GOOD PRACTICE):
    - right:
      computed: {
        computedMethod() {
         return this.$store.getters.getterMethod;
        }
      }
    - mapper:
      import { mapGetters } from 'vuex';
      computed: {
        ...
        ...mapGetters(['getterMethod'])
      }
 */
export default {
  products ({ products }) {
    return products;
  }

}