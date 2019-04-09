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
        password: '',
        nickName: '',
        roleID: ''
      }
    }),
    methods: {
      submit() {
        this.callApi(async () =>
        {
          this.$api.user.createUser(_.pick(this.data, ['userName', 'password', 'nickName', 'roleID']), {
            s: () =>
            {
              this.$notify({
                title: 'Result',
                message: 'Success',
                position: 'bottom-left'
              })
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