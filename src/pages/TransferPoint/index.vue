<template>
  <div>
    <h1>Transfer point</h1>
    <v-ons-list>
      <v-ons-list-item>
        <div class="center">
          <el-input placeholder="Please input target User ID"
                    name="userID"
                    v-validate="'required'"
                    v-model="data.userName">
            <template slot="prepend">UserID</template>
          </el-input>
          <span class="el-message-box__errormsg"
                v-if="errors.has('userID')">
            {{ errors.first('userID') }}
          </span>
        </div>
      </v-ons-list-item>

      <v-ons-list-item>
        <div class="center">
          <el-input-number placeholder="Please input how much point you want to transfer"
                           name="point"
                           v-validate="'required|integer|min:0'"
                           v-model="data.point"
                           :step="100"
                           :min="100">
          </el-input-number>
          <span class="el-message-box__errormsg"
                v-if="errors.has('point')">
            {{ errors.first('point') }}
          </span>
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
    components: {
      EnterBtn: require('@/EnterBtn').default
    },
    data: () => ({
      data: {
        userName: '',
        point: 0
      }
    }),
    methods: {
      submit() {
        this.callApi(async () =>
        {
          this.$api.user.transfer(_.pick(this.data, ['userName', 'point']), {
            s: () =>
            {
              this.$notify({
                title: 'Result',
                message: 'Success',
                position: 'bottom-left'
              })
              this.$store.commit(UserType.changePoint, -this.data.point)
            },
            f: errorMessges =>
            {
              this.$notify({
                title: 'Result',
                message: errorMessges.join('<br>'),
                position: 'bottom-left'
              })
            }
          })
        })
      }
    },
    mounted() {
      this.$validator.validate()
    }
  }
</script>