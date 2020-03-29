<template>
    <form @submit.prevent="sendMessage">
        <input type="text" v-model="nick">
        <textarea v-model="message"></textarea>
        <input type="button" value="Send" @click="sendMessage">
    </form>
</template>

<script>
    export default {
      data() {
        return {
          nick: '',
          message: ''
        }
      },
      methods: {
        sendMessage() {
          if (!this.nick.length || !this.message.length)
          {
            return;
          } else {
            this.$emit('send-message', {
              nick: this.nick,
              message: this.message
            });
            this.message = '';
          }
        }
      }
    }
</script>