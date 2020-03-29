<template>
    <div>
        <ul v-if="getLength">
            <li v-for="(item, index) in messages" :key="index">
                {{item.message}}
            </li>
        </ul>
        <span>Total messages: {{getLength}}</span>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
      name: 'MessageList',
      props: [
        'messages'
      ],
      computed: {
        ...mapGetters([
          'getLength'
        ])
      }
    }
</script>