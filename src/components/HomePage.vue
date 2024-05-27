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
const { ipcRenderer } = window.require("electron");
import PillPartial from "./PillComponent.vue";

export default {
  components: { PillPartial },
  data: function () {
    return {
      groupedWords: [],
      files: [],
    };
  },
  methods: {
    processSubtitles() {
      console.log(this.files);
      let paths = this.files.map((f) => f.path);

      ipcRenderer.send("process-subtitles", paths);
      ipcRenderer.on("process-subtitles", (event, resp) => {
        this.groupedWords = resp;
      });
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
