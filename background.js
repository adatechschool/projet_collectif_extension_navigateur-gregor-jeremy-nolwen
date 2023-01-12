'use strict';

var compteurSessions=0;
var alarmWork = 'work';
const alarmBreak = 'break';

function setBreakAlarm(n){
  let minutes = parseFloat(n);
  if (n=1){
    chrome.action.setBadgeText({text: '||'});
  } else if (n==2){
    chrome.action.setBadgeText({text: 'OFF'});
}
  chrome.alarms.create(alarmWork,{
  delayInMinutes: minutes});
  chrome.storage.sync.set({minutes: minutes});
}

chrome.alarms.onAlarm.addListener(function(alarm){
  if(alarm.name === "break"){
    compteurSessions += 1
    chrome.action.setBadgeText({ text: '' });
    chrome.notifications.create({
      type: 'basic',
      iconUrl: '/img/tomato.png',
      title: "It's Time",
      message: "C'est l'heure de la pause!",
      priority: 0,
    });
    console.log(" c'est l'heure de la pause numero :"+ compteurSessions)
    if (compteurSessions%4 == 0){
      console.log("grosse pause")
      setBreakAlarm(2) // à changer pour 30 à la fin des tests
    }else{
      console.log("petite pause")
      setBreakAlarm(1) // à changer pour 5 à la fin des tests
    }
  }else if(alarm.name === "work"){
    chrome.action.setBadgeText({ text: '' });
    chrome.notifications.create({
      type: 'basic',
      iconUrl: '/img/tomato.png',
      title: "It's Time",
      message: "C'est l'heure de bosser feignasse!",
      buttons: [
        { title: 'Back to work' }
      ],
      priority: 0
    });
  }
}); 

chrome.notifications.onButtonClicked.addListener(async () => {
  const item = await chrome.storage.sync.get(['minutes']);
  console.log (item)
  chrome.action.setBadgeText({ text: 'ON' });
  chrome.alarms.create(alarmBreak,{
    delayInMinutes: item.minutes});
});
  
