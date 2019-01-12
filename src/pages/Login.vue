<template>
  <v-ons-page>
    <!--<v-ons-toolbar modifier="cover-content">-->
    <!--<div class="center">Login</div>-->
    <!--</v-ons-toolbar>-->

    <div style="height: 20vh"></div>

    <v-ons-card>

      <v-ons-row>
        <v-ons-col width="30px">
          <v-ons-icon size="30px" icon="md-home"></v-ons-icon>
        </v-ons-col>
        <v-ons-col>
          <div style="font-size: 25px; font-weight: bold">Login</div>
        </v-ons-col>
      </v-ons-row>


      <v-ons-list v-loading="loading">
        <v-ons-list-item>
          <div class="center">
            <v-ons-input placeholder="Your ID" float v-model="userID">
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
              <v-ons-button modifier="material" @click="login">
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

  </v-ons-page>
</template>

<script>
  import ReqMixins from 'mixins/request'
  import { LoginType } from 'module/login'

  export default {
    mixins: [ReqMixins],
    data: () => ({
      userID: '',
      password: ''
    }),
    methods: {
      async login() {
        const res = await this.callApi('login', _.pick(this, ['userID', 'password']))
        this.$store.commit(LoginType.setAccessToken, res.data)
        this.$router.push({
          name: 'betting'
        })
      }
    }
  }
</script>