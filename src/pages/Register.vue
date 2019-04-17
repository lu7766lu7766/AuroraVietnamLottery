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
            <el-col :span="18">
              <div class="center">
                <v-ons-input placeholder="Phone" float v-model="phone">
                </v-ons-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="center">
                <el-button type="success" size="medium" @click="sendVerifyCode()" :disabled="!isPhoneFormatRight">
                  {{ isWaiting ? waitSecs + 's...' : 'Send' }}
                </el-button>
              </div>
            </el-col>
          </v-ons-list-item>
          <v-ons-list-item v-if="isSendVerifyCode">
            <div class="center">
              <v-ons-input placeholder="Verity Code" float v-model="verifyCode">
              </v-ons-input>
            </div>
          </v-ons-list-item>

          <v-ons-list-item>
            <v-ons-col>
              <v-ons-button modifier="cta" @click="register" :disabled="!(isPhoneFormatRight && isSendVerifyCode)">
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
      password: '',
      nickName: '',
      phone: '',
      isSendVerifyCode: false,
      verifyCode: '',
      waitSecs: 30
    }),
    methods: {
      sendVerifyCode() {
        this.callApi(() =>
        {
          this.$api.sms.send({phone: this.phone}, {
            s: () =>
            {
              this.sMsg()
              this.startCounter()
              this.isSendVerifyCode = true
            }
          })
        })
      },
      startCounter() {
        setTimeout(() =>
        {
          if (this.waitSecs-- <= 0)
          {
            this.waitSecs = 30
          }
          else
          {
            this.startCounter()
          }
        }, 1000)
      },
      register() {
        this.callApi(async () =>
        {
          const res = await this.$api.user.register(_.pick(this, [
            'userName',
            'password',
            'nickName',
            'phone',
            'verifyCode'
          ]))
          this.$store.commit(LoginType.setAccessToken, res.data)
          this.$router.push({
            name: 'betting'
          })
        })
      }
    },
    computed: {
      isWaiting() {
        return this.waitSecs !== 30
      },
      isPhoneFormatRight() {
        return /09[0-9]{8}/.test(this.phone)
      }
    }
  }
</script>