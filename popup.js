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

document.getElementById('auTravail').addEventListener('click', setWorkAlarm);

const divTip = document.getElementById("tooltipDiv");
const tooltip = document.getElementById("tooltipText");

divTip.addEventListener('click', () => {
  tooltip.style.display = 'block'; // change display to 'block' on mouseover
}, false);


// TESTS POUR EMPECHER ACCES RESEAUX SOCIAUX //

// document.getElementById('facebook').addEventListener('click',setInterdiction);

/* function doNotAccess() {
  if ( window.location.hostname ==  "facebook.com"){
    alert ("C'est pas l'heure de checker FB !");
    //document.head.innerHTML = ("<style> body {background : pink} </style>")
  }
}

chrome.tabs.onCreated.addListener(doNotAccess());
chrome.tabs.onUpdated.addListener(doNotAccess());
 */


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