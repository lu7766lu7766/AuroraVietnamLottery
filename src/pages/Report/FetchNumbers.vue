<template>
  <div>
    <h1>Fetch Numbers</h1>
    <v-ons-list>
      <v-ons-list-item>
        <div class="center">
          <el-date-picker
              v-model="data.date"
              type="date"
              placeholder="Select a date you want to fetch">
          </el-date-picker>
        </div>
      </v-ons-list-item>

      <enter-btn :is-disabled="!validation.valid" @click="submit" />
    </v-ons-list>
  </div>
</template>

<script>
  import ReqMixins from 'mixins/request'
  import { Validator } from 'vee-validate'

  export default {
    mixins: [ReqMixins],
    components: {
      EnterBtn: require('@/EnterBtn').default
    },
    data: () => ({
      validator: null,
      validation: {
        valid: false,
        errors: []
      },
      data: {
        date: ''
      }
    }),
    watch: {
      async 'data.date'() {
        // 最多抓7天前
        const {valid: valid1, errors: errors1} =
          await this.validator.verify(this.data.date, `required`)
        const minDate = moment().subtract(7, 'days').format('YYYY-MM-DD')
        const maxDate = moment().format('YYYY-MM-DD')
        const valid2 = moment(this.data.date).isBetween(minDate, maxDate, null, '[]')
        const errors2 = valid2
          ? []
          : [`The time must be between ${minDate} and ${maxDate}.`]
        this.validation.valid = valid1 && valid2
        this.validation.errors = _.concat([], errors1, errors2)
      }
    },
    methods: {
      submit() {
        this.callApi(async () =>
        {
          this.$api.report.fetchNumbers(_.pick(this.data, ['date']), {
            s: this.sMsg,
            f: this.fMsg
          })
        })
      }
    },
    async mounted() {
      this.validator = new Validator()
    }
  }
</script>