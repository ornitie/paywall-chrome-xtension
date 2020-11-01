chrome.webRequest.onBeforeRequest.addListener(function (d) {
    return { cancel: true };
}, {
    urls: ["https://cdn.tinypass.com/api/tinypass.min.js"]
},
    ["blocking"]);