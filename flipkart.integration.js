const sideBar = document.createElement("div");
const sidebarContent =
  '<div class="close" onclick="close()">&lt;</div> <div class="fk-container"><div class="logo-container"><img src="https://flipkart-hack-ae388.web.app/assets/logo.png" /></div><p>You are currently viewing</p><ul><li><img src="https://flipkart-hack-ae388.web.app/assets/1.webp"/><button class="buy-now1">Buy Now</a></li><li><img src="https://flipkart-hack-ae388.web.app/assets/2.webp"/><button class="buy-now2">Buy Now</a></li><li><img src="https://flipkart-hack-ae388.web.app/assets/3.webp"/><button class="buy-now3">Buy Now</a></li><li><img src="https://flipkart-hack-ae388.web.app/assets/4.webp"/><button class="buy-now4">Buy Now</a></li></ul></div>';

const widget = document.createElement("div");
const widgetContent = '<div class="fk-widget"></div>';

const createSideBar = () => {
  sideBar.className = "fk-sidebar";
  let videoContainer = document.querySelector(".html5-video-container");
  videoContainer.appendChild(sideBar);
  sideBar.innerHTML = sidebarContent;
};

const createWidget = () => {
  widget.className = "fk-widget";
  let videoContainer = document.querySelector(".html5-video-container");
  videoContainer.appendChild(widget);
  widget.innerHTML = widgetContent;
};

const close = () => {
  document.querySelector(".fk-sidebar").style.display = "none";
};

createSideBar();
// createWidget();

// setInterval(() => {
//   console.log(document.querySelector(".ytp-time-current").innerHTML);
// }, 1000);

// let src = "https://flipkart-hack-ae388.web.app/flipkart.integration.js";
// let css = "https://flipkart-hack-ae388.web.app/flipkart.integration.css";
// var scriptTag = document.createElement("script");
// scriptTag.setAttribute("src", src);
// scriptTag.id = "gokwikScript";
// var styleTag = document.createElement("link");
// styleTag.setAttribute("href", css);
// styleTag.setAttribute("rel", "stylesheet");
// document.head.appendChild(scriptTag);
// document.head.appendChild(styleTag);

document.querySelector(".buy-now1").addEventListener("click", () => {
  window.open(
    "https://www.flipkart.com/4b-full-sleeve-solid-men-jacket/p/itm68e6119a37304?pid=JCKGE9PWV292ZQJV&lid=LSTJCKGE9PWV292ZQJVKDSQGN&marketplace=FLIPKART&q=ranbir+red+jacket&store=clo%2Fqvw%2Fz0g&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=en_KF%2F8vyf4iOMnEgE%2Bjs%2FBs5XK5il%2FBMPDWrY%2BWe6YIV9E4jgBxDjH3eOFpE6ASTkfv27BJaXKkgSMbPoP7W2AqA%3D%3D&ppt=sp&ppn=sp&qH=314ab061c25f1c17",
    "_blank"
  );
});

document.querySelector(".buy-now2").addEventListener("click", () => {
  window.open(
    "https://www.flipkart.com/adrenex-solid-men-black-track-pants/p/itmeb0525e79e5b1?pid=TKPGAH5YRYY5QQRG&lid=LSTTKPGAH5YRYY5QQRGFKDSXK&marketplace=FLIPKART&q=black+track+pants&store=clo%2Fvua%2Fjlk&srno=s_1_8&otracker=search&otracker1=search&fm=Search&iid=en_C6M0VWsbpxkengxk1L77yEREDTYoIIpNhQ%2FWqOEgJOUeTbhikcZmi150YjFBqPK%2FHTHYKUviUXx1h3o%2B%2B%2FWpCQ%3D%3D&ppt=sp&ppn=sp&ssid=2uax307lq80000001657838081781&qH=8124c4c4dc054dc4",
    "_blank"
  );
});
document.querySelector(".buy-now3").addEventListener("click", () => {
  window.open(
    "https://www.flipkart.com/hrx-hrithik-roshan-solid-men-track-suit/p/itmdf582d1a0e82b?pid=TKSFZRFBJ4MWGGVA&lid=LSTTKSFZRFBJ4MWGGVAECZ7D0&marketplace=FLIPKART&q=blue+tracking+suit&store=clo%2Fnyk%2Fzp4&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=en_nl%2B3c7rSXlkoAqRRPmI9PxIkP5Mv0VKhzGeWomRtLWs%2F%2BCApOePodY4D8VU62b8xDCxknwMDwKBfc7Jyn8dHXg%3D%3D&ppt=sp&ppn=sp&ssid=ud4mw648ps0000001657838116682&qH=2244bc838081f0b2",
    "_blank"
  );
});
document.querySelector(".buy-now4").addEventListener("click", () => {
  window.open(
    "https://www.flipkart.com/cheer-pat-casual-full-sleeve-striped-women-orange-top/p/itm0a43cad486bc4?pid=TOPG5GHQYKJDJGFB&lid=LSTTOPG5GHQYKJDJGFBCQ7CWA&marketplace=FLIPKART&q=orange+top&store=clo%2Fash%2Fohw%2F36j&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=fda7827c-afb3-4d36-818d-c1989f304ab9.TOPG5GHQYKJDJGFB.SEARCH&ppt=sp&ppn=sp&ssid=60573rgsao0000001657839562477&qH=2982fa0b0d8f80fe",
    "_blank"
  );
});
