<template>
  <v-ons-splitter>
    <v-ons-splitter-side
        swipeable width="150px" collapse="" side="left"
        :open.sync="openSide">
      <v-ons-page>
        <v-ons-list>
          <v-ons-list-header>Lo</v-ons-list-header>
          <v-ons-list-item tappable modifier="chevron">
            <div class="center" @click="openSide = false; $router.push({ name: 'LoGame1'})">玩法1</div>
          </v-ons-list-item>
          <v-ons-list-item tappable modifier="chevron">
            <div class="center" @click="openSide = false; $router.push({ name: 'LoGame2'})">玩法2</div>
          </v-ons-list-item>
        </v-ons-list>
      </v-ons-page>
    </v-ons-splitter-side>

    <v-ons-splitter-content>
      <v-ons-page>
        <v-ons-toolbar>
          <div class="left">
            <v-ons-toolbar-button icon="ion-navicon, material: md-menu"
                                  @click="openSide = !openSide"></v-ons-toolbar-button>
          </div>
          <div class="center">Vietnam Lottery</div>
        </v-ons-toolbar>

        <div class="container">
          <router-view />
        </div>


      </v-ons-page>
    </v-ons-splitter-content>
  </v-ons-splitter>
</template>

<script>
  export default {
    data: () => ({
      isLoExpanded: false,
      currentPage: 'home',
      pages: ['home', 'news', 'settings'],
      openSide: false
    })
  }
</script>