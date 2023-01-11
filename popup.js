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

/* function doNotAccess() {
  if ( window.location.hostname ==  "facebook.com"){
    alert ("C'est pas l'heure de checker FB !");
    //document.head.innerHTML = ("<style> body {background : pink} </style>")
  }
}

chrome.tabs.onCreated.addListener(doNotAccess());
chrome.tabs.onUpdated.addListener(doNotAccess());
 */

document.getElementById('auTravail').addEventListener('click', setWorkAlarm);
// document.getElementById('facebook').addEventListener('click',setInterdiction);

const targetHour = document.getElementById("tooltipDivHour");
const tooltipHour = document.getElementById("tooltipTextHour");

targetHour.addEventListener('click', () => {
  tooltipHour.style.display = 'block'; // change display to 'block' on mouseover
}, false);

/* targetHour.addEventListener('mouseleave', () => {
  tooltipHour.style.display = 'none'; // change display to 'none' on mouseleave
}, false); */

// vieux tests 
/* function setInterdiction(event) {
  pageToForbid = event.target.value
} */
/* 
function drawInterdiction(){
  if (window.location.hostname == pageToForbid) {
    alert ("C'est pas l'heure de checker FB !");
    document.head.innerHTML = ("<style> body {background : pink} </style>")
  }
}
 */