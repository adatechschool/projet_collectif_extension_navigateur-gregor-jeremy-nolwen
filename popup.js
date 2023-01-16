'use strict';

const alarmBreak = 'break';
let pageToForbid = '' ;

function setWorkAlarm(event) {
  let minutes = parseFloat(event.target.value);
  chrome.action.setBadgeText({text: 'ON'});
  chrome.alarms.create(alarmBreak,{
    delayInMinutes: minutes
  });
  chrome.storage.sync.set({minutes: minutes});
 // window.close(); à remettre après les tests ( fermait la console )
}

document.getElementById('startWorking').addEventListener('click', setWorkAlarm);

const divTip = document.getElementById("tooltipDiv");
const tooltip = document.getElementById("tooltipText");

divTip.addEventListener('click', () => {
  tooltip.style.display = 'block'; // change display to 'block' on click
}, true);

const divTasks = document.getElementById("legends");
const tooltipToDo = document.getElementById("tooltipToDo");

divTasks.addEventListener('mouseover', () => {
  tooltipToDo.style.display = 'block'; // change display to 'block' on mouseover
}, false);

divTasks.addEventListener('mouseleave', () => {
  tooltipToDo.style.display = 'none'; // change display to 'none' on mouseleave
}, false);

chrome.notifications.onButtonClicked.addListener(async () => {
  let minutes = parseFloat(document.getElementById('startWorking').value)  
  //const item = await chrome.storage.sync.get(['minutes']);
  console.log ("btn notif timer :", minutes, "minute")
  chrome.action.setBadgeText({ text: 'ON' });
  chrome.alarms.create(alarmBreak,{
    delayInMinutes: minutes});
});