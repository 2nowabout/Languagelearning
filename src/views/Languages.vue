<template>
  <div>
    <HomeBar />
    <v-container>
      <v-row>
        <v-col
          v-for="index in this.languages.length"
          v-bind:key="index"
          cols="12"
          xs="12"
          sm="12"
          md="10"
          lg="8"
          xl="8"
        >
          <v-card :loading="loadingState">
            <v-img
              height="140"
              src="https://d2tyltutevw8th.cloudfront.net/media/image/safest-2019-country-1573244896.jpg"
            ></v-img>
            <!--==========================================-->
            <v-row dense justify="start" align="center">
              <v-col xs="7" sm="7" md="7" lg="7" xl="7">
                <v-card-title style="margin-top: -8px;">{{
                  languages[index - 1].language
                }}</v-card-title>
              </v-col>
              <v-progress-linear value="30" style="margin:2%;">
              </v-progress-linear>
              <v-col xs="5" sm="5" md="5" lg="5" xl="5">
                <v-row no-gutters justify="center" align="center"> </v-row>
              </v-col>
            </v-row>
            <!--==========================================-->
            <v-card-text> </v-card-text>
            <v-card-actions>
              <v-btn
                color="blue"
                @click="selectLanguage(languages[index - 1].language)"
                style="margin-bottom:3%; margin-left:2%; top: 50%; left: 50%; transform: translate(-50%, -50%);"
                >Select this language</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HomeBar from "@/components/HomeBar.vue";

export default {
  name: "Languages",
  components: {
    HomeBar,
  },
  methods: {
    selectLanguage(language) {
      language;
      //TODO RESTAPI DO STUFF
    },
    loadLanguages() {
      this.$store.dispatch("");
    },
  },
  data: () => ({
    languages: [
      { language: "English" },
      { language: "French" },
      { language: "German" },
      { language: "Japanese" },
      { language: "Spanish" },
    ],
  }),
};
</script>
