'use strict';

var alarmNameWork = 'work';

function setBreakAlarm(n){
  let minutes = parseFloat(n);
  chrome.action.setBadgeText({text: '||'});
  chrome.alarms.create(alarmNameWork,{
    delayInMinutes: minutes});
  chrome.storage.sync.set({minutes: minutes});
  /* window.open(); */
}

chrome.alarms.onAlarm.addListener(function(alarm){
  if(alarm.name === "break"){
    chrome.action.setBadgeText({ text: '' });
    chrome.notifications.create({
      type: 'basic',
      iconUrl: '/img/tomato.png',
      title: "It's Time",
      message: "C'est l'heure de la pause!",
      priority: 0,
    });
    setBreakAlarm(1)
  }else if(alarm.name === "work"){
    chrome.action.setBadgeText({ text: '' });
    chrome.notifications.create({
      type: 'basic',
      iconUrl: '/img/tomato.png',
      title: "It's Time",
      message: "C'est l'heure de bosser feignasse!",
      priority: 0
    });
  }
}); 
  

