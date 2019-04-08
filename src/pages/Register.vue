<template>
  <v-ons-page>
    <!--<v-ons-toolbar modifier="cover-content">-->
    <!--<div class="center">Login</div>-->
    <!--</v-ons-toolbar>-->

    <div style="height: 20vh"></div>

    <v-ons-card>

      <v-ons-row>
        <v-ons-col width="30px">
          <v-ons-icon size="30px" icon="md-face"></v-ons-icon>
        </v-ons-col>
        <v-ons-col>
          <div style="font-size: 25px; font-weight: bold">Register</div>
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
          <div class="center">
            <v-ons-input placeholder="Nick Name" float v-model="nickName">
            </v-ons-input>
          </div>
        </v-ons-list-item>

        <v-ons-list-item>
          <v-ons-col>
            <v-ons-button modifier="cta" @click="register">
              <!-- modifier=material -->
              Submit
            </v-ons-button>
          </v-ons-col>
          <v-ons-col>
            <v-ons-button modifier="light" @click="$router.push({ name: 'login' })">
              Cancel
            </v-ons-button>
          </v-ons-col>
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
      userName: '',
      password: '',
      nickName: ''
    }),
    methods: {
      async register() {
        this.callApi(async () =>
        {
          const res = await this.$api.user.register(_.pick(this, ['userName', 'password', 'nickName']))
          this.$store.commit(LoginType.setAccessToken, res.data)
          this.$router.push({
            name: 'betting'
          })
        })
      }
    }
  }
</script>