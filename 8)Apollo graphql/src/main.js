import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import App from './App.vue';
import Vue from 'vue'
import VueApollo from 'vue-apollo'

Vue.use(VueApollo)

const httpLink = createHttpLink({
  uri: 'https://gbrme8zgjg.execute-api.us-east-1.amazonaws.com/dev/graphql',
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  el: '#app',
  // inject apolloProvider here like vue-router or vuex
  apolloProvider,
  render: h => h(App),
})