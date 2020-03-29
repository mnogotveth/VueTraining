<template>
  <div id="app">
      <div class="message">
          <MessageList :messages="$store.state.messages"/>
          <Form v-on:send-message="sendMessage"/>
      </div>
  </div>
</template>

<script>
    import MessageList from "./components/MessageList";
    import Form from "./components/Form";
export default {
  name: 'App',
  components: {
    MessageList,
    Form
  },
  data: () => ({
    messages: [],
    message: "",
    nick: ""
  }),
  mounted: function () {
    setInterval(this.receiveMessage, 1000);
  },
  methods: {
    receiveMessage() {
      this.$store.dispatch('receiveMessage');
    },
    sendMessage(messageObj) {
      this.$store.dispatch('sendMessage', messageObj);
    }
  }
}
</script>

<style>
    .message{
        justify-content: center;
    }
</style>