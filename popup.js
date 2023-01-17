"use strict";

const alarmBreak = "break";
let pageToForbid = "";

document
  .getElementById("startWorking")
  .addEventListener("click", sendMessageToBackground);

function sendMessageToBackground() {
  chrome.runtime.sendMessage({ state: "Work" }, (response) => {
    // 3. Got an asynchronous response with the data from the service worker
    console.log(" state: 'Work'");
  });
}

const divTip = document.getElementById("tooltipDiv");
const tooltip = document.getElementById("tooltipText");

divTip.addEventListener(
  "click",
  () => {
    tooltip.style.display = "block"; // change display to 'block' on click
  },
  true
);

const divTasks = document.getElementById("legends");
const tooltipToDo = document.getElementById("tooltipToDo");

divTasks.addEventListener(
  "mouseover",
  () => {
    tooltipToDo.style.display = "block"; // change display to 'block' on mouseover
  },
  false
);

divTasks.addEventListener(
  "mouseleave",
  () => {
    tooltipToDo.style.display = "none"; // change display to 'none' on mouseleave
  },
  false
);
