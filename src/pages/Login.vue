<template>
  <v-ons-page>
    <!--<v-ons-toolbar modifier="cover-content">-->
    <!--<div class="center">Login</div>-->
    <!--</v-ons-toolbar>-->

    <div style="height: 20vh"></div>

    <div class="col-md-4 center-box">
      <v-ons-card class="col-md-12">
        <v-ons-row>
          <v-ons-col width="30px">
            <v-ons-icon size="30px" icon="md-home"></v-ons-icon>
          </v-ons-col>
          <v-ons-col>
            <div style="font-size: 25px; font-weight: bold">Login</div>
          </v-ons-col>
        </v-ons-row>


        <v-ons-list>
          <v-ons-list-item>
            <div class="center">
              <v-ons-input placeholder="Your ID" float v-model="userName">
              </v-ons-input>
            </div>
          </v-ons-list-item>
          <v-ons-list-item>
            <div class="center">
              <v-ons-input placeholder="Password" float type="password" v-model="password">
              </v-ons-input>
            </div>
          </v-ons-list-item>

          <v-ons-list-item>
            <v-ons-row>
              <v-ons-col>
                <v-ons-button modifier="cta" @click="login">
                  Login
                </v-ons-button>
              </v-ons-col>
              <v-ons-col>
                <v-ons-button modifier="light" @click="$router.push({ name: 'register' })">
                  Register
                </v-ons-button>
              </v-ons-col>
            </v-ons-row>

          </v-ons-list-item>

        </v-ons-list>
      </v-ons-card>
    </div>

  </v-ons-page>
</template>

<script>
  import ReqMixins from 'mixins/request'
  import { LoginType } from 'module/login'

  export default {
    mixins: [ReqMixins],
    data: () => ({
      userName: '',
      password: ''
    }),
    methods: {
      async login() {
        this.callApi(async () =>
        {
          const res = await this.$api.user.login(_.pick(this, ['userName', 'password']))
          this.$store.commit(LoginType.setAccessToken, res.data)
          this.$router.push({
            name: 'betting'
          })
        })
      }
    }
  }
</script>

<style lang="stylus">

</style>