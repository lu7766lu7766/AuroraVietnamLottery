<template>
  <section>
    <el-tabs v-model="search.identity">
      <el-tab-pane v-for="(name, code) in options" :key="code" :label="name" :name="code"></el-tab-pane>
    </el-tabs>
    <v-ons-card v-for="(data, index) in datas" :key="index">
      <v-ons-list>
        <!--<v-ons-list-header>Default</v-ons-list-header>-->
        <v-ons-list-item>
          <el-col :span="8">
            Source:
          </el-col>
          <el-col :span="16">
            {{ data.source_user.nick_name }}
          </el-col>
        </v-ons-list-item>
        <v-ons-list-item>
          <el-col :span="8">
            Target:
          </el-col>
          <el-col :span="16">
            {{ data.target_user.nick_name }}
          </el-col>
        </v-ons-list-item>
        <v-ons-list-item>
          <el-col :span="8">
            Point:
          </el-col>
          <el-col :span="16">
            {{ data.point }}
          </el-col>
        </v-ons-list-item>
        <v-ons-list-item>
          <el-col :span="8">
            Time:
          </el-col>
          <el-col :span="16">
            {{ data.created_at }}
          </el-col>
        </v-ons-list-item>
      </v-ons-list>
    </v-ons-card>
  </section>
</template>

<script>
  import ScrollBottom from 'mixins/scrollBottom'

  export default {
    mixins: [ScrollBottom],
    data: () => ({
      options: {
        '-1': 'Seller',
        '1': 'Buyer'
      },
      search: {
        identity: '1'
      },
      datas: []
    }),
    watch: {
      'search.identity'() {
        this.datas = []
        this.doSearch()
      }
    },
    methods: {
      async getDatas() {
        const res = await this.$api.report.getTransferDetail(this.requestBody)
        this.datas = _.concat(this.datas, res.data)
      },
      async getTotal() {
        const res = await this.$api.report.getTransferTotal(this.requestBody)
        this.paginate.total = res.data.total
      }
    },
    mounted() {
      this.doSearch()
    }
  }
</script>