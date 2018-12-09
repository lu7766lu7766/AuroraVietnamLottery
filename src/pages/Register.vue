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
            <v-ons-input placeholder="your phone" float v-model="userID">
            </v-ons-input>
          </div>
        </v-ons-list-item>
        <v-ons-list-item>
          <div class="center">
            <v-ons-input placeholder="password" float type="password" v-model="password">
            </v-ons-input>
          </div>
        </v-ons-list-item>

        <v-ons-list-item>
          <v-ons-button modifier="material">
            Submit
          </v-ons-button>
        </v-ons-list-item>

      </v-ons-list>
    </v-ons-card>

  </v-ons-page>
</template>

<script>
  export default {
    data: () => ({
      userID: '',
      password: ''
    }),
    methods: {
      login() {

      }
    }
  }
</script>