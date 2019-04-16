<template>
  <v-ons-splitter>
    <v-ons-splitter-side
        swipeable width="150px" collapse="" side="left"
        :open.sync="openSide">
      <v-ons-page>
        <v-ons-list>

          <v-ons-list-item class="bg-dark text-white">
            <div class="center">Hi {{ User.nickName }} !</div>
          </v-ons-list-item>

          <section v-show="!backend">
            <!---------- Game ---------->
            <v-ons-list-item class="bg-secondary text-white">Game</v-ons-list-item>
            <v-ons-list-item tappable modifier="chevron">
              <div class="center" @click="openSide = false; $router.push({ name: 'betting'})">Betting</div>
            </v-ons-list-item>

            <!---------- Report ---------->
            <v-ons-list-item class="bg-secondary text-white">Report</v-ons-list-item>
            <v-ons-list-item tappable modifier="chevron">
              <div class="center" @click="openSide = false; $router.push({ name: 'bet-report'})">Bet Report</div>
            </v-ons-list-item>
            <v-ons-list-item tappable modifier="chevron">
              <div class="center" @click="openSide = false; $router.push({ name: 'transfer-report'})">Transfer Report
              </div>
            </v-ons-list-item>
            <v-ons-list-item tappable>
              <div class="center" @click="openSide = false; $router.push({ name: 'history-lottery'})">History Numbers
              </div>
            </v-ons-list-item>

            <!---------- Transfer---------->
            <v-ons-list-item class="bg-secondary text-white">Point</v-ons-list-item>
            <v-ons-list-item tappable modifier="chevron">
              <div class="center" @click="openSide = false; $router.push({ name: 'transfer-point' })">Transfer Point
              </div>
            </v-ons-list-item>


            <!---------- System---------->
            <v-ons-list-item class="bg-secondary text-white">System</v-ons-list-item>
            <v-ons-list-item tappable modifier="chevron">
              <div class="center" @click="openSide = false; $router.push({ name: 'update-myself'})">Update Profile</div>
            </v-ons-list-item>
            <v-ons-list-item tappable modifier="chevron" v-show="User.isManager">
              <div class="center" @click="backend = !backend">
                <span v-if="User.isManager">Backend</span>
              </div>
            </v-ons-list-item>
            <v-ons-list-item tappable>
              <div class="center" @click="openSide = false; logout()">Logout</div>
            </v-ons-list-item>
          </section>

          <section v-show="backend">
            <v-ons-list-item class="bg-secondary text-white">Backend</v-ons-list-item>
            <v-ons-list-item tappable modifier="chevron" v-show="User.isSupplier">
              <div class="center" @click="openSide = false; $router.push({ name: 'create-user'})">
                <span v-if="User.isSupplier">Create User</span>
              </div>
            </v-ons-list-item>
            <v-ons-list-item tappable modifier="chevron" v-show="User.isAdmin">
              <div class="center" @click="openSide = false; $router.push({ name: 'add-point' })">
                <span v-if="User.isAdmin">Add Point</span>
              </div>
            </v-ons-list-item>
            <v-ons-list-item tappable modifier="chevron" v-show="User.isAdmin">
              <div class="center" @click="openSide = false; $router.push({ name: 'store-report' })">
                <span v-if="User.isAdmin">Store Report</span>
              </div>
            </v-ons-list-item>
            <v-ons-list-item tappable modifier="chevron" v-show="User.isAdmin">
              <div class="center" @click="openSide = false; $router.push({ name: 'user-manage' })">
                <span v-if="User.isAdmin">User Manage</span>
              </div>
            </v-ons-list-item>
            <v-ons-list-item tappable modifier="chevron" v-show="User.isAdmin">
              <div class="center" @click="openSide = false; $router.push({ name: 'fetch-numbers' })">
                <span v-if="User.isAdmin">Fetch Numbers</span>
              </div>
            </v-ons-list-item>
            <v-ons-list-item tappable modifier="chevron">
              <div class="center" @click="backend = !backend">Back</div>
            </v-ons-list-item>
          </section>

        </v-ons-list>

      </v-ons-page>
    </v-ons-splitter-side>

    <v-ons-splitter-content>
      <v-ons-page>

        <v-ons-toolbar>
          <div class="left">
            <v-ons-toolbar-button icon="ion-navicon, material: md-menu"
                                  @click="openSide = !openSide">
            </v-ons-toolbar-button>
          </div>
          <div class="center">Vietnam Lottery</div>
          <div class="right">
            <div style="padding: 0 10px" class="text-danger">
              {{ User.point }}
            </div>
          </div>
        </v-ons-toolbar>

        <div class="container">
          <router-view />
        </div>

      </v-ons-page>
    </v-ons-splitter-content>
  </v-ons-splitter>
</template>

<script>
  import ReqMixins from 'mixins/request'
  import { UserType } from 'module/user'
  import { LoginType } from 'module/login'

  export default {
    mixins: [ReqMixins],
    data: () => ({
      openSide: false,
      scroller: null,
      backend: false
    }),
    methods: {
      onScroll(e) {
        if (e.target.scrollTop + e.target.clientHeight === e.target.scrollHeight)
        {
          this.$bus.emit('onBottom')
        }
      },
      getUserInfo() {
        this.callApi(async () =>
        {
          const res = await this.$api.user.getUserInfo()
          this.$store.commit(UserType.setInfo, res.data)
        })
      },
      logout() {
        this.$store.commit(LoginType.clearAccessToken)
        this.$store.commit(UserType.clearInfo)
      }
    },
    mounted() {
      this.getUserInfo()
      this.scroller = document.querySelector('.container').parentNode
      this.scroller.addEventListener('scroll', this.onScroll, true)
      this.$bus.on('getUserInfo', this.getUserInfo)
    },
    beforeDestroy() {
      this.scroller.removeEventListener('scroll', this.onScroll)
      this.$bus.off('getUserInfo')
    }
  }
</script>