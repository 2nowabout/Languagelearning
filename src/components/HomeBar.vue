<template>
  <v-container id="inspire">
    <!----------------------->
    <v-navigation-drawer
      expand-on-hover="expandOnHover"
      app
      :clipped="$vuetify.breakpoint.lgAndUp"
      :mini-variant="!leftBar"
      color="#0080ff"
    >
      <v-list dense>
        <v-list-item link class="px-2">
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> Account</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="loadDashboard()">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link bottom @click="loadLanguages()">
          <v-list-item-action>
            <v-icon>mdi-trending-up</v-icon>
          </v-list-item-action>
          <v-list-item-title>Languages</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  methods: {
    loadDashboard() {
      this.$router.push("Dashboard");
    },
    loadLanguages() {
      this.$router.push("Languages");
    },
  },
};
</script>
