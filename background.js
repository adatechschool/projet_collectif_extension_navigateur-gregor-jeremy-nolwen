'use strict';

// rajouter un bouton sur la notification pour relancer un session de travail ? 

var compteurSessions=0;
var alarmWork = 'work';

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
      setBreakAlarm(2) // à changer pour 30
    }else{
      console.log("petite pause")
      setBreakAlarm(1) // à changer pour 5
    }
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
  
