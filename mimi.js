function generateSTYLES() {
  return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
body {
  background: rgb(101, 101, 101);
  color: #fff;
  font-family: "Open Sans", sans-serif;
  max-height: 700px;
  overflow: hidden;
  max-height: vw;
}
.c {
  text-align: center;
  display: flex ;
  flex-direction: column ; 
  position: relative;
  max-width: 80%;
  margin: 100px auto;
}
.STOP {
  font-size: 200px;
  position: relative;
  display: inline-block;
  z-index: 2;
  letter-spacing: 15px;
}
._1 {
  text-align: center;
  display: block;
  position: relative;
  letter-spacing: 12px;
  font-size: 4em;
  line-height: 80%;
}
._2 {
  text-align: center;
  display: block;
  position: relative;
  font-size: 2em;
  margin-top: 1em;
  color: black;
}

.text {
  font-size: 70px;
  text-align: center;
  position: relative;
  display: inline-block;
  margin: 19px 0px 0px 0px;
  /* top: 256.301px; */
  z-index: 3;
  width: 100%;
  line-height: 1.2em;
  display: inline-block;
}


.right {
  float: right;
  width: 60%;
}

hr {
  padding: 0;
  border: none;
  border-top: 5px solid #fff;
  color: #fff;
  text-align: center;
  margin: 20px auto;
  width: 420px;
  height: 10px;
  z-index: -10;
}

hr:after {
  display: inline-block;
  position: relative;
  top: -0.75em;
  font-size: 2em;
  padding: 0 0.2em;
  background: #33cc99;
}

.cloud {
  width: 350px;
  height: 120px;

  background: #fff;
  background: linear-gradient(top, #fff 100%);
  background: -webkit-linear-gradient(top, #fff 100%);
  background: -moz-linear-gradient(top, #fff 100%);
  background: -ms-linear-gradient(top, #fff 100%);
  background: -o-linear-gradient(top, #fff 100%);

  border-radius: 100px;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;

  position: absolute;
  margin: 120px auto 20px;
  z-index: -1;
  transition: ease 1s;
}

.cloud:after,
.cloud:before {
  content: "";
  position: absolute;
  background: #fff;
  z-index: -1;
}

.cloud:after {
  width: 100px;
  height: 100px;
  top: -50px;
  left: 50px;

  border-radius: 100px;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
}

.cloud:before {
  width: 180px;
  height: 180px;
  top: -90px;
  right: 50px;

  border-radius: 200px;
  -webkit-border-radius: 200px;
  -moz-border-radius: 200px;
}

.x1 {
  top: -50px;
  left: 100px;
  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  transform: scale(0.3);
  opacity: 0.9;
  -webkit-animation: moveclouds 15s linear infinite;
  -moz-animation: moveclouds 15s linear infinite;
  -o-animation: moveclouds 15s linear infinite;
}

.x1_5 {
  top: -80px;
  left: 250px;
  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  transform: scale(0.3);
  -webkit-animation: moveclouds 17s linear infinite;
  -moz-animation: moveclouds 17s linear infinite;
  -o-animation: moveclouds 17s linear infinite;
}

.x2 {
  left: 250px;
  top: 30px;
  -webkit-transform: scale(0.6);
  -moz-transform: scale(0.6);
  transform: scale(0.6);
  opacity: 0.6;
  -webkit-animation: moveclouds 25s linear infinite;
  -moz-animation: moveclouds 25s linear infinite;
  -o-animation: moveclouds 25s linear infinite;
}

.x3 {
  left: 250px;
  bottom: -70px;

  -webkit-transform: scale(0.6);
  -moz-transform: scale(0.6);
  transform: scale(0.6);
  opacity: 0.8;

  -webkit-animation: moveclouds 25s linear infinite;
  -moz-animation: moveclouds 25s linear infinite;
  -o-animation: moveclouds 25s linear infinite;
}

.x4 {
  left: 470px;
  botttom: 20px;

  -webkit-transform: scale(0.75);
  -moz-transform: scale(0.75);
  transform: scale(0.75);
  opacity: 0.75;

  -webkit-animation: moveclouds 18s linear infinite;
  -moz-animation: moveclouds 18s linear infinite;
  -o-animation: moveclouds 18s linear infinite;
}

.x5 {
  left: 200px;
  top: 300px;

  -webkit-transform: scale(0.5);
  -moz-transform: scale(0.5);
  transform: scale(0.5);
  opacity: 0.8;

  -webkit-animation: moveclouds 20s linear infinite;
  -moz-animation: moveclouds 20s linear infinite;
  -o-animation: moveclouds 20s linear infinite;
}

@-webkit-keyframes moveclouds {
  0% {
    margin-left: 1000px;
  }
  100% {
    margin-left: -1000px;
  }
}
@-moz-keyframes moveclouds {
  0% {
    margin-left: 1000px;
  }
  100% {
    margin-left: -1000px;
  }
}
@-o-keyframes moveclouds {
  0% {
    margin-left: 1000px;
  }
  100% {
    margin-left: -1000px;
  }
}
 </style>`;
}

function generateHTML(pageName) {
  return `
 
 <div id="clouds">
    <div class="cloud x1"></div>
    <div class="cloud x1_5"></div>
    <div class="cloud x2"></div>
    <div class="cloud x3"></div>
    <div class="cloud x4"></div>
    <div class="cloud x5"></div>
</div>
<div class='c'>
    <div class='STOP'>STOP</div>
    <hr>
    <div class='_1'>GET BACK TO WORK</div>
    <div class='_2'>STUDYING > ${pageName}</div>
</div>
 `;
}

// executeScript runs this code inside the tab
function addFilter(spec) {
  if (spec == "filter") {
    switch (true) {
      case window.location.hostname.startsWith("www.youtube.com"):
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("YOUTUBE");
        break;
      case window.location.hostname.startsWith("www.facebook.com"):
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("FACEBOOK");
        break;
      case window.location.hostname.startsWith("www.netflix.com"):
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("NETFLIX");
        break;
      case window.location.hostname.startsWith("www.instagram.com"):
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("INSTAGRAM");
        break;
      case window.location.hostname.startsWith("www.tiktok.com"):
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("TIKTOK");
        break;
      case window.location.hostname.startsWith("www.twitch.tv"):
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("TWITCH");
        break;
      case window.location.hostname.startsWith("twitter.com"):
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("TWITTER");
        break;
    }
  }
}

console.log("mimi running this");
chrome.runtime.sendMessage({ greeting: "get-user-data" }, (response) => {
  // 3. Got an asynchronous response with the data from the service worker
  console.log("received user data", response);
  if (response == "filterON") {
    addFilter("filter");
  } else {
    addFilter("nofilter");
  }
});
