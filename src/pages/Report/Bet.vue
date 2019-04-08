<template>
  <el-row v-loading="loading">
    <el-tabs v-model="search.isSettle">
      <el-tab-pane v-for="(name, code) in options.tab" :key="code" :label="name" :name="code"></el-tab-pane>
    </el-tabs>

    <v-ons-card v-for="(data, index) in datas" :key="index">
      <v-ons-list>
        <!--<v-ons-list-header>Default</v-ons-list-header>-->
        <v-ons-list-item>
          <el-col :span="8">
            Time:
          </el-col>
          <el-col :span="16">
            {{ data.created_at | dateTime }}
          </el-col>
        </v-ons-list-item>

        <v-ons-list-item>
          <el-col :span="8">
            Open:
          </el-col>
          <el-col :span="16">
            {{ data.lotteries_date | date }}
          </el-col>
        </v-ons-list-item>

        <v-ons-list-item>
          <el-col :span="8">
            Game:
          </el-col>
          <el-col :span="16">
            {{ data.game_type.name.toUpperCase() }}
          </el-col>
        </v-ons-list-item>

        <v-ons-list-item>
          <el-col :span="8">
            Bet:
          </el-col>
          <el-col :span="16">
            {{ data.bet_point }}
          </el-col>
        </v-ons-list-item>

        <v-ons-list-item>
          <el-col :span="8">
            Numberts:
          </el-col>
          <el-col :span="16">
            {{ _.map(data.numbers, 'number').join(', ') }}
          </el-col>
        </v-ons-list-item>

        <v-ons-list-item>
          <el-col :span="8">
            Win:
          </el-col>
          <el-col :span="16">
            {{ data.win_point }}
          </el-col>
        </v-ons-list-item>

      </v-ons-list>
    </v-ons-card>

  </el-row>
</template>

<script>
  import ReqMixins from 'mixins/request'
  import PaginateMixins from 'mixins/paginate'

  export default {
    mixins: [ReqMixins, PaginateMixins],
    data: () => ({
      options: {
        tab: {
          '0': 'Wager',
          '1': 'Settle'
        },
        gameType: []
      },
      search: {
        isSettle: '0'
      },
      datas: []
    }),
    watch: {
      'search.isSettle'() {
        this.datas = []
        this.getDatas()
      }
    },
    methods: {
      onBottom() {
        if (this.paginate.page < this.lastPage)
        {
          this.onPageChange(this.paginate.page + 1)
        }
      },
      async getDatas() {
        const res = await this.$api.report.getBetDetail(this.requestBody)
        this.datas = res.data
      },
      async getTotal() {
        const res = await this.$api.report.getBetTotal(this.requestBody)
        this.paginate.total = res.data.total
      },
      onSearch() {
        this.callApi(() =>
        {
          axios.all([this.getDatas(), this.getTotal()])
        })
      },
      onPageChange(page) {
        this.paginate.page = page
        this.callApi(this.getDatas)
      }
    },
    mounted() {
      this.onSearch()
      this.$bus.on('onBottom', this.onBottom)
    },
    destroyed() {
      this.$bus.off('onBottom')
    }
  }
</script>