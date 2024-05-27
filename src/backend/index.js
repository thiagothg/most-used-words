import { ipcMain } from "electron";

const pathToRows = require("./pathsToRows");
const prepareData = require("./prepareData");
const groupWords = require("./groupWords");

ipcMain.on("process-subtitles", (event, paths) => {
  pathToRows(paths)
    .then((rows) => prepareData(rows))
    .then((prepareData) => groupWords(prepareData))
    .then((groupedWords) => {
      event.reply("process-subtitles", groupedWords);
    });
});
