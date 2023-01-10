'use strict';

var alarmNameBreak = 'break';

function setWorkAlarm(event) {
  let minutes = parseFloat(event.target.value);
  chrome.action.setBadgeText({text: 'ON'});
  chrome.alarms.create(alarmNameBreak,{
    delayInMinutes: minutes
  });
  chrome.storage.sync.set({minutes: minutes});
  window.close();
}

//An Alarm delay of less than the minimum 1 minute will fire
// in approximately 1 minute increments if released
document.getElementById('sampleMinute').addEventListener('click', setWorkAlarm);
document.getElementById('auTravail').addEventListener('click', setWorkAlarm);

