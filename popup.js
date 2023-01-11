'use strict';

var alarmBreak = 'break';

function setWorkAlarm(event) {
  let minutes = parseFloat(event.target.value);
  chrome.action.setBadgeText({text: 'ON'});
  chrome.alarms.create(alarmBreak,{
    delayInMinutes: minutes
  });
  chrome.storage.sync.set({minutes: minutes});
 // window.close(); à remettre après les tests ( fermait la console )
}

//document.getElementById('sampleMinute').addEventListener('click', setWorkAlarm);
document.getElementById('auTravail').addEventListener('click', setWorkAlarm);

