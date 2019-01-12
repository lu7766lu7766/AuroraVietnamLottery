<template>
  <div v-loading="loading">
    <el-tabs v-model="cpName" @tab-click="handleClick">
      <el-tab-pane
          v-for="code in _.keys(options)" :key="code" :label="code.toUpperCase()" :name="code"></el-tab-pane>
    </el-tabs>

    <game v-if="options[cpName]"
          :title="cpName.toUpperCase()"
          :strlen="options[cpName].strlen"
          :length="options[cpName].length" />
  </div>
</template>

<script>
  import ReqMixins from 'mixins/request'

  export default {
    mixins: [ReqMixins],
    components: {
      Game: require('@/Game').default
    },
    data: () => ({
      options: {},
      cpName: 'lo',
      loading: false
    }),
    methods: {
      async dataInit() {
        const res = await this.callApi('options.gameType')
        this.options = _.keyBy(res.data, 'name')
      },
      handleClick(tab) {
        this.cpName = tab.name
      }
    },
    computed: {
      gameTypeID() {
        return this.options[this.cpName].code
      }
    },
    mounted() {
      this.dataInit()
    }
  }
</script>