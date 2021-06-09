/*
  ACTIONS - methods that allow asynch manipulation of the state by committing mutations (works like events);
  BUILD:
    actions: {
      actionsMethod(context) {
        context.commit('mutationMethod');
      }
    }
  USAGE INSIDE COMPONENTS (GOOD PRACTICE):
    - right:
        methods: {
          method(value)  {
            this.$store.dispatch('actionsMethod', { value });
          }
        }
    - mapper:
        import { mapActions } from 'vuex';
        methods: {
          method()  {
            ...
            ...mapActions(['actionsMethod'])
                          or
             ...mapActions({
                customKeyForActionsMethod: 'actionsMethod'
             })
          }
        }
 */

export default {

}