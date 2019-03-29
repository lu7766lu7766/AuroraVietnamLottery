<template>
  <div v-loading="loading">
    <h1>{{ this.title }}</h1>
    <v-ons-list>
      <v-ons-list-item v-for="index in _.range(0, length)" :key="index">
        <div class="center">
          <v-ons-input :placeholder="'Number ' + (index + 1)"
                       float
                       :name="'number'+index"
                       v-validate="'required|integer|length:' + strlen"
                       v-model="data.numbers[index]">
          </v-ons-input>
          <span class="el-message-box__errormsg"
                v-if="errors.has('number'+index)">
            {{ errors.first('number'+index) }}
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
      const numbers = new Array(this.length)
      // let val = ''
      // while (val.length < this.strlen) val += '0'
      // _.fill(numbers, val)
      return {
        data: {
          numbers,
          point: 100
        }
      }
    },
    watch: {
      title() {
        this.$nextTick(() =>
        {
          this.$validator.validate()
        })
      }
    },
    methods: {
      async submit() {
        await this.callApi('bet', {
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
      }
    },
    mounted() {
      this.$validator.validate()
    }
  }
</script>