<template>
  <div v-loading="loading">
    <h1>{{ this.title }}</h1>
    <v-ons-list>
      <v-ons-list-item v-for="index in _.range(0, length)" :key="index">
        <div class="center">
          <v-ons-input :placeholder="'Number ' + (index + 1)"
                       float
                       :name="'number' + (index + 1)"
                       v-validate="'required|integer|length:' + strlen"
                       v-model="data.numbers[index]">
          </v-ons-input>
          <span class="el-message-box__errormsg"
                v-if="errors.has('number' + (index + 1))">
            {{ errors.first('number' + (index + 1)) }}
          </span>
        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div class="center">
          <el-input-number v-model="data.point"
                           :step="10"
                           :min="100"></el-input-number>
        </div>
      </v-ons-list-item>
      <enter-btn :is-disabled="errors.count() > 0" @click="submit" />
    </v-ons-list>
  </div>
</template>

<script>
  import ReqMixins from 'mixins/request'
  import { UserType } from 'module/user'

  export default {
    mixins: [ReqMixins],
    props: {
      title: {
        type: String,
        required: true
      },
      strlen: {
        type: Number,
        default: 2
      },
      length: {
        type: Number,
        default: 1
      }
    },
    components: {
      EnterBtn: require('@/EnterBtn').default
    },
    data() {
      return {
        data: {
          numbers: _.fill(Array(this.length), ''),
          point: 100
        }
      }
    },
    watch: {
      title() {
        this.data.numbers = _.fill(Array(this.length), '')
        this.$nextTick(() =>
        {
          this.$validator.validate()
        })
      }
    },
    methods: {
      async submit() {
        this.callApi(async () =>
        {
          await this.$api.bet.bet({
            gameTypeID: this.$parent.gameTypeID,
            betPoint: this.data.point,
            numbers: this.data.numbers
          })
          this.$notify({
            title: 'Result',
            message: 'Success',
            position: 'bottom-left'
          })
          this.$store.commit(UserType.changePoint, -this.data.point)
        })
      }
    },
    mounted() {
      this.$validator.validate()
    }
  }
</script>