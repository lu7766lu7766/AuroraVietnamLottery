<template>
  <div>
    <h1>Create User</h1>
    <v-ons-list>
      <v-ons-list-item>
        <div class="center">
          <el-input placeholder="Please input user ID"
                    name="userName"
                    v-validate="'required'"
                    v-model="data.userName">
            <template slot="prepend">User ID</template>
          </el-input>
          <span class="el-message-box__errormsg"
                v-if="errors.has('userName')">
            {{ errors.first('userName') }}
          </span>
        </div>
      </v-ons-list-item>

      <v-ons-list-item>
        <div class="center">
          <el-input placeholder="Please input password"
                    type="password"
                    name="password"
                    v-validate="'required'"
                    v-model="data.password">
            <template slot="prepend">Password</template>
          </el-input>
          <span class="el-message-box__errormsg"
                v-if="errors.has('password')">
            {{ errors.first('password') }}
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

      <v-ons-list-item>
        <div class="center">
          <el-select v-if="User.isAdmin" v-model="data.roleID" placeholder="Role">
            <el-option
                v-for="(name, id) in options.Role"
                :key="id"
                :label="name"
                :value="id">
            </el-option>
          </el-select>
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
          this.$api.user.create(_.pick(this.data, ['userName', 'password', 'nickName', 'roleID']), {
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