<template>
  <div>
    <h1>Update user profile</h1>
    <v-ons-list>
      <v-ons-list-item>
        <div class="center">
          <span class="el-message--info">
            User ID: {{ User.userName }}
          </span>

        </div>
      </v-ons-list-item>

      <v-ons-list-item>
        <div class="center">
          <el-input placeholder="Please input password"
                    type="password"
                    name="password"
                    v-model="data.password">
            <template slot="prepend">Password</template>
          </el-input>
          <span class="el-message--info el-alert--warning">
            keep empty if you don't want to change!
          </span>
        </div>
      </v-ons-list-item>

      <v-ons-list-item>
        <div class="center">
          <el-input placeholder="Please input nick name"
                    name="nickName"
                    v-model="data.nickName">
            <template slot="prepend">Nick Name</template>
          </el-input>
        </div>
      </v-ons-list-item>

      <enter-btn :is-disabled="errors.count() > 0" @click="submit" />
    </v-ons-list>
  </div>
</template>

<script>
  import ReqMixins from 'mixins/request'
  import Role from 'constants/Role'

  export default {
    mixins: [ReqMixins],
    components: {
      EnterBtn: require('@/EnterBtn').default
    },
    data: () => ({
      options: {
        Role: Role.enum()
      },
      data: {
        password: '',
        nickName: User.nickName
      }
    }),
    methods: {
      submit() {
        this.callApi(async () =>
        {
          this.$api.user.updateUser(_.pick(this.data, ['password', 'nickName']), {
            s: () =>
            {
              this.$notify({
                title: 'Result',
                message: 'Success',
                position: 'bottom-left'
              })
              this.$bus.emit('getUserInfo')
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