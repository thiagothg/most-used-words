<template>
  <v-container fluid>
    <v-form>
      <v-file-input
        v-model="files"
        label="Selecione as legendas"
        prepend-icon="mdi-message-text"
        append-icon="mdi-send"
        multiple
        chips
        show-size
        counter
        clearable
        outlined
        name="uploadedfiles"
        @click:append="processSubtitles"
      >
      </v-file-input>
    </v-form>

    <div class="pills">
      <PillPartial
        v-for="word in groupedWords"
        :key="word.word"
        :word="word.word"
        :amount="word.amount"
      />
    </div>
  </v-container>
</template>

<script>
// import { ipcRenderer } from "electron";
import PillPartial from "./PillComponent.vue";

export default {
  components: { PillPartial },
  data: function () {
    return {
      groupedWords: [
        { word: "i", amount: 1234 },
        { word: "you", amount: 890 },
        { word: "he", amount: 234 },
        { word: "she", amount: 14 },
      ],
      files: [],
    };
  },
  methods: {
    processSubtitles() {
      console.log(this.files);

      // window.ipcRenderer.send("blabla", "pig");
      // window.ipcRenderer.on("blabla", (event, resp) => {
      //   console.log(resp);
      // });
    },
  },
};
</script>

<style>
.pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
