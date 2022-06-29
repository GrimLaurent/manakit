function getUserAgent(mode: boolean) {
  let userAgent = navigator.userAgent;
  let browserName;

  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = "chrome";
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = "firefox";
  } else if (userAgent.match(/safari/i)) {
    browserName = "safari";
  } else if (userAgent.match(/opr\//i)) {
    browserName = "opera";
  } else if (userAgent.match(/edg/i)) {
    browserName = "edge";
  } else {
    browserName = "No browser detection";
  }

  if (mode) {
    // Mode Dev
    console.log("MANAKIT userAgent => ", browserName);
  }

  return browserName;
}

export default getUserAgent;

// var browserName = (function (agent) {
//   switch (true) {
//     case agent.indexOf("edge") > -1:
//       return "MS Edge";
//     case agent.indexOf("edg/") > -1:
//       return "Edge ( chromium based)";
//     case agent.indexOf("opr") > -1 && !!window.opr:
//       return "Opera";
//     case agent.indexOf("chrome") > -1 && !!window.chrome:
//       return "Chrome";
//     case agent.indexOf("trident") > -1:
//       return "MS IE";
//     case agent.indexOf("firefox") > -1:
//       return "Mozilla Firefox";
//     case agent.indexOf("safari") > -1:
//       return "Safari";
//     default:
//       return "other";
//   }
// })(window.navigator.userAgent.toLowerCase());

// document.querySelector("h1").innerText =
//   "You are using " + browserName + " browser";
