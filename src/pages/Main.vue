<template>
  <v-ons-splitter>
    <v-ons-splitter-side
        swipeable width="150px" collapse="" side="left"
        :open.sync="openSide">
      <v-ons-page>
        <v-ons-list>

          <v-ons-list-item class="bg-secondary text-white">Game</v-ons-list-item>
          <v-ons-list-item tappable modifier="chevron">
            <div class="center" @click="openSide = false; $router.push({ name: 'betting'})">Betting</div>
          </v-ons-list-item>


          <v-ons-list-item class="bg-secondary text-white">Report</v-ons-list-item>
          <v-ons-list-item tappable modifier="chevron">
            <div class="center" @click="openSide = false; $router.push({ name: 'bet-report'})">Bet Result</div>
          </v-ons-list-item>
          <v-ons-list-item tappable modifier="chevron">
            <div class="center" @click="openSide = false; $router.push({ name: 'store-report'})">Store Report</div>
          </v-ons-list-item>

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
              {{ thisPoint }}
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

  export default {
    mixins: [ReqMixins],
    data: () => ({
      openSide: false
    }),
    methods: {
      async dataInit() {
        const res = await this.callApi('info.user')
        this.$store.commit(UserType.setInfo, res.data)
      }
    },
    computed: {
      thisPoint() {
        return this.$store.state.User.info && this.$store.state.User.info.point
          ? this.$store.state.User.info.point
          : 0
      }
    },
    mounted() {
      this.dataInit()
    }
  }
</script>