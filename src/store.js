import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const apiUrl = 'http://localhost:3000';

export default new Vuex.Store({
  state: {
    messages: []
  },
  mutations: {
    setMessages(state, messages) {
      state.messages = messages;
    },
    addMessage(state, message) {
      state.messages.push(message);
    }
  },
  actions: {
    receiveMessage({commit}) {
      axios.get(apiUrl).then(response => {
        commit('setMessages', response.data);
      });
    },
    sendMessage({commit}, data) {
      axios.post(apiUrl, JSON.stringify(data)).then(() => commit('addMessage', data))
    }
  },
  getters: {
    getLength(state) {
      return state.messages.length;
    }
  }
});