"use strict";

var compteurSessions = 0;
const alarmWork = "work";
const alarmBreak = "break";
let alarmStatus = alarmBreak;
let user = "filterOFF";

function setBreakAlarm(n) {
  let minutes = parseFloat(n);
  if (n == 1) {
    chrome.action.setBadgeText({ text: "||" });
  } else if (n == 2) {
    chrome.action.setBadgeText({ text: "OFF" });
  }
  chrome.alarms.create(alarmWork, {
    delayInMinutes: minutes,
  });
  chrome.storage.sync.set({ minutes: minutes });
}

chrome.alarms.onAlarm.addListener(function (alarm) {
  if (alarm.name === alarmBreak) {
    alarmStatus = alarmBreak;
    compteurSessions += 1;
    chrome.action.setBadgeText({ text: "" });
    chrome.notifications.create({
      type: "basic",
      iconUrl: "/img/tomato.png",
      title: "It's Time",
      message: "Time for a break !",
      priority: 0,
    });
    console.log(" Time for a break !" + compteurSessions);
    if (compteurSessions % 4 == 0) {
      console.log("grosse pause");
      setBreakAlarm(2); // à changer pour 30 à la fin des tests
    } else {
      console.log("petite pause");
      setBreakAlarm(1); // à changer pour 5 à la fin des tests
    }
  } else if (alarm.name === alarmWork) {
    chrome.action.setBadgeText({ text: "" });
    chrome.notifications.create({
      type: "basic",
      iconUrl: "/img/tomato.png",
      title: "It's Time",
      message: "Time to go back to work !",
      buttons: [{ title: "Back to work" }],
      priority: 0,
    });
  }
});

console.log("background.js running");
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Message received: ", message);
  // 2. A page requested user data, respond with a copy of `user`
  if (message.state == "Work") {
    setWorkAlarm(1); // a changer par 25 à la fin des tests
  } else if (message.greeting === "get-user-data" && alarmStatus == alarmWork) {
    user = "filterON";
    sendResponse(user);
    return true;
  }
});

function setWorkAlarm(num) {
  alarmStatus = alarmWork;
  let minutes = parseFloat(num);
  chrome.action.setBadgeText({ text: "ON" });
  chrome.alarms.create(alarmBreak, {
    delayInMinutes: minutes,
  });
  chrome.storage.sync.set({ minutes: minutes });
  // window.close(); à remettre après les tests ( fermait la console )
}

chrome.notifications.onButtonClicked.addListener(async () => {
  console.log("btn notif timer a été appuyé !");
  setWorkAlarm(1);
});
