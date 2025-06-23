const iframe = document.getElementsByTagName("iframe")[0];
const searchQuerystr = window.location.search;
const videoId = searchQuerystr.split("=")[1];
console.log(videoId);
iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);
