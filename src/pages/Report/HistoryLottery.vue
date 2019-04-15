<template>
  <section>
    <v-ons-card v-for="(data, index) in datas" :key="index">
      <v-ons-list>
        <!--<v-ons-list-header>Default</v-ons-list-header>-->
        <v-ons-list-item>
          <el-col :span="5">
            Date:
          </el-col>
          <el-col :span="16">
            {{ data.date | date }}
          </el-col>
        </v-ons-list-item>
        <v-ons-list-item v-for="(nums, index) in _.chunk(getNumbers(data), 2)" :key="index">
          <el-col :span="12" v-if="nums[0]">
            <el-col :span="11">
              Num{{ index*2 + 1 }}:
            </el-col>
            <el-col :span="11">
              {{ nums[0] }}
            </el-col>
          </el-col>
          <el-col :span="12">
            <el-col :span="11" v-if="nums[1]">
              Num{{ index*2 + 2 }}:
            </el-col>
            <el-col :span="11">
              {{ nums[1] }}
            </el-col>
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
      datas: []
    }),
    methods: {
      getNumbers(data) {
        const res = []
        _.range(1, 28).forEach(num =>
        {
          res.push(data['number' + num])
        })
        return res
      },
      async getDatas() {
        const res = await this.$api.report.getHistoryLottery(this.requestBody)
        this.datas = _.concat(this.datas, res.data)
      },
      async getTotal() {
        const res = await this.$api.report.getHistoryLotteryTotal(this.requestBody)
        this.paginate.total = res.data.total
      }
    },
    mounted() {
      this.doSearch()
    }
  }
</script>